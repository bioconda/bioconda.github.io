.. title:: Package Recipe 'bioconductor-silva128.1mgdb'
.. highlight: bash


bioconductor-silva128.1mgdb
===========================

.. conda:recipe:: bioconductor-silva128.1mgdb
   :replaces_section_title:

   Metagenome annotation package with for the SILVA SSR rRNA database release 128.1\, Bacterial and Archeal sequences. Contains a MgDb\-class object\, defined in the metagenomeFeatures package.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/silva128.1MgDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-silva128.1mgdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-silva128.1mgdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-silva128.1mgdb/meta.yaml>`_

   


.. conda:package:: bioconductor-silva128.1mgdb

   |downloads_bioconductor-silva128.1mgdb| |docker_bioconductor-silva128.1mgdb|

   :versions: 1.00.0

   :depends: :conda:package:`bioconductor-metagenomefeatures` >=2.2.0,<2.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-silva128.1mgdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-silva128.1mgdb

   and update with::

      conda update bioconductor-silva128.1mgdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-silva128.1mgdb


.. |required_by_bioconductor-silva128.1mgdb| conda:required_by:: bioconductor-silva128.1mgdb
.. |downloads_bioconductor-silva128.1mgdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-silva128.1mgdb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-silva128.1mgdb| image:: https://quay.io/repository/biocontainers/bioconductor-silva128.1mgdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-silva128.1mgdb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-silva128.1mgdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-silva128.1mgdb/README.html

