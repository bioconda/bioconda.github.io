:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lipidr'
.. highlight: bash

bioconductor-lipidr
===================

.. conda:recipe:: bioconductor-lipidr
   :replaces_section_title:
   :noindex:

   Data Mining and Analysis of Lipidomics Datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lipidr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lipidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lipidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lipidr/meta.yaml>`_

   lipidr an easy\-to\-use R package implementing a complete workflow for downstream analysis of targeted and untargeted lipidomics data. lipidomics results can be imported into lipidr as a numerical matrix or a Skyline export\, allowing integration into current analysis frameworks. Data mining of lipidomics datasets is enabled through integration with Metabolomics Workbench API. lipidr allows data inspection\, normalization\, univariate and multivariate analysis\, displaying informative visualizations. lipidr also implements a novel Lipid Set Enrichment Analysis \(LSEA\)\, harnessing molecular information such as lipid class\, total chain length and unsaturation.


.. conda:package:: bioconductor-lipidr

   |downloads_bioconductor-lipidr| |docker_bioconductor-lipidr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.1-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-ropls: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-forcats: 
   :depends on r-ggplot2: 
   :depends on r-imputelcmd: 
   :depends on r-magrittr: 
   :depends on r-rlang: 
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

    pixi global install bioconductor-lipidr

to add into an existing workspace instead, run::

    pixi add bioconductor-lipidr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lipidr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lipidr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lipidr:<tag>

(see `bioconductor-lipidr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lipidr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lipidr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lipidr
   :alt:   (downloads)
.. |docker_bioconductor-lipidr| image:: https://quay.io/repository/biocontainers/bioconductor-lipidr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lipidr
.. _`bioconductor-lipidr/tags`: https://quay.io/repository/biocontainers/bioconductor-lipidr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lipidr";
        var versions = ["2.24.0","2.20.0","2.16.0","2.14.1","2.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lipidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lipidr/README.html