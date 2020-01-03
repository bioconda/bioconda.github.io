:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-acc-download'
.. highlight: bash

ncbi-acc-download
=================

.. conda:recipe:: ncbi-acc-download
   :replaces_section_title:

   Download files from NCBI Entrez by accession.

   :homepage: https://github.com/kblin/ncbi-acc-download/
   :license: Apache / Apache Software License
   :recipe: /`ncbi-acc-download <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-acc-download>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-acc-download/meta.yaml>`_

   


.. conda:package:: ncbi-acc-download

   |downloads_ncbi-acc-download| |docker_ncbi-acc-download|

   :versions: 0.2.6-0, 0.2.5-0
   
   :depends biopython: 
   :depends python: 
   :depends requests: >=2.4.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-acc-download

   and update with::

      conda update ncbi-acc-download

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-acc-download:<tag>

   (see `ncbi-acc-download/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-acc-download| image:: https://img.shields.io/conda/dn/bioconda/ncbi-acc-download.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-acc-download
   :alt:   (downloads)
.. |docker_ncbi-acc-download| image:: https://quay.io/repository/biocontainers/ncbi-acc-download/status
   :target: https://quay.io/repository/biocontainers/ncbi-acc-download
.. _`ncbi-acc-download/tags`: https://quay.io/repository/biocontainers/ncbi-acc-download?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-acc-download/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-acc-download/README.html