:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hguqiagenv3.db'
.. highlight: bash

bioconductor-hguqiagenv3.db
===========================

.. conda:recipe:: bioconductor-hguqiagenv3.db
   :replaces_section_title:

   Qiagen Qiagen V3.0 oligo set annotation data \(chip hguqiagenv3\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hguqiagenv3.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hguqiagenv3.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hguqiagenv3.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hguqiagenv3.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hguqiagenv3.db

   |downloads_bioconductor-hguqiagenv3.db| |docker_bioconductor-hguqiagenv3.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hguqiagenv3.db

   and update with::

      conda update bioconductor-hguqiagenv3.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hguqiagenv3.db:<tag>

   (see `bioconductor-hguqiagenv3.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hguqiagenv3.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hguqiagenv3.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hguqiagenv3.db| image:: https://quay.io/repository/biocontainers/bioconductor-hguqiagenv3.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hguqiagenv3.db
.. _`bioconductor-hguqiagenv3.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hguqiagenv3.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hguqiagenv3.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hguqiagenv3.db/README.html