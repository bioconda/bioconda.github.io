:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msquality'
.. highlight: bash

bioconductor-msquality
======================

.. conda:recipe:: bioconductor-msquality
   :replaces_section_title:
   :noindex:

   MsQuality \- Quality metric calculation from Spectra and MsExperiment objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MsQuality.html
   :license: GPL-3
   :recipe: /`bioconductor-msquality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msquality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msquality/meta.yaml>`_

   The MsQuality provides functionality to calculate quality metrics for mass spectrometry\-derived\, spectral data at the per\-sample level. MsQuality relies on the mzQC framework of quality metrics defined by the Human Proteom Organization\-Proteomics Standards Initiative \(HUPO\-PSI\). These metrics quantify the quality of spectral raw files using a controlled vocabulary. The package is especially addressed towards users that acquire mass spectrometry data on a large scale \(e.g. data sets from clinical settings consisting of several thousands of samples\). The MsQuality package allows to calculate low\-level quality metrics that require minimum information on mass spectrometry data\: retention time\, m\/z values\, and associated intensities. MsQuality relies on the Spectra package\, or alternatively the MsExperiment package\, and its infrastructure to store spectral data.


.. conda:package:: bioconductor-msquality

   |downloads_bioconductor-msquality| |docker_bioconductor-msquality|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-msdata: ``>=0.42.0,<0.43.0``
   :depends bioconductor-msexperiment: ``>=1.4.0,<1.5.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-spectra: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-htmlwidgets: ``>=1.5.3``
   :depends r-plotly: ``>=4.9.4.1``
   :depends r-rmzqc: ``>=0.5.0``
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinydashboard: ``>=0.7.1``
   :depends r-stringr: ``>=1.4.0``
   :depends r-tibble: ``>=3.1.4``
   :depends r-tidyr: ``>=1.1.3``
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

      mamba install bioconductor-msquality

   and update with::

      mamba update bioconductor-msquality

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msquality

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msquality:<tag>

   (see `bioconductor-msquality/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msquality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msquality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msquality
   :alt:   (downloads)
.. |docker_bioconductor-msquality| image:: https://quay.io/repository/biocontainers/bioconductor-msquality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msquality
.. _`bioconductor-msquality/tags`: https://quay.io/repository/biocontainers/bioconductor-msquality?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msquality";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msquality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msquality/README.html