:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumiratall.db'
.. highlight: bash

bioconductor-lumiratall.db
==========================

.. conda:recipe:: bioconductor-lumiratall.db
   :replaces_section_title:

   Illumina Rat Illumina expression annotation data \(chip lumiRatAll\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/lumiRatAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumiratall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumiratall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumiratall.db/meta.yaml>`_

   


.. conda:package:: bioconductor-lumiratall.db

   |downloads_bioconductor-lumiratall.db| |docker_bioconductor-lumiratall.db|

   :versions: 1.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.rn.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumiratall.db

   and update with::

      conda update bioconductor-lumiratall.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumiratall.db:<tag>

   (see `bioconductor-lumiratall.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumiratall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumiratall.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumiratall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumiratall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumiratall.db
.. _`bioconductor-lumiratall.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lumiratall.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumiratall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumiratall.db/README.html