:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mina'
.. highlight: bash

bioconductor-mina
=================

.. conda:recipe:: bioconductor-mina
   :replaces_section_title:
   :noindex:

   Microbial community dIversity and Network Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mina.html
   :license: GPL
   :recipe: /`bioconductor-mina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mina/meta.yaml>`_

   An increasing number of microbiome datasets have been generated and analyzed with the help of rapidly developing sequencing technologies. At present\, analysis of taxonomic profiling data is mainly conducted using composition\-based methods\, which ignores interactions between community members. Besides this\, a lack of efficient ways to compare microbial interaction networks limited the study of community dynamics. To better understand how community diversity is affected by complex interactions between its members\, we developed a framework \(Microbial community dIversity and Network Analysis\, mina\)\, a comprehensive framework for microbial community diversity analysis and network comparison. By defining and integrating network\-derived community features\, we greatly reduce noise\-to\-signal ratio for diversity analyses. A bootstrap and permutation\-based method was implemented to assess community network dissimilarities and extract discriminative features in a statistically principled way.


.. conda:package:: bioconductor-mina

   |downloads_bioconductor-mina| |docker_bioconductor-mina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-apcluster: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biganalytics: 
   :depends on r-bigmemory: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-hmisc: 
   :depends on r-mcl: 
   :depends on r-paralleldist: 
   :depends on r-plyr: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppparallel: 
   :depends on r-reshape2: 
   :depends on r-rspectra: 
   :depends on r-stringr: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-mina

to add into an existing workspace instead, run::

    pixi add bioconductor-mina

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mina

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mina

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mina:<tag>

(see `bioconductor-mina/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mina.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mina
   :alt:   (downloads)
.. |docker_bioconductor-mina| image:: https://quay.io/repository/biocontainers/bioconductor-mina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mina
.. _`bioconductor-mina/tags`: https://quay.io/repository/biocontainers/bioconductor-mina?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mina";
        var versions = ["1.18.0","1.14.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mina/README.html