:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vectrapolarisdata'
.. highlight: bash

bioconductor-vectrapolarisdata
==============================

.. conda:recipe:: bioconductor-vectrapolarisdata
   :replaces_section_title:
   :noindex:

   Vectra Polaris and Vectra 3 multiplex single\-cell imaging data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/VectraPolarisData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vectrapolarisdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vectrapolarisdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vectrapolarisdata/meta.yaml>`_

   Provides two multiplex imaging datasets collected on Vectra instruments at the University of Colorado Anschutz Medical Campus. Data are provided as a Spatial Experiment objects. Data is provided in tabular form and has been segmented and phenotyped using Inform software. Raw .tiff files are not included.


.. conda:package:: bioconductor-vectrapolarisdata

   |downloads_bioconductor-vectrapolarisdata| |docker_bioconductor-vectrapolarisdata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-vectrapolarisdata

   and update with::

      mamba update bioconductor-vectrapolarisdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-vectrapolarisdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vectrapolarisdata:<tag>

   (see `bioconductor-vectrapolarisdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vectrapolarisdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vectrapolarisdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vectrapolarisdata
   :alt:   (downloads)
.. |docker_bioconductor-vectrapolarisdata| image:: https://quay.io/repository/biocontainers/bioconductor-vectrapolarisdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vectrapolarisdata
.. _`bioconductor-vectrapolarisdata/tags`: https://quay.io/repository/biocontainers/bioconductor-vectrapolarisdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vectrapolarisdata";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vectrapolarisdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vectrapolarisdata/README.html