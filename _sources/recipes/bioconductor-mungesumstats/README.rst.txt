:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mungesumstats'
.. highlight: bash

bioconductor-mungesumstats
==========================

.. conda:recipe:: bioconductor-mungesumstats
   :replaces_section_title:
   :noindex:

   Standardise summary statistics from GWAS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MungeSumstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mungesumstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mungesumstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mungesumstats/meta.yaml>`_

   The \*MungeSumstats\* package is designed to facilitate the standardisation of GWAS summary statistics. It reformats inputted summary statisitics to include SNP\, CHR\, BP and can look up these values if any are missing. It also pefrorms dozens of QC and filtering steps to ensure high data quality and minimise inter\-study differences.


.. conda:package:: bioconductor-mungesumstats

   |downloads_bioconductor-mungesumstats| |docker_bioconductor-mungesumstats|

   :versions:
      
      

      ``1.18.1-0``,  ``1.14.1-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ieugwasr: ``>=1.0.1``
   :depends on r-r.utils: 
   :depends on r-rcurl: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-mungesumstats

to add into an existing workspace instead, run::

    pixi add bioconductor-mungesumstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mungesumstats

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mungesumstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mungesumstats:<tag>

(see `bioconductor-mungesumstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mungesumstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mungesumstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mungesumstats
   :alt:   (downloads)
.. |docker_bioconductor-mungesumstats| image:: https://quay.io/repository/biocontainers/bioconductor-mungesumstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mungesumstats
.. _`bioconductor-mungesumstats/tags`: https://quay.io/repository/biocontainers/bioconductor-mungesumstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mungesumstats";
        var versions = ["1.18.1","1.14.1","1.10.1","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mungesumstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mungesumstats/README.html