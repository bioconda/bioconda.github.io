:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gem'
.. highlight: bash

bioconductor-gem
================

.. conda:recipe:: bioconductor-gem
   :replaces_section_title:
   :noindex:

   GEM\: fast association study for the interplay of Gene\, Environment and Methylation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gem/meta.yaml>`_

   Tools for analyzing EWAS\, methQTL and GxE genome widely.


.. conda:package:: bioconductor-gem

   |downloads_bioconductor-gem| |docker_bioconductor-gem|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gem

   and update with::

      conda update bioconductor-gem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gem:<tag>

   (see `bioconductor-gem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gem
   :alt:   (downloads)
.. |docker_bioconductor-gem| image:: https://quay.io/repository/biocontainers/bioconductor-gem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gem
.. _`bioconductor-gem/tags`: https://quay.io/repository/biocontainers/bioconductor-gem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gem/README.html