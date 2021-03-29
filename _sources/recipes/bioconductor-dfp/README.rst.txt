:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dfp'
.. highlight: bash

bioconductor-dfp
================

.. conda:recipe:: bioconductor-dfp
   :replaces_section_title:
   :noindex:

   Gene Selection

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DFP.html
   :license: GPL-2
   :recipe: /`bioconductor-dfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dfp/meta.yaml>`_
   :links: biotools: :biotools:`dfp`, doi: :doi:`10.1038/nmeth.3252`

   This package provides a supervised technique able to identify differentially expressed genes\, based on the construction of \\emph\{Fuzzy Patterns\} \(FPs\). The Fuzzy Patterns are built by means of applying 3 Membership Functions to discretized gene expression values.


.. conda:package:: bioconductor-dfp

   |downloads_bioconductor-dfp| |docker_bioconductor-dfp|

   :versions:
      
      

      ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dfp

   and update with::

      conda update bioconductor-dfp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dfp:<tag>

   (see `bioconductor-dfp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dfp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dfp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dfp
   :alt:   (downloads)
.. |docker_bioconductor-dfp| image:: https://quay.io/repository/biocontainers/bioconductor-dfp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dfp
.. _`bioconductor-dfp/tags`: https://quay.io/repository/biocontainers/bioconductor-dfp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dfp/README.html