:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-reformatter'
.. highlight: bash

vcf-reformatter
===============

.. conda:recipe:: vcf-reformatter
   :replaces_section_title:
   :noindex:

   Fast VCF file parser and reformatter with VEP and SnpEff annotation support

   :homepage: https://github.com/flalom/vcf-reformatter
   :documentation: https://github.com/flalom/vcf-reformatter/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`vcf-reformatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-reformatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-reformatter/meta.yaml>`_

   A Rust command\-line tool for parsing and reformatting VCF \(Variant Call Format\) files\, 
   with support for VEP \(Variant Effect Predictor\) and SnpEff annotations. 
   This tool flattens complex VCF files into tab\-separated values \(TSV\) format 
   for easier downstream analysis.



.. conda:package:: vcf-reformatter

   |downloads_vcf-reformatter| |docker_vcf-reformatter|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install vcf-reformatter

to add into an existing workspace instead, run::

    pixi add vcf-reformatter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf-reformatter

Alternatively, to install into a new environment, run::

    conda create -n envname vcf-reformatter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf-reformatter:<tag>

(see `vcf-reformatter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf-reformatter| image:: https://img.shields.io/conda/dn/bioconda/vcf-reformatter.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-reformatter
   :alt:   (downloads)
.. |docker_vcf-reformatter| image:: https://quay.io/repository/biocontainers/vcf-reformatter/status
   :target: https://quay.io/repository/biocontainers/vcf-reformatter
.. _`vcf-reformatter/tags`: https://quay.io/repository/biocontainers/vcf-reformatter?tab=tags


.. raw:: html

    <script>
        var package = "vcf-reformatter";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-reformatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-reformatter/README.html