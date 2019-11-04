:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-indac.db'
.. highlight: bash

bioconductor-indac.db
=====================

.. conda:recipe:: bioconductor-indac.db
   :replaces_section_title:

   INDAC FlyChip\_long\_oligonucleotide\_002 \(FL002\) annotation data \(chip indac\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/indac.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-indac.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-indac.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-indac.db/meta.yaml>`_

   


.. conda:package:: bioconductor-indac.db

   |downloads_bioconductor-indac.db| |docker_bioconductor-indac.db|

   :versions: 3.2.3-3, 3.2.3-2, 3.2.3-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-org.dm.eg.db: >=3.10.0,<3.11.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-indac.db

   and update with::

      conda update bioconductor-indac.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-indac.db:<tag>

   (see `bioconductor-indac.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-indac.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-indac.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-indac.db
   :alt:   (downloads)
.. |docker_bioconductor-indac.db| image:: https://quay.io/repository/biocontainers/bioconductor-indac.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-indac.db
.. _`bioconductor-indac.db/tags`: https://quay.io/repository/biocontainers/bioconductor-indac.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-indac.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-indac.db/README.html