:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-silva128.1mgdb'
.. highlight: bash

bioconductor-silva128.1mgdb
===========================

.. conda:recipe:: bioconductor-silva128.1mgdb
   :replaces_section_title:

   Metagenome annotation package with for the SILVA SSR rRNA database release 128.1\, Bacterial and Archeal sequences. Contains a MgDb\-class object\, defined in the metagenomeFeatures package.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/silva128.1MgDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-silva128.1mgdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-silva128.1mgdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-silva128.1mgdb/meta.yaml>`_

   


.. conda:package:: bioconductor-silva128.1mgdb

   |downloads_bioconductor-silva128.1mgdb| |docker_bioconductor-silva128.1mgdb|

   :versions: 1.00.0-3, 1.00.0-2, 1.00.0-0
   
   :depends bioconductor-metagenomefeatures: >=2.6.0,<2.7.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-silva128.1mgdb

   and update with::

      conda update bioconductor-silva128.1mgdb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-silva128.1mgdb:<tag>

   (see `bioconductor-silva128.1mgdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-silva128.1mgdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-silva128.1mgdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-silva128.1mgdb
   :alt:   (downloads)
.. |docker_bioconductor-silva128.1mgdb| image:: https://quay.io/repository/biocontainers/bioconductor-silva128.1mgdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-silva128.1mgdb
.. _`bioconductor-silva128.1mgdb/tags`: https://quay.io/repository/biocontainers/bioconductor-silva128.1mgdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-silva128.1mgdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-silva128.1mgdb/README.html