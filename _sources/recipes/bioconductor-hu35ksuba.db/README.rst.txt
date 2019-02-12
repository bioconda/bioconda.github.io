:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hu35ksuba.db'
.. highlight: bash

bioconductor-hu35ksuba.db
=========================

.. conda:recipe:: bioconductor-hu35ksuba.db
   :replaces_section_title:

   Affymetrix Human Genome HU35K Set annotation data \(chip hu35ksuba\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hu35ksuba.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hu35ksuba.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu35ksuba.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu35ksuba.db/meta.yaml>`_

   


.. conda:package:: bioconductor-hu35ksuba.db

   |downloads_bioconductor-hu35ksuba.db| |docker_bioconductor-hu35ksuba.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hu35ksuba.db

   and update with::

      conda update bioconductor-hu35ksuba.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hu35ksuba.db:<tag>

   (see `bioconductor-hu35ksuba.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hu35ksuba.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hu35ksuba.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hu35ksuba.db| image:: https://quay.io/repository/biocontainers/bioconductor-hu35ksuba.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hu35ksuba.db
.. _`bioconductor-hu35ksuba.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hu35ksuba.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hu35ksuba.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hu35ksuba.db/README.html