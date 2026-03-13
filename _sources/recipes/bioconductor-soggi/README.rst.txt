:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-soggi'
.. highlight: bash

bioconductor-soggi
==================

.. conda:recipe:: bioconductor-soggi
   :replaces_section_title:
   :noindex:

   Visualise ChIP\-seq\, MNase\-seq and motif occurrence as aggregate plots Summarised Over Grouped Genomic Intervals

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/soGGi.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-soggi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soggi/meta.yaml>`_
   :links: biotools: :biotools:`soggi`, doi: :doi:`10.1038/nmeth.3252`

   The soGGi package provides a toolset to create genomic interval aggregate\/summary plots of signal or motif occurence from BAM and bigWig files as well as PWM\, rlelist\, GRanges and GAlignments Bioconductor objects. soGGi allows for normalisation\, transformation and arithmetic operation on and between summary plot objects as well as grouping and subsetting of plots by GRanges objects and user supplied metadata. Plots are created using the GGplot2 libary to allow user defined manipulation of the returned plot object. Coupled together\, soGGi features a broad set of methods to visualise genomics data in the context of groups of genomic intervals such as genes\, superenhancers and transcription factor binding events.


.. conda:package:: bioconductor-soggi

   |downloads_bioconductor-soggi| |docker_bioconductor-soggi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-chipseq: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-ggplot2: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-soggi

to add into an existing workspace instead, run::

    pixi add bioconductor-soggi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-soggi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-soggi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-soggi:<tag>

(see `bioconductor-soggi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-soggi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-soggi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-soggi
   :alt:   (downloads)
.. |docker_bioconductor-soggi| image:: https://quay.io/repository/biocontainers/bioconductor-soggi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-soggi
.. _`bioconductor-soggi/tags`: https://quay.io/repository/biocontainers/bioconductor-soggi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-soggi";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-soggi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-soggi/README.html