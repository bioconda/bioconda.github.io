:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellmultimodal'
.. highlight: bash

bioconductor-singlecellmultimodal
=================================

.. conda:recipe:: bioconductor-singlecellmultimodal
   :replaces_section_title:
   :noindex:

   Integrating Multi\-modal Single Cell Experiment datasets

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/SingleCellMultiModal.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-singlecellmultimodal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellmultimodal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellmultimodal/meta.yaml>`_

   SingleCellMultiModal is an ExperimentHub package that serves multiple datasets obtained from GEO and other sources and represents them as MultiAssayExperiment objects. We provide several multi\-modal datasets including scNMT\, 10X Multiome\, seqFISH\, CITEseq\, SCoPE2\, and others. The scope of the package is is to provide data for benchmarking and analysis.


.. conda:package:: bioconductor-singlecellmultimodal

   |downloads_bioconductor-singlecellmultimodal| |docker_bioconductor-singlecellmultimodal|

   :versions:
      
      

      ``1.12.2-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.4-0``,  ``1.1.19-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocbaseutils: ``>=1.2.0,<1.3.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlecellmultimodal

   and update with::

      conda update bioconductor-singlecellmultimodal

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellmultimodal:<tag>

   (see `bioconductor-singlecellmultimodal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellmultimodal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellmultimodal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellmultimodal
   :alt:   (downloads)
.. |docker_bioconductor-singlecellmultimodal| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellmultimodal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellmultimodal
.. _`bioconductor-singlecellmultimodal/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellmultimodal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellmultimodal";
        var versions = ["1.12.2","1.10.0","1.6.0","1.6.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellmultimodal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellmultimodal/README.html