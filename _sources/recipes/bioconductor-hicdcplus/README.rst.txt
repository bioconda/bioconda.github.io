:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdcplus'
.. highlight: bash

bioconductor-hicdcplus
======================

.. conda:recipe:: bioconductor-hicdcplus
   :replaces_section_title:
   :noindex:

   Hi\-C Direct Caller Plus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HiCDCPlus.html
   :license: GPL-3
   :recipe: /`bioconductor-hicdcplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdcplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdcplus/meta.yaml>`_

   Systematic 3D interaction calls and differential analysis for Hi\-C and HiChIP. The HiC\-DC\+ \(Hi\-C\/HiChIP direct caller plus\) package enables principled statistical analysis of Hi\-C and HiChIP data sets – including calling significant interactions within a single experiment and performing differential analysis between conditions given replicate experiments – to facilitate global integrative studies. HiC\-DC\+ estimates significant interactions in a Hi\-C or HiChIP experiment directly from the raw contact matrix for each chromosome up to a specified genomic distance\, binned by uniform genomic intervals or restriction enzyme fragments\, by training a background model to account for random polymer ligation and systematic sources of read count variation.


.. conda:package:: bioconductor-hicdcplus

   |downloads_bioconductor-hicdcplus| |docker_bioconductor-hicdcplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomicinteractions: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicinteractions: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.1,<1.71.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bbmle: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-mass: 
   :depends on r-pscl: 
   :depends on r-r.utils: 
   :depends on r-rcpp: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-hicdcplus

to add into an existing workspace instead, run::

    pixi add bioconductor-hicdcplus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hicdcplus

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hicdcplus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hicdcplus:<tag>

(see `bioconductor-hicdcplus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hicdcplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdcplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdcplus
   :alt:   (downloads)
.. |docker_bioconductor-hicdcplus| image:: https://quay.io/repository/biocontainers/bioconductor-hicdcplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdcplus
.. _`bioconductor-hicdcplus/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdcplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicdcplus";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdcplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdcplus/README.html