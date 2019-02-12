:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blobtools'
.. highlight: bash

blobtools
=========

.. conda:recipe:: blobtools
   :replaces_section_title:

   Modular command\-line solution for visualisation\, quality control and taxonomic partitioning of genome datasets

   :homepage: https://blobtools.readme.io/docs/what-is-blobtools
   :license: GPL / GPLv3
   :recipe: /`blobtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blobtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blobtools/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.12232.1`

   


.. conda:package:: blobtools

   |downloads_blobtools| |docker_blobtools|

   :versions: 1.0.1-3, 1.0.1-2, 1.0.1-1, 1.0.1-0
   
   :depends curl: >=7.60.0,<8.0a0
   
   :depends docopt: 
   
   :depends matplotlib: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends samtools: 
   
   :depends ujson: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blobtools

   and update with::

      conda update blobtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blobtools:<tag>

   (see `blobtools/tags`_ for valid values for ``<tag>``)


.. |downloads_blobtools| image:: https://img.shields.io/conda/dn/bioconda/blobtools.svg?style=flat
   :alt:   (downloads)
.. |docker_blobtools| image:: https://quay.io/repository/biocontainers/blobtools/status
   :target: https://quay.io/repository/biocontainers/blobtools
.. _`blobtools/tags`: https://quay.io/repository/biocontainers/blobtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blobtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blobtools/README.html