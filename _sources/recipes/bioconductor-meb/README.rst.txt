:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meb'
.. highlight: bash

bioconductor-meb
================

.. conda:recipe:: bioconductor-meb
   :replaces_section_title:
   :noindex:

   A normalization\-invariant minimum enclosing ball method to detect differentially expressed genes for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MEB.html
   :license: GPL-2
   :recipe: /`bioconductor-meb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb/meta.yaml>`_

   Identifying differentially expressed genes between the same or different species is an urgent demand for biological and medical research. For RNA\-seq data\, systematic technical effects and different sequencing depths are usually encountered when conducting experiments. Normalization is regarded as an essential step in the discovery of biologically important changes in expression. The present methods usually involve normalization of the data with a scaling factor\, followed by detection of significant genes. However\, more than one scaling factor may exist because of the complexity of real data. Consequently\, methods that normalize data by a single scaling factor may deliver suboptimal performance or may not even work. The development of modern machine learning techniques has provided a new perspective regarding discrimination between differentially expressed \(DE\) and non\-DE genes. However\, in reality\, the non\-DE genes comprise only a small set and may contain housekeeping genes \(in same species\) or conserved orthologous genes \(in different species\). Therefore\, the process of detecting DE genes can be formulated as a one\-class classification problem\, where only non\-DE genes are observed\, while DE genes are completely absent from the training data. We transform the problem to an outlier detection problem by treating DE genes as outliers\, and we propose a normalization\-invariant minimum enclosing ball \(NIMEB\) method to construct a smallest possible ball to contain the known non\-DE genes in a feature space. The genes outside the minimum enclosing ball can then be naturally considered to be DE genes. Compared with the existing methods\, the proposed NIMEB method does not require data normalization\, which is particularly attractive when the RNA\-seq data include more than one scaling factor. Furthermore\, the NIMEB method could be easily extended to different species without normalization.


.. conda:package:: bioconductor-meb

   |downloads_bioconductor-meb| |docker_bioconductor-meb|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meb

   and update with::

      conda update bioconductor-meb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meb:<tag>

   (see `bioconductor-meb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meb
   :alt:   (downloads)
.. |docker_bioconductor-meb| image:: https://quay.io/repository/biocontainers/bioconductor-meb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meb
.. _`bioconductor-meb/tags`: https://quay.io/repository/biocontainers/bioconductor-meb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meb/README.html