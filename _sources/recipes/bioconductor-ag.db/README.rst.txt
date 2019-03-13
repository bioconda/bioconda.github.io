:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ag.db'
.. highlight: bash

bioconductor-ag.db
==================

.. conda:recipe:: bioconductor-ag.db
   :replaces_section_title:

   Affymetrix Arabidopsis Genome Array annotation data \(chip ag\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/ag.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ag.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ag.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ag.db/meta.yaml>`_

   


.. conda:package:: bioconductor-ag.db

   |downloads_bioconductor-ag.db| |docker_bioconductor-ag.db|

   :versions: 3.2.3-1, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.at.tair.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ag.db

   and update with::

      conda update bioconductor-ag.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ag.db:<tag>

   (see `bioconductor-ag.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ag.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ag.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ag.db| image:: https://quay.io/repository/biocontainers/bioconductor-ag.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ag.db
.. _`bioconductor-ag.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ag.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ag.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ag.db/README.html