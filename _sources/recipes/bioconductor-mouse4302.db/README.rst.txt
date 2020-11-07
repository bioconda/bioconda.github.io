:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mouse4302.db'
.. highlight: bash

bioconductor-mouse4302.db
=========================

.. conda:recipe:: bioconductor-mouse4302.db
   :replaces_section_title:
   :noindex:

   Affymetrix Mouse Genome 430 2.0 Array annotation data \(chip mouse4302\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/mouse4302.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mouse4302.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse4302.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse4302.db/meta.yaml>`_

   Affymetrix Mouse Genome 430 2.0 Array annotation data \(chip mouse4302\) assembled using data from public repositories


.. conda:package:: bioconductor-mouse4302.db

   |downloads_bioconductor-mouse4302.db| |docker_bioconductor-mouse4302.db|

   :versions:
      
      

      ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.12.0,<3.13.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mouse4302.db

   and update with::

      conda update bioconductor-mouse4302.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mouse4302.db:<tag>

   (see `bioconductor-mouse4302.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mouse4302.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mouse4302.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mouse4302.db
   :alt:   (downloads)
.. |docker_bioconductor-mouse4302.db| image:: https://quay.io/repository/biocontainers/bioconductor-mouse4302.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mouse4302.db
.. _`bioconductor-mouse4302.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mouse4302.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mouse4302.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mouse4302.db/README.html