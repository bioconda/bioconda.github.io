:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macorrplot'
.. highlight: bash

bioconductor-macorrplot
=======================

.. conda:recipe:: bioconductor-macorrplot
   :replaces_section_title:

   Graphically displays correlation in microarray data that is due to insufficient normalization

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/maCorrPlot.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-macorrplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macorrplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macorrplot/meta.yaml>`_
   :links: biotools: :biotools:`macorrplot`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-macorrplot

   |downloads_bioconductor-macorrplot| |docker_bioconductor-macorrplot|

   :versions: 1.54.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macorrplot

   and update with::

      conda update bioconductor-macorrplot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macorrplot:<tag>

   (see `bioconductor-macorrplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macorrplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macorrplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macorrplot
   :alt:   (downloads)
.. |docker_bioconductor-macorrplot| image:: https://quay.io/repository/biocontainers/bioconductor-macorrplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macorrplot
.. _`bioconductor-macorrplot/tags`: https://quay.io/repository/biocontainers/bioconductor-macorrplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macorrplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macorrplot/README.html