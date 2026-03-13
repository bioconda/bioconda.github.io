:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cfdnakit'
.. highlight: bash

bioconductor-cfdnakit
=====================

.. conda:recipe:: bioconductor-cfdnakit
   :replaces_section_title:
   :noindex:

   Fragmen\-length analysis package from high\-throughput sequencing of cell\-free DNA \(cfDNA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cfdnakit.html
   :license: GPL-3
   :recipe: /`bioconductor-cfdnakit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnakit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnakit/meta.yaml>`_

   This package provides basic functions for analyzing shallow whole\-genome sequencing \(\~0.3X or more\) of cell\-free DNA \(cfDNA\). The package basically extracts the length of cfDNA fragments and aids the vistualization of fragment\-length information. The package also extract fragment\-length information per non\-overlapping fixed\-sized bins and used it for calculating ctDNA estimation score \(CES\).


.. conda:package:: bioconductor-cfdnakit

   |downloads_bioconductor-cfdnakit| |docker_bioconductor-cfdnakit|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-qdnaseq: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-pscbs: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-cfdnakit

to add into an existing workspace instead, run::

    pixi add bioconductor-cfdnakit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cfdnakit

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cfdnakit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cfdnakit:<tag>

(see `bioconductor-cfdnakit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cfdnakit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cfdnakit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cfdnakit
   :alt:   (downloads)
.. |docker_bioconductor-cfdnakit| image:: https://quay.io/repository/biocontainers/bioconductor-cfdnakit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cfdnakit
.. _`bioconductor-cfdnakit/tags`: https://quay.io/repository/biocontainers/bioconductor-cfdnakit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cfdnakit";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cfdnakit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cfdnakit/README.html