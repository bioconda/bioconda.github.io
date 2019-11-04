:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbaseversions.db'
.. highlight: bash

bioconductor-mirbaseversions.db
===============================

.. conda:recipe:: bioconductor-mirbaseversions.db
   :replaces_section_title:

   Annotation package containing all available miRNA names from 22 versions \(data from http\:\/\/www.mirbase.org\/\).

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/miRBaseVersions.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mirbaseversions.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseversions.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseversions.db/meta.yaml>`_

   


.. conda:package:: bioconductor-mirbaseversions.db

   |downloads_bioconductor-mirbaseversions.db| |docker_bioconductor-mirbaseversions.db|

   :versions: 1.1.0-4, 1.1.0-3, 1.1.0-1, 1.1.0-0, 0.99.5-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-gtools: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirbaseversions.db

   and update with::

      conda update bioconductor-mirbaseversions.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirbaseversions.db:<tag>

   (see `bioconductor-mirbaseversions.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirbaseversions.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbaseversions.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbaseversions.db
   :alt:   (downloads)
.. |docker_bioconductor-mirbaseversions.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db
.. _`bioconductor-mirbaseversions.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbaseversions.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbaseversions.db/README.html