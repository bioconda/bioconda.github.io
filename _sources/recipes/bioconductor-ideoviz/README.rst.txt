:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ideoviz'
.. highlight: bash

bioconductor-ideoviz
====================

.. conda:recipe:: bioconductor-ideoviz
   :replaces_section_title:
   :noindex:

   Plots data \(continuous\/discrete\) along chromosomal ideogram

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/IdeoViz.html
   :license: GPL-2
   :recipe: /`bioconductor-ideoviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideoviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideoviz/meta.yaml>`_
   :links: biotools: :biotools:`ideoviz`, doi: :doi:`10.1038/nmeth.3252`

   Plots data associated with arbitrary genomic intervals along chromosomal ideogram.


.. conda:package:: bioconductor-ideoviz

   |downloads_bioconductor-ideoviz| |docker_bioconductor-ideoviz|

   :versions:
      
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ideoviz

   and update with::

      conda update bioconductor-ideoviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ideoviz:<tag>

   (see `bioconductor-ideoviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ideoviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ideoviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ideoviz
   :alt:   (downloads)
.. |docker_bioconductor-ideoviz| image:: https://quay.io/repository/biocontainers/bioconductor-ideoviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ideoviz
.. _`bioconductor-ideoviz/tags`: https://quay.io/repository/biocontainers/bioconductor-ideoviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ideoviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ideoviz/README.html