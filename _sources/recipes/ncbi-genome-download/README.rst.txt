.. title:: Package Recipe 'ncbi-genome-download'
.. highlight: bash


ncbi-genome-download
====================

.. conda:recipe:: ncbi-genome-download
   :replaces_section_title:

   Download genome files from the NCBI FTP server.

   :homepage: https://github.com/kblin/ncbi-genome-download/
   :license: Apache / Apache Software License
   :recipe: /`ncbi-genome-download <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-genome-download>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-genome-download/meta.yaml>`_

   


.. conda:package:: ncbi-genome-download

   |downloads_ncbi-genome-download| |docker_ncbi-genome-download|

   :versions: 0.2.9, 0.2.8, 0.2.7, 0.2.6, 0.2.5, 0.2.4, 0.2.2, 0.2.0, 0.1.8

   :depends: :conda:package:`appdirs`  :conda:package:`enum34`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`requests` >=2.4.3 

   :required~by: |required_by_ncbi-genome-download|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-genome-download

   and update with::

      conda update ncbi-genome-download

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ncbi-genome-download


.. |required_by_ncbi-genome-download| conda:required_by:: ncbi-genome-download
.. |downloads_ncbi-genome-download| image:: https://img.shields.io/conda/dn/bioconda/ncbi-genome-download.svg?style=flat
   :alt:   (downloads)
.. |docker_ncbi-genome-download| image:: https://quay.io/repository/biocontainers/ncbi-genome-download/status
   :target: https://quay.io/repository/biocontainers/ncbi-genome-download







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-genome-download/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-genome-download/README.html

