:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multicrispr'
.. highlight: bash

bioconductor-multicrispr
========================

.. conda:recipe:: bioconductor-multicrispr
   :replaces_section_title:
   :noindex:

   Multi\-locus multi\-purpose Crispr\/Cas design

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multicrispr.html
   :license: GPL-2
   :recipe: /`bioconductor-multicrispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multicrispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multicrispr/meta.yaml>`_

   This package is for designing Crispr\/Cas9 and Prime Editing experiments. It contains functions to \(1\) define and transform genomic targets\, \(2\) find spacers \(4\) count offtarget \(mis\)matches\, and \(5\) compute Doench2016\/2014 targeting efficiency. Care has been taken for multicrispr to scale well towards large target sets\, enabling the design of large Crispr\/Cas9 libraries.


.. conda:package:: bioconductor-multicrispr

   |downloads_bioconductor-multicrispr| |docker_bioconductor-multicrispr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.3-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-crisprseek: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-karyoploter: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-rbowtie: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-reticulate: 
   :depends on r-stringi: 
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

    pixi global install bioconductor-multicrispr

to add into an existing workspace instead, run::

    pixi add bioconductor-multicrispr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multicrispr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multicrispr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multicrispr:<tag>

(see `bioconductor-multicrispr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multicrispr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multicrispr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multicrispr
   :alt:   (downloads)
.. |docker_bioconductor-multicrispr| image:: https://quay.io/repository/biocontainers/bioconductor-multicrispr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multicrispr
.. _`bioconductor-multicrispr/tags`: https://quay.io/repository/biocontainers/bioconductor-multicrispr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multicrispr";
        var versions = ["1.20.0","1.16.0","1.12.3","1.10.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multicrispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multicrispr/README.html