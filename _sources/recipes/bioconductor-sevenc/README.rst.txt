:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sevenc'
.. highlight: bash

bioconductor-sevenc
===================

.. conda:recipe:: bioconductor-sevenc
   :replaces_section_title:
   :noindex:

   Computational Chromosome Conformation Capture by Correlation of ChIP\-seq at CTCF motifs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sevenC.html
   :license: GPL-3
   :recipe: /`bioconductor-sevenc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sevenc/meta.yaml>`_

   Chromatin looping is an essential feature of eukaryotic genomes and can bring regulatory sequences\, such as enhancers or transcription factor binding sites\, in the close physical proximity of regulated target genes. Here\, we provide sevenC\, an R package that uses protein binding signals from ChIP\-seq and sequence motif information to predict chromatin looping events. Cross\-linking of proteins that bind close to loop anchors result in ChIP\-seq signals at both anchor loci. These signals are used at CTCF motif pairs together with their distance and orientation to each other to predict whether they interact or not. The resulting chromatin loops might be used to associate enhancers or transcription factor binding sites \(e.g.\, ChIP\-seq peaks\) to regulated target genes.


.. conda:package:: bioconductor-sevenc

   |downloads_bioconductor-sevenc| |docker_bioconductor-sevenc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: ``>=1.3-20``
   :depends on r-data.table: ``>=1.10.4``
   :depends on r-purrr: ``>=0.2.2``
   :depends on r-readr: ``>=1.1.0``

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

    pixi global install bioconductor-sevenc

to add into an existing workspace instead, run::

    pixi add bioconductor-sevenc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sevenc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sevenc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sevenc:<tag>

(see `bioconductor-sevenc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sevenc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sevenc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sevenc
   :alt:   (downloads)
.. |docker_bioconductor-sevenc| image:: https://quay.io/repository/biocontainers/bioconductor-sevenc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sevenc
.. _`bioconductor-sevenc/tags`: https://quay.io/repository/biocontainers/bioconductor-sevenc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sevenc";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sevenc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sevenc/README.html