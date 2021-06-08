:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-slgi'
.. highlight: bash

bioconductor-slgi
=================

.. conda:recipe:: bioconductor-slgi
   :replaces_section_title:
   :noindex:

   Synthetic Lethal Genetic Interaction

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SLGI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-slgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slgi/meta.yaml>`_
   :links: biotools: :biotools:`slgi`, doi: :doi:`10.1186/gb-2008-9-9-r135`

   A variety of data files and functions for the analysis of genetic interactions


.. conda:package:: bioconductor-slgi

   |downloads_bioconductor-slgi| |docker_bioconductor-slgi|

   :versions:
      
      

      ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-scisi: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-slgi

   and update with::

      conda update bioconductor-slgi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-slgi:<tag>

   (see `bioconductor-slgi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-slgi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slgi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-slgi
   :alt:   (downloads)
.. |docker_bioconductor-slgi| image:: https://quay.io/repository/biocontainers/bioconductor-slgi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slgi
.. _`bioconductor-slgi/tags`: https://quay.io/repository/biocontainers/bioconductor-slgi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slgi/README.html