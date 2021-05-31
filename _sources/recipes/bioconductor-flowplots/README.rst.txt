:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowplots'
.. highlight: bash

bioconductor-flowplots
======================

.. conda:recipe:: bioconductor-flowplots
   :replaces_section_title:
   :noindex:

   flowPlots\: analysis plots and data class for gated flow cytometry data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowPlots.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowplots/meta.yaml>`_

   Graphical displays with embedded statistical tests for gated ICS flow cytometry data\, and a data class which stores \"stacked\" data and has methods for computing summary measures on stacked data\, such as marginal and polyfunctional degree data.


.. conda:package:: bioconductor-flowplots

   |downloads_bioconductor-flowplots| |docker_bioconductor-flowplots|

   :versions:
      
      

      ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowplots

   and update with::

      conda update bioconductor-flowplots

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowplots:<tag>

   (see `bioconductor-flowplots/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowplots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowplots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowplots
   :alt:   (downloads)
.. |docker_bioconductor-flowplots| image:: https://quay.io/repository/biocontainers/bioconductor-flowplots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowplots
.. _`bioconductor-flowplots/tags`: https://quay.io/repository/biocontainers/bioconductor-flowplots?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowplots/README.html