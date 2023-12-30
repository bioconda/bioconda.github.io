:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-weberdivechalcdata'
.. highlight: bash

bioconductor-weberdivechalcdata
===============================

.. conda:recipe:: bioconductor-weberdivechalcdata
   :replaces_section_title:
   :noindex:

   Spatially\-resolved transcriptomics and single\-nucleus RNA\-sequencing data from the locus coeruleus \(LC\) in postmortem human brain samples

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/WeberDivechaLCdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-weberdivechalcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weberdivechalcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weberdivechalcdata/meta.yaml>`_

   Spatially\-resolved transcriptomics \(SRT\) and single\-nucleus RNA\-sequencing \(snRNA\-seq\) data from the locus coeruleus \(LC\) in postmortem human brain samples. Data were generated with the 10x Genomics Visium SRT and 10x Genomics Chromium snRNA\-seq platforms. Datasets are stored in SpatialExperiment and SingleCellExperiment formats.


.. conda:package:: bioconductor-weberdivechalcdata

   |downloads_bioconductor-weberdivechalcdata| |docker_bioconductor-weberdivechalcdata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
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

      mamba install bioconductor-weberdivechalcdata

   and update with::

      mamba update bioconductor-weberdivechalcdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-weberdivechalcdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-weberdivechalcdata:<tag>

   (see `bioconductor-weberdivechalcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-weberdivechalcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-weberdivechalcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-weberdivechalcdata
   :alt:   (downloads)
.. |docker_bioconductor-weberdivechalcdata| image:: https://quay.io/repository/biocontainers/bioconductor-weberdivechalcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-weberdivechalcdata
.. _`bioconductor-weberdivechalcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-weberdivechalcdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-weberdivechalcdata";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-weberdivechalcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-weberdivechalcdata/README.html