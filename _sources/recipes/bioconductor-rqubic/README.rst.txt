.. title:: Package Recipe 'bioconductor-rqubic'
.. highlight: bash


bioconductor-rqubic
===================

.. conda:recipe:: bioconductor-rqubic
   :replaces_section_title:

   This package implements the QUBIC algorithm introduced by Li et al. for the qualitative biclustering with gene expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rqubic.html
   :license: GPL-2
   :recipe: /`bioconductor-rqubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqubic/meta.yaml>`_

   


.. conda:package:: bioconductor-rqubic

   |downloads_bioconductor-rqubic| |docker_bioconductor-rqubic|

   :versions: 1.28.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biclust`  

   :required~by: |required_by_bioconductor-rqubic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rqubic

   and update with::

      conda update bioconductor-rqubic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rqubic


.. |required_by_bioconductor-rqubic| conda:required_by:: bioconductor-rqubic
.. |downloads_bioconductor-rqubic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqubic.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rqubic| image:: https://quay.io/repository/biocontainers/bioconductor-rqubic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqubic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqubic/README.html

