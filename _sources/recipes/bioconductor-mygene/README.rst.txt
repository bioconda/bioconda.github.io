.. title:: Package Recipe 'bioconductor-mygene'
.. highlight: bash


bioconductor-mygene
===================

.. conda:recipe:: bioconductor-mygene
   :replaces_section_title:

   MyGene.Info\_ provides simple\-to\-use REST web services to query\/retrieve gene annotation data. It\'s designed with simplicity and performance emphasized. \*mygene\*\, is an easy\-to\-use R wrapper to access MyGene.Info\_ services.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mygene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mygene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mygene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mygene/meta.yaml>`_
   :links: biotools: :biotools:`mygene`, doi: :doi:`10.1101/009333`

   


.. conda:package:: bioconductor-mygene

   |downloads_bioconductor-mygene| |docker_bioconductor-mygene|

   :versions: 1.18.0, 1.16.2, 1.14.0

   :depends: :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hmisc`  :conda:package:`r-httr` >=0.3 :conda:package:`r-jsonlite` >=0.9.7 :conda:package:`r-plyr`  :conda:package:`r-sqldf`  

   :required~by: |required_by_bioconductor-mygene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mygene

   and update with::

      conda update bioconductor-mygene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mygene


.. |required_by_bioconductor-mygene| conda:required_by:: bioconductor-mygene
.. |downloads_bioconductor-mygene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mygene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mygene| image:: https://quay.io/repository/biocontainers/bioconductor-mygene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mygene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mygene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mygene/README.html

