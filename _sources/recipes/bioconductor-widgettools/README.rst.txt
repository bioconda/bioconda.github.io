:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-widgettools'
.. highlight: bash

bioconductor-widgettools
========================

.. conda:recipe:: bioconductor-widgettools
   :replaces_section_title:

   This packages contains tools to support the construction of tcltk widgets

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/widgetTools.html
   :license: LGPL
   :recipe: /`bioconductor-widgettools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-widgettools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-widgettools/meta.yaml>`_

   


.. conda:package:: bioconductor-widgettools

   |downloads_bioconductor-widgettools| |docker_bioconductor-widgettools|

   :versions: 1.62.0-1, 1.62.0-0, 1.60.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-widgettools

   and update with::

      conda update bioconductor-widgettools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-widgettools:<tag>

   (see `bioconductor-widgettools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-widgettools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-widgettools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-widgettools
   :alt:   (downloads)
.. |docker_bioconductor-widgettools| image:: https://quay.io/repository/biocontainers/bioconductor-widgettools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-widgettools
.. _`bioconductor-widgettools/tags`: https://quay.io/repository/biocontainers/bioconductor-widgettools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-widgettools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-widgettools/README.html