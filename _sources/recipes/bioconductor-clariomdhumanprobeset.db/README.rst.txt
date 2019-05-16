:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clariomdhumanprobeset.db'
.. highlight: bash

bioconductor-clariomdhumanprobeset.db
=====================================

.. conda:recipe:: bioconductor-clariomdhumanprobeset.db
   :replaces_section_title:

   Affymetrix clariomdhuman annotation data \(chip clariomdhumanprobeset\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/clariomdhumanprobeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clariomdhumanprobeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clariomdhumanprobeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clariomdhumanprobeset.db/meta.yaml>`_

   


.. conda:package:: bioconductor-clariomdhumanprobeset.db

   |downloads_bioconductor-clariomdhumanprobeset.db| |docker_bioconductor-clariomdhumanprobeset.db|

   :versions: 8.7.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clariomdhumanprobeset.db

   and update with::

      conda update bioconductor-clariomdhumanprobeset.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clariomdhumanprobeset.db:<tag>

   (see `bioconductor-clariomdhumanprobeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clariomdhumanprobeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clariomdhumanprobeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clariomdhumanprobeset.db
   :alt:   (downloads)
.. |docker_bioconductor-clariomdhumanprobeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-clariomdhumanprobeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clariomdhumanprobeset.db
.. _`bioconductor-clariomdhumanprobeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-clariomdhumanprobeset.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clariomdhumanprobeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clariomdhumanprobeset.db/README.html