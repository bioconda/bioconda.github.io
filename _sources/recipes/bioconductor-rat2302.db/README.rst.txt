:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rat2302.db'
.. highlight: bash

bioconductor-rat2302.db
=======================

.. conda:recipe:: bioconductor-rat2302.db
   :replaces_section_title:

   Affymetrix Rat Genome 230 2.0 Array annotation data \(chip rat2302\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rat2302.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rat2302.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat2302.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rat2302.db/meta.yaml>`_

   


.. conda:package:: bioconductor-rat2302.db

   |downloads_bioconductor-rat2302.db| |docker_bioconductor-rat2302.db|

   :versions: 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.rn.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rat2302.db

   and update with::

      conda update bioconductor-rat2302.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rat2302.db:<tag>

   (see `bioconductor-rat2302.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rat2302.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rat2302.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rat2302.db| image:: https://quay.io/repository/biocontainers/bioconductor-rat2302.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rat2302.db
.. _`bioconductor-rat2302.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rat2302.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rat2302.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rat2302.db/README.html