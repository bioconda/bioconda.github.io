:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genemeta'
.. highlight: bash

bioconductor-genemeta
=====================

.. conda:recipe:: bioconductor-genemeta
   :replaces_section_title:
   :noindex:

   MetaAnalysis for High Throughput Experiments

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GeneMeta.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genemeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genemeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genemeta/meta.yaml>`_
   :links: biotools: :biotools:`genemeta`, doi: :doi:`10.1038/nmeth.3252`

   A collection of meta\-analysis tools for analysing high throughput experimental data


.. conda:package:: bioconductor-genemeta

   |downloads_bioconductor-genemeta| |docker_bioconductor-genemeta|

   :versions:
      
      

      ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genemeta

   and update with::

      conda update bioconductor-genemeta

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genemeta:<tag>

   (see `bioconductor-genemeta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genemeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genemeta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genemeta
   :alt:   (downloads)
.. |docker_bioconductor-genemeta| image:: https://quay.io/repository/biocontainers/bioconductor-genemeta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genemeta
.. _`bioconductor-genemeta/tags`: https://quay.io/repository/biocontainers/bioconductor-genemeta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genemeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genemeta/README.html