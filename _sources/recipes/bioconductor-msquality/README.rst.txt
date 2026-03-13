:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msquality'
.. highlight: bash

bioconductor-msquality
======================

.. conda:recipe:: bioconductor-msquality
   :replaces_section_title:
   :noindex:

   MsQuality \- Quality metric calculation from Spectra and MsExperiment objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsQuality.html
   :license: GPL-3
   :recipe: /`bioconductor-msquality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msquality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msquality/meta.yaml>`_

   The MsQuality provides functionality to calculate quality metrics for mass spectrometry\-derived\, spectral data at the per\-sample level. MsQuality relies on the mzQC framework of quality metrics defined by the Human Proteom Organization\-Proteomics Standards Initiative \(HUPO\-PSI\). These metrics quantify the quality of spectral raw files using a controlled vocabulary. The package is especially addressed towards users that acquire mass spectrometry data on a large scale \(e.g. data sets from clinical settings consisting of several thousands of samples\). The MsQuality package allows to calculate low\-level quality metrics that require minimum information on mass spectrometry data\: retention time\, m\/z values\, and associated intensities. MsQuality relies on the Spectra package\, or alternatively the MsExperiment package\, and its infrastructure to store spectral data.


.. conda:package:: bioconductor-msquality

   |downloads_bioconductor-msquality| |docker_bioconductor-msquality|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-msdata: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-msexperiment: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-htmlwidgets: ``>=1.5.3``
   :depends on r-plotly: ``>=4.9.4.1``
   :depends on r-rlang: ``>=1.1.1``
   :depends on r-rmzqc: ``>=0.7.0``
   :depends on r-shiny: ``>=1.6.0``
   :depends on r-shinydashboard: ``>=0.7.1``
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tibble: ``>=3.1.4``
   :depends on r-tidyr: ``>=1.1.3``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-msquality

to add into an existing workspace instead, run::

    pixi add bioconductor-msquality

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msquality

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msquality

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msquality:<tag>

(see `bioconductor-msquality/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msquality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msquality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msquality
   :alt:   (downloads)
.. |docker_bioconductor-msquality| image:: https://quay.io/repository/biocontainers/bioconductor-msquality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msquality
.. _`bioconductor-msquality/tags`: https://quay.io/repository/biocontainers/bioconductor-msquality?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msquality";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
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