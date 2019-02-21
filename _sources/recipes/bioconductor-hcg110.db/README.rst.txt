:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hcg110.db'
.. highlight: bash

bioconductor-hcg110.db
======================

.. conda:recipe:: bioconductor-hcg110.db
   :replaces_section_title:

   Affymetrix Human Cancer G110 Array annotation data \(chip hcg110\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hcg110.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hcg110.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcg110.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcg110.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hcg110.db

   |downloads_bioconductor-hcg110.db| |docker_bioconductor-hcg110.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hcg110.db

   and update with::

      conda update bioconductor-hcg110.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hcg110.db:<tag>

   (see `bioconductor-hcg110.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hcg110.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hcg110.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hcg110.db| image:: https://quay.io/repository/biocontainers/bioconductor-hcg110.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hcg110.db
.. _`bioconductor-hcg110.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hcg110.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hcg110.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hcg110.db/README.html