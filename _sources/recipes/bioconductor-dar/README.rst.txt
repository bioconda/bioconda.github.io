:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dar'
.. highlight: bash

bioconductor-dar
================

.. conda:recipe:: bioconductor-dar
   :replaces_section_title:
   :noindex:

   Differential Abundance Analysis by Consensus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dar.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dar/meta.yaml>`_

   Differential abundance testing in microbiome data challenges both parametric and non\-parametric statistical methods\, due to its sparsity\, high variability and compositional nature. Microbiome\-specific statistical methods often assume classical distribution models or take into account compositional specifics. These produce results that range within the specificity vs sensitivity space in such a way that type I and type II error that are difficult to ascertain in real microbiome data when a single method is used. Recently\, a consensus approach based on multiple differential abundance \(DA\) methods was recently suggested in order to increase robustness. With dar\, you can use dplyr\-like pipeable sequences of DA methods and then apply different consensus strategies. In this way we can obtain more reliable results in a fast\, consistent and reproducible way.


.. conda:package:: bioconductor-dar

   |downloads_bioconductor-dar| |docker_bioconductor-dar|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-mia: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-crayon: 
   :depends on r-dplyr: 
   :depends on r-generics: 
   :depends on r-ggplot2: 
   :depends on r-glue: 
   :depends on r-gplots: 
   :depends on r-heatmaply: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-rlang: ``>=0.4.11``
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-upsetr: 
   :depends on r-waldo: 

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

    pixi global install bioconductor-dar

to add into an existing workspace instead, run::

    pixi add bioconductor-dar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dar:<tag>

(see `bioconductor-dar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dar
   :alt:   (downloads)
.. |docker_bioconductor-dar| image:: https://quay.io/repository/biocontainers/bioconductor-dar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dar
.. _`bioconductor-dar/tags`: https://quay.io/repository/biocontainers/bioconductor-dar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dar";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dar/README.html