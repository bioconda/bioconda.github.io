:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-msa2vcf'
.. highlight: bash

jvarkit-msa2vcf
===============

.. conda:recipe:: jvarkit-msa2vcf
   :replaces_section_title:
   :noindex:

   Writes a VCF from a multiple sequence alignment \(MSA\) in CLUSTAW or a FASTA format

   :homepage: https://lindenb.github.io/jvarkit/MsaToVcf.html
   :license: MIT
   :recipe: /`jvarkit-msa2vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-msa2vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-msa2vcf/meta.yaml>`_

   


.. conda:package:: jvarkit-msa2vcf

   |downloads_jvarkit-msa2vcf| |docker_jvarkit-msa2vcf|

   :versions:
      
      

      ``201904251722-1``,  ``201904251722-0``

      

   
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install jvarkit-msa2vcf

to add into an existing workspace instead, run::

    pixi add jvarkit-msa2vcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jvarkit-msa2vcf

Alternatively, to install into a new environment, run::

    conda create -n envname jvarkit-msa2vcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jvarkit-msa2vcf:<tag>

(see `jvarkit-msa2vcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jvarkit-msa2vcf| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-msa2vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-msa2vcf
   :alt:   (downloads)
.. |docker_jvarkit-msa2vcf| image:: https://quay.io/repository/biocontainers/jvarkit-msa2vcf/status
   :target: https://quay.io/repository/biocontainers/jvarkit-msa2vcf
.. _`jvarkit-msa2vcf/tags`: https://quay.io/repository/biocontainers/jvarkit-msa2vcf?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-msa2vcf";
        var versions = ["201904251722","201904251722"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-msa2vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-msa2vcf/README.html