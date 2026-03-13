:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mobilerna'
.. highlight: bash

bioconductor-mobilerna
======================

.. conda:recipe:: bioconductor-mobilerna
   :replaces_section_title:
   :noindex:

   mobileRNA\: Investigate the RNA mobilome \& population\-scale changes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mobileRNA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mobilerna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilerna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilerna/meta.yaml>`_

   Genomic analysis can be utilised to identify differences between RNA populations in two conditions\, both in production and abundance. This includes the identification of RNAs produced by multiple genomes within a biological system. For example\, RNA produced by pathogens within a host or mobile RNAs in plant graft systems. The mobileRNA package provides methods to pre\-process\, analyse and visualise the sRNA and mRNA populations based on the premise of mapping reads to all genotypes at the same time.


.. conda:package:: bioconductor-mobilerna

   |downloads_bioconductor-mobilerna| |docker_bioconductor-mobilerna|

   :versions:
      
      

      ``1.6.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bioseq: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-pheatmap: 
   :depends on r-progress: 
   :depends on r-rcolorbrewer: 
   :depends on r-reticulate: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-simdesign: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-mobilerna

to add into an existing workspace instead, run::

    pixi add bioconductor-mobilerna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mobilerna

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mobilerna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mobilerna:<tag>

(see `bioconductor-mobilerna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mobilerna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mobilerna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mobilerna
   :alt:   (downloads)
.. |docker_bioconductor-mobilerna| image:: https://quay.io/repository/biocontainers/bioconductor-mobilerna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mobilerna
.. _`bioconductor-mobilerna/tags`: https://quay.io/repository/biocontainers/bioconductor-mobilerna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mobilerna";
        var versions = ["1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mobilerna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mobilerna/README.html