:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbase.db'
.. highlight: bash

bioconductor-mirbase.db
=======================

.. conda:recipe:: bioconductor-mirbase.db
   :replaces_section_title:
   :noindex:

   miRBase\: the microRNA database

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/mirbase.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-mirbase.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbase.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbase.db/meta.yaml>`_

   miRBase\: the microRNA database assembled using data from miRBase \(http\:\/\/www.mirbase.org\/\).


.. conda:package:: bioconductor-mirbase.db

   |downloads_bioconductor-mirbase.db| |docker_bioconductor-mirbase.db|

   :versions:
      
      

      ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirbase.db

   and update with::

      conda update bioconductor-mirbase.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirbase.db:<tag>

   (see `bioconductor-mirbase.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirbase.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbase.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbase.db
   :alt:   (downloads)
.. |docker_bioconductor-mirbase.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirbase.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbase.db
.. _`bioconductor-mirbase.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbase.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbase.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbase.db/README.html