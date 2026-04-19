:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylclock'
.. highlight: bash

bioconductor-methylclock
========================

.. conda:recipe:: bioconductor-methylclock
   :replaces_section_title:
   :noindex:

   Methylclock \- DNA methylation\-based clocks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/methylclock.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-methylclock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclock/meta.yaml>`_

   This package allows to estimate chronological and gestational DNA methylation \(DNAm\) age as well as biological age using different methylation clocks. Chronological DNAm age \(in years\) \: Horvath\'s clock\, Hannum\'s clock\, BNN\, Horvath\'s skin\+blood clock\, PedBE clock and Wu\'s clock. Gestational DNAm age \: Knight\'s clock\, Bohlin\'s clock\, Mayne\'s clock and Lee\'s clocks. Biological DNAm clocks \: Levine\'s clock and Telomere Length\'s clock.


.. conda:package:: bioconductor-methylclock

   |downloads_bioconductor-methylclock| |docker_bioconductor-methylclock|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0a0``
   :depends on bioconductor-methylclockdata: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-methylclockdata: ``>=1.18.0,<1.19.0a0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0a0``
   :depends on bioconductor-planet: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-planet: ``>=1.18.0,<1.19.0a0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-devtools: 
   :depends on r-dplyr: 
   :depends on r-dynamictreecut: 
   :depends on r-ggplot2: 
   :depends on r-ggpmisc: 
   :depends on r-ggpubr: 
   :depends on r-gridextra: 
   :depends on r-performanceanalytics: 
   :depends on r-quadprog: 
   :depends on r-rcpp: ``>=1.0.6``
   :depends on r-rpmm: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-methylclock

to add into an existing workspace instead, run::

    pixi add bioconductor-methylclock

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-methylclock

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-methylclock

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-methylclock:<tag>

(see `bioconductor-methylclock/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-methylclock| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylclock.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylclock
   :alt:   (downloads)
.. |docker_bioconductor-methylclock| image:: https://quay.io/repository/biocontainers/bioconductor-methylclock/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylclock
.. _`bioconductor-methylclock/tags`: https://quay.io/repository/biocontainers/bioconductor-methylclock?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylclock";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylclock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylclock/README.html