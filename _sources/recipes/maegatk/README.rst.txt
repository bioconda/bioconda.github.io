:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maegatk'
.. highlight: bash

maegatk
=======

.. conda:recipe:: maegatk
   :replaces_section_title:
   :noindex:

   Mitochondrial Alteration Enrichment and Genome Analysis Toolkit.

   :homepage: https://github.com/caleblareau/maegatk
   :documentation: https://github.com/caleblareau/maegatk/wiki
   
   :license: MIT / MIT
   :recipe: /`maegatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maegatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maegatk/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01210-8`

   Processing and quality control of mitochondrial genome variants from MAESTER data.


.. conda:package:: maegatk

   |downloads_maegatk| |docker_maegatk|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-summarizedexperiment: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on click: 
   :depends on fgbio-minimal: 
   :depends on freebayes: 
   :depends on openjdk: 
   :depends on optparse-pretty: 
   :depends on pulp: ``<2.8``
   :depends on pysam: 
   :depends on pytest: 
   :depends on python: ``>=3``
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-matrix: 
   :depends on regex: 
   :depends on ruamel.yaml: ``0.16.12.*``
   :depends on samtools: 
   :depends on snakemake-minimal: ``<8``

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

    pixi global install maegatk

to add into an existing workspace instead, run::

    pixi add maegatk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maegatk

Alternatively, to install into a new environment, run::

    conda create -n envname maegatk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maegatk:<tag>

(see `maegatk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maegatk| image:: https://img.shields.io/conda/dn/bioconda/maegatk.svg?style=flat
   :target: https://anaconda.org/bioconda/maegatk
   :alt:   (downloads)
.. |docker_maegatk| image:: https://quay.io/repository/biocontainers/maegatk/status
   :target: https://quay.io/repository/biocontainers/maegatk
.. _`maegatk/tags`: https://quay.io/repository/biocontainers/maegatk?tab=tags


.. raw:: html

    <script>
        var package = "maegatk";
        var versions = ["0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maegatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maegatk/README.html