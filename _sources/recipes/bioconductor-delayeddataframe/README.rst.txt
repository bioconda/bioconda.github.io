:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayeddataframe'
.. highlight: bash

bioconductor-delayeddataframe
=============================

.. conda:recipe:: bioconductor-delayeddataframe
   :replaces_section_title:
   :noindex:

   Delayed operation on DataFrame using standard DataFrame metaphor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DelayedDataFrame.html
   :license: GPL-3
   :recipe: /`bioconductor-delayeddataframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayeddataframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayeddataframe/meta.yaml>`_

   Based on the standard DataFrame metaphor\, we are trying to implement the feature of delayed operation on the DelayedDataFrame\, with a slot of lazyIndex\, which saves the mapping indexes for each column of DelayedDataFrame. Methods like show\, validity check\, \[\/\[\[ subsetting\, rbind\/cbind are implemented for DelayedDataFrame to be operated around lazyIndex. The listData slot stays untouched until a realization call e.g.\, DataFrame constructor OR as.list\(\) is invoked.


.. conda:package:: bioconductor-delayeddataframe

   |downloads_bioconductor-delayeddataframe| |docker_bioconductor-delayeddataframe|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-delayeddataframe

   and update with::

      conda update bioconductor-delayeddataframe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayeddataframe:<tag>

   (see `bioconductor-delayeddataframe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayeddataframe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayeddataframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayeddataframe
   :alt:   (downloads)
.. |docker_bioconductor-delayeddataframe| image:: https://quay.io/repository/biocontainers/bioconductor-delayeddataframe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayeddataframe
.. _`bioconductor-delayeddataframe/tags`: https://quay.io/repository/biocontainers/bioconductor-delayeddataframe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayeddataframe";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayeddataframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayeddataframe/README.html