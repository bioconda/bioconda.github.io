:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clstutils'
.. highlight: bash

bioconductor-clstutils
======================

.. conda:recipe:: bioconductor-clstutils
   :replaces_section_title:
   :noindex:

   Tools for performing taxonomic assignment.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/clstutils.html
   :license: GPL-3
   :recipe: /`bioconductor-clstutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clstutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clstutils/meta.yaml>`_
   :links: biotools: :biotools:`clstutils`, doi: :doi:`10.1038/nmeth.3252`

   Tools for performing taxonomic assignment based on phylogeny using pplacer and clst.


.. conda:package:: bioconductor-clstutils

   |downloads_bioconductor-clstutils| |docker_bioconductor-clstutils|

   :versions:
      
      

      ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      

   
   :depends bioconductor-clst: ``>=1.38.0,<1.39.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lattice: 
   :depends r-rjson: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clstutils

   and update with::

      conda update bioconductor-clstutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clstutils:<tag>

   (see `bioconductor-clstutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clstutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clstutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clstutils
   :alt:   (downloads)
.. |docker_bioconductor-clstutils| image:: https://quay.io/repository/biocontainers/bioconductor-clstutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clstutils
.. _`bioconductor-clstutils/tags`: https://quay.io/repository/biocontainers/bioconductor-clstutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clstutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clstutils/README.html