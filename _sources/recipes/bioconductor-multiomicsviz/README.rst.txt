.. title:: Package Recipe 'bioconductor-multiomicsviz'
.. highlight: bash


bioconductor-multiomicsviz
==========================

.. conda:recipe:: bioconductor-multiomicsviz
   :replaces_section_title:

   Calculate the spearman correlation between the source omics data and other target omics data\, identify the significant correlations and plot the significant correlations on the heat map in which the x\-axis and y\-axis are ordered by the chromosomal location.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/multiOmicsViz.html
   :license: LGPL
   :recipe: /`bioconductor-multiomicsviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz/meta.yaml>`_

   


.. conda:package:: bioconductor-multiomicsviz

   |downloads_bioconductor-multiomicsviz| |docker_bioconductor-multiomicsviz|

   :versions: 1.6.0, 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-foreach`  

   :required~by: |required_by_bioconductor-multiomicsviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multiomicsviz

   and update with::

      conda update bioconductor-multiomicsviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-multiomicsviz


.. |required_by_bioconductor-multiomicsviz| conda:required_by:: bioconductor-multiomicsviz
.. |downloads_bioconductor-multiomicsviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiomicsviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-multiomicsviz| image:: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html

