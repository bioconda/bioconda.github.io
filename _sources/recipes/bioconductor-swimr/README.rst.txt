:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swimr'
.. highlight: bash

bioconductor-swimr
==================

.. conda:recipe:: bioconductor-swimr
   :replaces_section_title:
   :noindex:

   SwimR\: A Suite of Analytical Tools for Quantification of C. elegans Swimming Behavior

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SwimR.html
   :license: LGPL-2
   :recipe: /`bioconductor-swimr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swimr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swimr/meta.yaml>`_
   :links: biotools: :biotools:`swimr`, doi: :doi:`10.1016/j.jneumeth.2014.04.024`

   SwimR is an R\-based suite that calculates\, analyses\, and plots the frequency of C. elegans swimming behavior over time. It places a particular emphasis on identifying paralysis and quantifying the kinetic elements of paralysis during swimming. Data is input to SwipR from a custom built program that fits a 5 point morphometric spine to videos of single worms swimming in a buffer called Worm Tracker.


.. conda:package:: bioconductor-swimr

   |downloads_bioconductor-swimr| |docker_bioconductor-swimr|

   :versions:
      
      

      ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gplots: ``>=2.10.1``
   :depends r-heatmap.plus: ``>=1.3``
   :depends r-r2html: ``>=2.2.1``
   :depends r-signal: ``>=0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swimr

   and update with::

      conda update bioconductor-swimr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swimr:<tag>

   (see `bioconductor-swimr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swimr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swimr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swimr
   :alt:   (downloads)
.. |docker_bioconductor-swimr| image:: https://quay.io/repository/biocontainers/bioconductor-swimr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swimr
.. _`bioconductor-swimr/tags`: https://quay.io/repository/biocontainers/bioconductor-swimr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swimr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swimr/README.html