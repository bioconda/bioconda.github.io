.. title:: Package Recipe 'bioconductor-mcbiclust'
.. highlight: bash


bioconductor-mcbiclust
======================

.. conda:recipe:: bioconductor-mcbiclust
   :replaces_section_title:

   Custom made algorithm and associated methods for finding\, visualising and analysing biclusters in large gene expression data sets. Algorithm is based on with a supplied gene set of size n\, finding the maximum strength correlation matrix containing m samples from the data set.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MCbiclust.html
   :license: GPL-2
   :recipe: /`bioconductor-mcbiclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcbiclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcbiclust/meta.yaml>`_

   


.. conda:package:: bioconductor-mcbiclust

   |downloads_bioconductor-mcbiclust| |docker_bioconductor-mcbiclust|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-ggally`  :conda:package:`r-ggplot2`  :conda:package:`r-scales`  :conda:package:`r-wgcna`  

   :required~by: |required_by_bioconductor-mcbiclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcbiclust

   and update with::

      conda update bioconductor-mcbiclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mcbiclust


.. |required_by_bioconductor-mcbiclust| conda:required_by:: bioconductor-mcbiclust
.. |downloads_bioconductor-mcbiclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcbiclust.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mcbiclust| image:: https://quay.io/repository/biocontainers/bioconductor-mcbiclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcbiclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcbiclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcbiclust/README.html

