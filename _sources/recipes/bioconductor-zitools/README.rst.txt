:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zitools'
.. highlight: bash

bioconductor-zitools
====================

.. conda:recipe:: bioconductor-zitools
   :replaces_section_title:
   :noindex:

   Analysis of zero\-inflated count data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/zitools.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-zitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zitools/meta.yaml>`_

   zitools allows for zero inflated count data analysis by either using down\-weighting of excess zeros or by replacing an appropriate proportion of excess zeros with NA. Through overloading frequently used statistical functions \(such as mean\, median\, standard deviation\)\, plotting functions \(such as boxplots or heatmap\) or differential abundance tests\, it allows a wide range of downstream analyses for zero\-inflated data in a less biased manner. This becomes applicable in the context of microbiome analyses\, where the data is often overdispersed and zero\-inflated\, therefore making data analysis extremly challenging.


.. conda:package:: bioconductor-zitools

   |downloads_bioconductor-zitools| |docker_bioconductor-zitools|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-pscl: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vgam: 

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

    pixi global install bioconductor-zitools

to add into an existing workspace instead, run::

    pixi add bioconductor-zitools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-zitools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-zitools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-zitools:<tag>

(see `bioconductor-zitools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-zitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zitools
   :alt:   (downloads)
.. |docker_bioconductor-zitools| image:: https://quay.io/repository/biocontainers/bioconductor-zitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zitools
.. _`bioconductor-zitools/tags`: https://quay.io/repository/biocontainers/bioconductor-zitools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zitools";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zitools/README.html