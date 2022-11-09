:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imcdatasets'
.. highlight: bash

bioconductor-imcdatasets
========================

.. conda:recipe:: bioconductor-imcdatasets
   :replaces_section_title:
   :noindex:

   Collection of publicly available imaging mass cytometry \(IMC\) datasets

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/imcdatasets.html
   :license: GPL-3
   :recipe: /`bioconductor-imcdatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcdatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcdatasets/meta.yaml>`_

   The imcdatasets package provides access to publicly available IMC datasets. IMC is a technology that enables measurement of \> 40 proteins from tissue sections. The generated images can be segmented to extract single cell data. Datasets typically consist of three elements\: a SingleCellExperiment object containing single cell data\, a CytoImageList object containing multichannel images and a CytoImageList object containing the cell masks that were used to extract the single cell data from the images.


.. conda:package:: bioconductor-imcdatasets

   |downloads_bioconductor-imcdatasets| |docker_bioconductor-imcdatasets|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-cytomapper: ``>=1.10.0,<1.11.0``
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-spatialexperiment: ``>=1.8.0,<1.9.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imcdatasets

   and update with::

      conda update bioconductor-imcdatasets

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imcdatasets:<tag>

   (see `bioconductor-imcdatasets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imcdatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imcdatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imcdatasets
   :alt:   (downloads)
.. |docker_bioconductor-imcdatasets| image:: https://quay.io/repository/biocontainers/bioconductor-imcdatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imcdatasets
.. _`bioconductor-imcdatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-imcdatasets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imcdatasets";
        var versions = ["1.6.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imcdatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imcdatasets/README.html