:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rwgcod.db'
.. highlight: bash

bioconductor-rwgcod.db
======================

.. conda:recipe:: bioconductor-rwgcod.db
   :replaces_section_title:
   :noindex:

   Codelink Rat Whole Genome Bioarray \(\~34 000 rat gene targets\) annotation data \(chip rwgcod\)

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/rwgcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rwgcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwgcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwgcod.db/meta.yaml>`_

   Codelink Rat Whole Genome Bioarray \(\~34 000 rat gene targets\) annotation data \(chip rwgcod\) assembled using data from public repositories


.. conda:package:: bioconductor-rwgcod.db

   |downloads_bioconductor-rwgcod.db| |docker_bioconductor-rwgcod.db|

   :versions:
      
      

      ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.13.0,<3.14.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rwgcod.db

   and update with::

      conda update bioconductor-rwgcod.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rwgcod.db:<tag>

   (see `bioconductor-rwgcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rwgcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rwgcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rwgcod.db
   :alt:   (downloads)
.. |docker_bioconductor-rwgcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-rwgcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rwgcod.db
.. _`bioconductor-rwgcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rwgcod.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rwgcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rwgcod.db/README.html