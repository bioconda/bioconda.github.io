:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgalaxy'
.. highlight: bash

bioconductor-rgalaxy
====================

.. conda:recipe:: bioconductor-rgalaxy
   :replaces_section_title:
   :noindex:

   Make an R function available in the Galaxy web platform

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/RGalaxy.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgalaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgalaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgalaxy/meta.yaml>`_
   :links: biotools: :biotools:`rgalaxy`, doi: :doi:`10.1038/nmeth.3252`

   Given an R function and its manual page\, make the documented function available in Galaxy.


.. conda:package:: bioconductor-rgalaxy

   |downloads_bioconductor-rgalaxy| |docker_bioconductor-rgalaxy|

   :versions:
      
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-optparse: 
   :depends r-roxygen2: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgalaxy

   and update with::

      conda update bioconductor-rgalaxy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgalaxy:<tag>

   (see `bioconductor-rgalaxy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgalaxy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgalaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgalaxy
   :alt:   (downloads)
.. |docker_bioconductor-rgalaxy| image:: https://quay.io/repository/biocontainers/bioconductor-rgalaxy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgalaxy
.. _`bioconductor-rgalaxy/tags`: https://quay.io/repository/biocontainers/bioconductor-rgalaxy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgalaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgalaxy/README.html