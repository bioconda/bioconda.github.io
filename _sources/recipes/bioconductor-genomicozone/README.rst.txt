:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicozone'
.. highlight: bash

bioconductor-genomicozone
=========================

.. conda:recipe:: bioconductor-genomicozone
   :replaces_section_title:
   :noindex:

   Delineate outstanding genomic zones of differential gene activity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GenomicOZone.html
   :license: LGPL (>=3)
   :recipe: /`bioconductor-genomicozone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone/meta.yaml>`_

   The package clusters gene activity along chromosome into zones\, detects differential zones as outstanding\, and visualizes maps of outstanding zones across the genome. It enables characterization of effects on multiple genes within adaptive genomic neighborhoods\, which could arise from genome reorganization\, structural variation\, or epigenome alteration. It guarantees cluster optimality\, linear runtime to sample size\, and reproducibility. One can apply it on genome\-wide activity measurements such as copy number\, transcriptomic\, proteomic\, and methylation data.


.. conda:package:: bioconductor-genomicozone

   |downloads_bioconductor-genomicozone| |docker_bioconductor-genomicozone|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-ggbio: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ckmeans.1d.dp: ``>=4.3.0``
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-lsr: 
   :depends on r-plyr: 
   :depends on r-rdpack: 

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

    pixi global install bioconductor-genomicozone

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicozone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicozone

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicozone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicozone:<tag>

(see `bioconductor-genomicozone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicozone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicozone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicozone
   :alt:   (downloads)
.. |docker_bioconductor-genomicozone| image:: https://quay.io/repository/biocontainers/bioconductor-genomicozone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicozone
.. _`bioconductor-genomicozone/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicozone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicozone";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html