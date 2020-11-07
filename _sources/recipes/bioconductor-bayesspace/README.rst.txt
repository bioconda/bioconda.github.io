:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesspace'
.. highlight: bash

bioconductor-bayesspace
=======================

.. conda:recipe:: bioconductor-bayesspace
   :replaces_section_title:
   :noindex:

   Clustering and Resolution Enhancement of Spatial Transcriptomes

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/BayesSpace.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bayesspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesspace/meta.yaml>`_

   Tools for clustering and enhancing the resolution of spatial gene expression experiments. BayesSpace clusters a low\-dimensional representation of the gene expression matrix\, incorporating a spatial prior to encourage neighboring spots to cluster together. The method can enhance the resolution of the low\-dimensional representation into \"sub\-spots\"\, for which features such as gene expression or cell type composition can be imputed.


.. conda:package:: bioconductor-bayesspace

   |downloads_bioconductor-bayesspace| |docker_bioconductor-bayesspace|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayesspace

   and update with::

      conda update bioconductor-bayesspace

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayesspace:<tag>

   (see `bioconductor-bayesspace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayesspace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesspace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayesspace
   :alt:   (downloads)
.. |docker_bioconductor-bayesspace| image:: https://quay.io/repository/biocontainers/bioconductor-bayesspace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayesspace
.. _`bioconductor-bayesspace/tags`: https://quay.io/repository/biocontainers/bioconductor-bayesspace?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayesspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayesspace/README.html