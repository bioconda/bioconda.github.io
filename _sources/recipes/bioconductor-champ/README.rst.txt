:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-champ'
.. highlight: bash

bioconductor-champ
==================

.. conda:recipe:: bioconductor-champ
   :replaces_section_title:
   :noindex:

   Chip Analysis Methylation Pipeline for Illumina HumanMethylation450 and EPIC

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ChAMP.html
   :license: GPL-3
   :recipe: /`bioconductor-champ <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champ>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champ/meta.yaml>`_

   The package includes quality control metrics\, a selection of normalization methods and novel methods to identify differentially methylated regions and to highlight copy number alterations.


.. conda:package:: bioconductor-champ

   |downloads_bioconductor-champ| |docker_bioconductor-champ|

   :versions:
      
      

      ``2.28.0-0``,  ``2.22.0-0``,  ``2.20.1-0``,  ``2.18.1-1``,  ``2.16.0-1``,  ``2.14.0-1``,  ``2.12.2-0``

      

   
   :depends bioconductor-bumphunter: ``>=1.40.0,<1.41.0``
   :depends bioconductor-champdata: ``>=2.30.0,<2.31.0``
   :depends bioconductor-dmrcate: ``>=2.12.0,<2.13.0``
   :depends bioconductor-dnacopy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-globaltest: ``>=5.52.0,<5.53.0``
   :depends bioconductor-goseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-illumina450probevariants.db: ``>=1.34.0,<1.35.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-illuminaio: ``>=0.40.0,<0.41.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-missmethyl: ``>=1.32.0,<1.33.0``
   :depends bioconductor-preprocesscore: ``>=1.60.0,<1.61.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-sva: ``>=3.46.0,<3.47.0``
   :depends bioconductor-watermelon: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-combinat: 
   :depends r-dendextend: 
   :depends r-doparallel: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-isva: 
   :depends r-kpmt: 
   :depends r-matrixstats: 
   :depends r-plotly: ``>=4.5.6``
   :depends r-plyr: 
   :depends r-prettydoc: 
   :depends r-quadprog: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
   :depends r-rpmm: 
   :depends r-shiny: 
   :depends r-shinythemes: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-champ

   and update with::

      conda update bioconductor-champ

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-champ:<tag>

   (see `bioconductor-champ/tags`_ for valid values for ``<tag>``)


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