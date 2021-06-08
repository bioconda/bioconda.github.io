:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbqn'
.. highlight: bash

bioconductor-mbqn
=================

.. conda:recipe:: bioconductor-mbqn
   :replaces_section_title:
   :noindex:

   Mean\/Median\-balanced quantile normalization

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MBQN.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-mbqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbqn/meta.yaml>`_

   Modified quantile normalization for omics or other matrix\-like data distorted in location and scale.


.. conda:package:: bioconductor-mbqn

   |downloads_bioconductor-mbqn| |docker_bioconductor-mbqn|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rpx: ``>=2.0.0,<2.1.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-paireddata: 
   :depends r-rappdirs: 
   :depends r-rcurl: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbqn

   and update with::

      conda update bioconductor-mbqn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbqn:<tag>

   (see `bioconductor-mbqn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbqn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbqn
   :alt:   (downloads)
.. |docker_bioconductor-mbqn| image:: https://quay.io/repository/biocontainers/bioconductor-mbqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbqn
.. _`bioconductor-mbqn/tags`: https://quay.io/repository/biocontainers/bioconductor-mbqn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbqn/README.html