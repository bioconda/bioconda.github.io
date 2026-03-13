:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylmix'
.. highlight: bash

bioconductor-methylmix
======================

.. conda:recipe:: bioconductor-methylmix
   :replaces_section_title:
   :noindex:

   MethylMix\: Identifying methylation driven cancer genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MethylMix.html
   :license: GPL-2
   :recipe: /`bioconductor-methylmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix/meta.yaml>`_

   MethylMix is an algorithm implemented to identify hyper and hypomethylated genes for a disease. MethylMix is based on a beta mixture model to identify methylation states and compares them with the normal DNA methylation state. MethylMix uses a novel statistic\, the Differential Methylation value or DM\-value defined as the difference of a methylation state with the normal methylation state. Finally\, matched gene expression data is used to identify\, besides differential\, functional methylation states by focusing on methylation changes that effect gene expression. References\: Gevaert 0. MethylMix\: an R package for identifying DNA methylation\-driven genes. Bioinformatics \(Oxford\, England\). 2015\;31\(11\)\:1839\-41. doi\:10.1093\/bioinformatics\/btv020. Gevaert O\, Tibshirani R\, Plevritis SK. Pancancer analysis of DNA methylation\-driven genes using MethylMix. Genome Biology. 2015\;16\(1\)\:17. doi\:10.1186\/s13059\-014\-0579\-8.


.. conda:package:: bioconductor-methylmix

   |downloads_bioconductor-methylmix| |docker_bioconductor-methylmix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-r.matlab: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcurl: 
   :depends on r-rpmm: 

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

    pixi global install bioconductor-methylmix

to add into an existing workspace instead, run::

    pixi add bioconductor-methylmix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-methylmix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-methylmix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-methylmix:<tag>

(see `bioconductor-methylmix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-methylmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylmix
   :alt:   (downloads)
.. |docker_bioconductor-methylmix| image:: https://quay.io/repository/biocontainers/bioconductor-methylmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylmix
.. _`bioconductor-methylmix/tags`: https://quay.io/repository/biocontainers/bioconductor-methylmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylmix";
        var versions = ["2.40.0","2.36.0","2.32.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylmix/README.html