:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spqn'
.. highlight: bash

bioconductor-spqn
=================

.. conda:recipe:: bioconductor-spqn
   :replaces_section_title:
   :noindex:

   Spatial quantile normalization

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/spqn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spqn/meta.yaml>`_

   The spqn package implements spatial quantile normalization \(SpQN\). This method was developed to remove a mean\-correlation relationship in correlation matrices built from gene expression data. It can serve as pre\-processing step prior to a co\-expression analysis.


.. conda:package:: bioconductor-spqn

   |downloads_bioconductor-spqn| |docker_bioconductor-spqn|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spqn

   and update with::

      conda update bioconductor-spqn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spqn:<tag>

   (see `bioconductor-spqn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spqn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spqn
   :alt:   (downloads)
.. |docker_bioconductor-spqn| image:: https://quay.io/repository/biocontainers/bioconductor-spqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spqn
.. _`bioconductor-spqn/tags`: https://quay.io/repository/biocontainers/bioconductor-spqn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spqn/README.html