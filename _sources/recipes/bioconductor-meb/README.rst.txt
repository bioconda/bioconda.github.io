:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meb'
.. highlight: bash

bioconductor-meb
================

.. conda:recipe:: bioconductor-meb
   :replaces_section_title:

   A Minimum Enclosing Ball \(MEB\) method to detect differential expression genes for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MEB.html
   :license: GPL-2
   :recipe: /`bioconductor-meb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb/meta.yaml>`_

   Identifying differential expression genes between the same or different species is an urgent demand for biological research. In most of cases\, normalization is the first step to solve this problem\, then by employing the hypothesis testing\, we could detect statistically significant genes. With the development of machine learning\, it gives us a new perspective on discrimination between differential expression \(DE\) and non\-differential expression \(non\-DE\) genes. Provided a set of training data\, the procedure of distinguishing genes could be simplified as a classification problem. However\, in reality\, it is hard for us to get the information from both DE and non\-DE genes. To solve this problem\, we try to identify differential cases only in the domain of non\-DE genes\, and transform the problem to an outlier detection in machine learning. Given that non\-DE genes have some similarities in features\, we build a Minimum Enclosing Ball \(MEB\) to cover those non\-DE genes in feature space\, then those DE genes\, which are enormously different from non\-DE genes\, being regarded as outliers and rejected outside the ball. Compared with existing methods\, it is no need for the MEB method to normalize data in advance. Besides\, the MEB method could be easily applied to the same or different species data and without changing too much.


.. conda:package:: bioconductor-meb

   |downloads_bioconductor-meb| |docker_bioconductor-meb|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
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