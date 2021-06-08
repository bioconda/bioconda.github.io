:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphat'
.. highlight: bash

bioconductor-graphat
====================

.. conda:recipe:: bioconductor-graphat
   :replaces_section_title:
   :noindex:

   Graph Theoretic Association Tests

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GraphAT.html
   :license: LGPL
   :recipe: /`bioconductor-graphat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphat/meta.yaml>`_
   :links: biotools: :biotools:`graphat`, doi: :doi:`10.1093/bioinformatics/bth405`

   Functions and data used in Balasubramanian\, et al. \(2004\)


.. conda:package:: bioconductor-graphat

   |downloads_bioconductor-graphat| |docker_bioconductor-graphat|

   :versions:
      
      

      ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      

   
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mcmcpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-graphat

   and update with::

      conda update bioconductor-graphat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graphat:<tag>

   (see `bioconductor-graphat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graphat
   :alt:   (downloads)
.. |docker_bioconductor-graphat| image:: https://quay.io/repository/biocontainers/bioconductor-graphat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphat
.. _`bioconductor-graphat/tags`: https://quay.io/repository/biocontainers/bioconductor-graphat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphat/README.html