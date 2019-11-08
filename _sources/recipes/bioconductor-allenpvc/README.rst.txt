:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-allenpvc'
.. highlight: bash

bioconductor-allenpvc
=====================

.. conda:recipe:: bioconductor-allenpvc
   :replaces_section_title:

   GEO accession data GSE71585 as a SingleCellExperiment

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/allenpvc.html
   :license: CC0
   :recipe: /`bioconductor-allenpvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allenpvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allenpvc/meta.yaml>`_

   Celular taxonomy of the primary visual cortex in adult mice based on single cell RNA\-sequencing from a study performed by the Allen Institute for Brain Science. In said study 49 transcriptomic cell types are identified.


.. conda:package:: bioconductor-allenpvc

   |downloads_bioconductor-allenpvc| |docker_bioconductor-allenpvc|

   :versions: 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-annotationhub: >=2.18.0,<2.19.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends bioconductor-singlecellexperiment: >=1.8.0,<1.9.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-allenpvc

   and update with::

      conda update bioconductor-allenpvc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-allenpvc:<tag>

   (see `bioconductor-allenpvc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-allenpvc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-allenpvc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-allenpvc
   :alt:   (downloads)
.. |docker_bioconductor-allenpvc| image:: https://quay.io/repository/biocontainers/bioconductor-allenpvc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-allenpvc
.. _`bioconductor-allenpvc/tags`: https://quay.io/repository/biocontainers/bioconductor-allenpvc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-allenpvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-allenpvc/README.html