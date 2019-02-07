.. title:: Package Recipe 'bioconductor-homo.sapiens'
.. highlight: bash


bioconductor-homo.sapiens
=========================

.. conda:recipe:: bioconductor-homo.sapiens
   :replaces_section_title:

   Contains the Homo.sapiens object to access data from several related annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/Homo.sapiens.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-homo.sapiens <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-homo.sapiens>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-homo.sapiens/meta.yaml>`_

   


.. conda:package:: bioconductor-homo.sapiens

   |downloads_bioconductor-homo.sapiens| |docker_bioconductor-homo.sapiens|

   :versions: 1.3.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.17.11 :conda:package:`bioconductor-genomicfeatures`  :conda:package:`bioconductor-go.db`  :conda:package:`bioconductor-org.hs.eg.db`  :conda:package:`bioconductor-organismdbi` >=1.11.39 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene`  :conda:package:`r-base` 3.4.1* :conda:package:`wget`  

   :required~by: |required_by_bioconductor-homo.sapiens|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-homo.sapiens

   and update with::

      conda update bioconductor-homo.sapiens

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-homo.sapiens


.. |required_by_bioconductor-homo.sapiens| conda:required_by:: bioconductor-homo.sapiens
.. |downloads_bioconductor-homo.sapiens| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-homo.sapiens.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-homo.sapiens| image:: https://quay.io/repository/biocontainers/bioconductor-homo.sapiens/status
   :target: https://quay.io/repository/biocontainers/bioconductor-homo.sapiens







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-homo.sapiens/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-homo.sapiens/README.html

