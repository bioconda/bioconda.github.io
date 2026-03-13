:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alpsnmr'
.. highlight: bash

bioconductor-alpsnmr
====================

.. conda:recipe:: bioconductor-alpsnmr
   :replaces_section_title:
   :noindex:

   Automated spectraL Processing System for NMR

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AlpsNMR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alpsnmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpsnmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpsnmr/meta.yaml>`_

   Reads Bruker NMR data directories both zipped and unzipped. It provides automated and efficient signal processing for untargeted NMR metabolomics. It is able to interpolate the samples\, detect outliers\, exclude regions\, normalize\, detect peaks\, align the spectra\, integrate peaks\, manage metadata and visualize the spectra. After spectra proccessing\, it can apply multivariate analysis on extracted data. Efficient plotting with 1\-D data is also available. Basic reading of 1D ACD\/Labs exported JDX samples is also available.


.. conda:package:: bioconductor-alpsnmr

   |downloads_bioconductor-alpsnmr| |docker_bioconductor-alpsnmr|

   :versions:
      
      

      ``4.12.0-0``,  ``4.8.0-0``,  ``4.4.0-0``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.4.0-0``,  ``3.1.5-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-mixomics: ``>=6.34.0,<6.35.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-baseline: ``>=1.2-1``
   :depends on r-cli: 
   :depends on r-dplyr: ``>=1.1.0``
   :depends on r-fs: ``>=1.2.6``
   :depends on r-generics: 
   :depends on r-ggplot2: ``>=3.1.0``
   :depends on r-glue: ``>=1.2.0``
   :depends on r-htmltools: ``>=0.3.6``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-matrixstats: ``>=0.54.0``
   :depends on r-pcapp: ``>=1.9-73``
   :depends on r-purrr: ``>=0.2.5``
   :depends on r-readxl: ``>=1.1.0``
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-rlang: ``>=0.3.0.1``
   :depends on r-rmarkdown: ``>=1.10``
   :depends on r-scales: ``>=1.2.0``
   :depends on r-signal: ``>=0.7-6``
   :depends on r-speaq: ``>=2.4.0``
   :depends on r-stringr: ``>=1.3.1``
   :depends on r-tibble: ``>=1.3.4``
   :depends on r-tidyr: ``>=1.0.0``
   :depends on r-tidyselect: 
   :depends on r-vctrs: ``>=0.3.0``

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

    pixi global install bioconductor-alpsnmr

to add into an existing workspace instead, run::

    pixi add bioconductor-alpsnmr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alpsnmr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alpsnmr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alpsnmr:<tag>

(see `bioconductor-alpsnmr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alpsnmr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpsnmr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alpsnmr
   :alt:   (downloads)
.. |docker_bioconductor-alpsnmr| image:: https://quay.io/repository/biocontainers/bioconductor-alpsnmr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpsnmr
.. _`bioconductor-alpsnmr/tags`: https://quay.io/repository/biocontainers/bioconductor-alpsnmr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alpsnmr";
        var versions = ["4.12.0","4.8.0","4.4.0","4.2.0","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpsnmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpsnmr/README.html