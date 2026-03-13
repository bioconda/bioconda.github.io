:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-memes'
.. highlight: bash

bioconductor-memes
==================

.. conda:recipe:: bioconductor-memes
   :replaces_section_title:
   :noindex:

   motif matching\, comparison\, and de novo discovery using the MEME Suite

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/memes.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-memes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-memes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-memes/meta.yaml>`_

   A seamless interface to the MEME Suite family of tools for motif analysis. \'memes\' provides data aware utilities for using GRanges objects as entrypoints to motif analysis\, data structures for examining \& editing motif lists\, and novel data visualizations. \'memes\' functions and data structures are amenable to both base R and tidyverse workflows.


.. conda:package:: bioconductor-memes

   |downloads_bioconductor-memes| |docker_bioconductor-memes|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-universalmotif: ``>=1.28.0,<1.29.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cmdfun: ``>=1.0.2``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggseqlogo: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-patchwork: 
   :depends on r-processx: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-usethis: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-memes

to add into an existing workspace instead, run::

    pixi add bioconductor-memes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-memes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-memes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-memes:<tag>

(see `bioconductor-memes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-memes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-memes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-memes
   :alt:   (downloads)
.. |docker_bioconductor-memes| image:: https://quay.io/repository/biocontainers/bioconductor-memes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-memes
.. _`bioconductor-memes/tags`: https://quay.io/repository/biocontainers/bioconductor-memes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-memes";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-memes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-memes/README.html