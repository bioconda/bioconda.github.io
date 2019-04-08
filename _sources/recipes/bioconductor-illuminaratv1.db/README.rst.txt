:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminaratv1.db'
.. highlight: bash

bioconductor-illuminaratv1.db
=============================

.. conda:recipe:: bioconductor-illuminaratv1.db
   :replaces_section_title:

   Illumina Ratv1 annotation data \(chip illuminaRatv1\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/illuminaRatv1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminaratv1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaratv1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaratv1.db/meta.yaml>`_

   


.. conda:package:: bioconductor-illuminaratv1.db

   |downloads_bioconductor-illuminaratv1.db| |docker_bioconductor-illuminaratv1.db|

   :versions: 1.26.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.rn.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-illuminaratv1.db

   and update with::

      conda update bioconductor-illuminaratv1.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminaratv1.db:<tag>

   (see `bioconductor-illuminaratv1.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminaratv1.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminaratv1.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-illuminaratv1.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminaratv1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminaratv1.db
.. _`bioconductor-illuminaratv1.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminaratv1.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminaratv1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminaratv1.db/README.html