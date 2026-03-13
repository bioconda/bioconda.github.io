:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-champ'
.. highlight: bash

bioconductor-champ
==================

.. conda:recipe:: bioconductor-champ
   :replaces_section_title:
   :noindex:

   Chip Analysis Methylation Pipeline for Illumina HumanMethylation450 and EPIC

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ChAMP.html
   :license: GPL-3
   :recipe: /`bioconductor-champ <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champ>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champ/meta.yaml>`_

   The package includes quality control metrics\, a selection of normalization methods and novel methods to identify differentially methylated regions and to highlight copy number alterations.


.. conda:package:: bioconductor-champ

   |downloads_bioconductor-champ| |docker_bioconductor-champ|

   :versions:
      
      

      ``2.28.0-0``,  ``2.22.0-0``,  ``2.20.1-0``,  ``2.18.1-1``,  ``2.16.0-1``,  ``2.14.0-1``,  ``2.12.2-0``

      

   
   :depends on bioconductor-bumphunter: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-champdata: ``>=2.30.0,<2.31.0``
   :depends on bioconductor-dmrcate: ``>=2.12.0,<2.13.0``
   :depends on bioconductor-dnacopy: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-globaltest: ``>=5.52.0,<5.53.0``
   :depends on bioconductor-goseq: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-illumina450probevariants.db: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends on bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends on bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends on bioconductor-illuminaio: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends on bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends on bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-missmethyl: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-preprocesscore: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends on bioconductor-sva: ``>=3.46.0,<3.47.0``
   :depends on bioconductor-watermelon: ``>=2.4.0,<2.5.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-combinat: 
   :depends on r-dendextend: 
   :depends on r-doparallel: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-hmisc: 
   :depends on r-isva: 
   :depends on r-kpmt: 
   :depends on r-matrixstats: 
   :depends on r-plotly: ``>=4.5.6``
   :depends on r-plyr: 
   :depends on r-prettydoc: 
   :depends on r-quadprog: 
   :depends on r-rcolorbrewer: 
   :depends on r-rmarkdown: 
   :depends on r-rpmm: 
   :depends on r-shiny: 
   :depends on r-shinythemes: 

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

    pixi global install bioconductor-champ

to add into an existing workspace instead, run::

    pixi add bioconductor-champ

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-champ

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-champ

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-champ:<tag>

(see `bioconductor-champ/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-champ| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-champ.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-champ
   :alt:   (downloads)
.. |docker_bioconductor-champ| image:: https://quay.io/repository/biocontainers/bioconductor-champ/status
   :target: https://quay.io/repository/biocontainers/bioconductor-champ
.. _`bioconductor-champ/tags`: https://quay.io/repository/biocontainers/bioconductor-champ?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-champ";
        var versions = ["2.28.0","2.22.0","2.20.1","2.18.1","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-champ/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-champ/README.html