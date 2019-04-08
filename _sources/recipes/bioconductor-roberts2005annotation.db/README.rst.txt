:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roberts2005annotation.db'
.. highlight: bash

bioconductor-roberts2005annotation.db
=====================================

.. conda:recipe:: bioconductor-roberts2005annotation.db
   :replaces_section_title:

   Roberts2005Annotation Annotation Data \(Roberts2005Annotation\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/Roberts2005Annotation.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-roberts2005annotation.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roberts2005annotation.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roberts2005annotation.db/meta.yaml>`_

   


.. conda:package:: bioconductor-roberts2005annotation.db

   |downloads_bioconductor-roberts2005annotation.db| |docker_bioconductor-roberts2005annotation.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roberts2005annotation.db

   and update with::

      conda update bioconductor-roberts2005annotation.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roberts2005annotation.db:<tag>

   (see `bioconductor-roberts2005annotation.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roberts2005annotation.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roberts2005annotation.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-roberts2005annotation.db| image:: https://quay.io/repository/biocontainers/bioconductor-roberts2005annotation.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roberts2005annotation.db
.. _`bioconductor-roberts2005annotation.db/tags`: https://quay.io/repository/biocontainers/bioconductor-roberts2005annotation.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roberts2005annotation.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roberts2005annotation.db/README.html