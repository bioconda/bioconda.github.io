:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imcdatasets'
.. highlight: bash

bioconductor-imcdatasets
========================

.. conda:recipe:: bioconductor-imcdatasets
   :replaces_section_title:
   :noindex:

   Collection of publicly available imaging mass cytometry \(IMC\) datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/imcdatasets.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-imcdatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcdatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcdatasets/meta.yaml>`_

   The imcdatasets package provides access to publicly available IMC datasets. IMC is a technology that enables measurement of \> 40 proteins from tissue sections. The generated images can be segmented to extract single cell data. Datasets typically consist of three elements\: a SingleCellExperiment object containing single cell data\, a CytoImageList object containing multichannel images and a CytoImageList object containing the cell masks that were used to extract the single cell data from the images.


.. conda:package:: bioconductor-imcdatasets

   |downloads_bioconductor-imcdatasets| |docker_bioconductor-imcdatasets|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-cytomapper: ``>=1.18.0,<1.19.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-spatialexperiment: ``>=1.16.0,<1.17.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-imcdatasets

   and update with::

      mamba update bioconductor-imcdatasets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-imcdatasets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
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