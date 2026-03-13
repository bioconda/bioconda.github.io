:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2variants'
.. highlight: bash

vcf2variants
============

.. conda:recipe:: vcf2variants
   :replaces_section_title:
   :noindex:

   Convert vcf files to varda variant files.

   :homepage: https://github.com/varda/varda2_preprocessing
   :license: MIT / MIT
   :recipe: /`vcf2variants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2variants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2variants/meta.yaml>`_

   


.. conda:package:: vcf2variants

   |downloads_vcf2variants| |docker_vcf2variants|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends on natsort: 
   :depends on pysam: 
   :depends on python: ``>=3.6``
   :depends on vcfphasesets: 

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

    pixi global install vcf2variants

to add into an existing workspace instead, run::

    pixi add vcf2variants

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2variants

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2variants

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2variants:<tag>

(see `vcf2variants/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2variants| image:: https://img.shields.io/conda/dn/bioconda/vcf2variants.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2variants
   :alt:   (downloads)
.. |docker_vcf2variants| image:: https://quay.io/repository/biocontainers/vcf2variants/status
   :target: https://quay.io/repository/biocontainers/vcf2variants
.. _`vcf2variants/tags`: https://quay.io/repository/biocontainers/vcf2variants?tab=tags


.. raw:: html

    <script>
        var package = "vcf2variants";
        var versions = ["1.3","1.2","0.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2variants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2variants/README.html