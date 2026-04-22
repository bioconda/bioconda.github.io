:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-polytect'
.. highlight: bash

bioconductor-polytect
=====================

.. conda:recipe:: bioconductor-polytect
   :replaces_section_title:
   :noindex:

   An R package for digital data clustering

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Polytect.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-polytect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polytect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polytect/meta.yaml>`_

   Polytect is an advanced computational tool designed for the analysis of multi\-color digital PCR data. It provides automatic clustering and labeling of partitions into distinct groups based on clusters first identified by the flowPeaks algorithm. Polytect is particularly useful for researchers in molecular biology and bioinformatics\, enabling them to gain deeper insights into their experimental results through precise partition classification and data visualization.


.. conda:package:: bioconductor-polytect

   |downloads_bioconductor-polytect| |docker_bioconductor-polytect|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-flowpeaks: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-cowplot: 
   :depends on r-dicekriging: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-lhs: 
   :depends on r-mlrmbo: 
   :depends on r-mvtnorm: 
   :depends on r-paramhelpers: 
   :depends on r-rgenoud: 
   :depends on r-smoof: 
   :depends on r-sn: 
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

    pixi global install bioconductor-polytect

to add into an existing workspace instead, run::

    pixi add bioconductor-polytect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-polytect

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-polytect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-polytect:<tag>

(see `bioconductor-polytect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-polytect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-polytect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-polytect
   :alt:   (downloads)
.. |docker_bioconductor-polytect| image:: https://quay.io/repository/biocontainers/bioconductor-polytect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-polytect
.. _`bioconductor-polytect/tags`: https://quay.io/repository/biocontainers/bioconductor-polytect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-polytect";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-polytect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-polytect/README.html