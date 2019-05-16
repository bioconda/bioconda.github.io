:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m10kcod.db'
.. highlight: bash

bioconductor-m10kcod.db
=======================

.. conda:recipe:: bioconductor-m10kcod.db
   :replaces_section_title:

   Codelink UniSet Mouse I Bioarray \(\~10 000 mouse gene targets\) annotation data \(chip m10kcod\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/m10kcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-m10kcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m10kcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m10kcod.db/meta.yaml>`_

   


.. conda:package:: bioconductor-m10kcod.db

   |downloads_bioconductor-m10kcod.db| |docker_bioconductor-m10kcod.db|

   :versions: 3.4.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-m10kcod.db

   and update with::

      conda update bioconductor-m10kcod.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m10kcod.db:<tag>

   (see `bioconductor-m10kcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m10kcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m10kcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m10kcod.db
   :alt:   (downloads)
.. |docker_bioconductor-m10kcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-m10kcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m10kcod.db
.. _`bioconductor-m10kcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-m10kcod.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m10kcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m10kcod.db/README.html