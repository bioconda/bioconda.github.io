:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmerge'
.. highlight: bash

bioconductor-scmerge
====================

.. conda:recipe:: bioconductor-scmerge
   :replaces_section_title:
   :noindex:

   scMerge\: Merging multiple batches of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scMerge.html
   :license: GPL-3
   :recipe: /`bioconductor-scmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmerge/meta.yaml>`_

   Like all gene expression data\, single\-cell data suffers from batch effects and other unwanted variations that makes accurate biological interpretations difficult. The scMerge method leverages factor analysis\, stably expressed genes \(SEGs\) and \(pseudo\-\) replicates to remove unwanted variations and merge multiple single\-cell data. This package contains all the necessary functions in the scMerge pipeline\, including the identification of SEGs\, replication\-identification methods\, and merging of single\-cell data.


.. conda:package:: bioconductor-scmerge

   |downloads_bioconductor-scmerge| |docker_bioconductor-scmerge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-batchelor: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-m3drop: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-cvtools: 
   :depends on r-distr: 
   :depends on r-igraph: 
   :depends on r-proxyc: 
   :depends on r-ruv: 

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

    pixi global install bioconductor-scmerge

to add into an existing workspace instead, run::

    pixi add bioconductor-scmerge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scmerge

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scmerge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scmerge:<tag>

(see `bioconductor-scmerge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scmerge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmerge
   :alt:   (downloads)
.. |docker_bioconductor-scmerge| image:: https://quay.io/repository/biocontainers/bioconductor-scmerge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmerge
.. _`bioconductor-scmerge/tags`: https://quay.io/repository/biocontainers/bioconductor-scmerge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmerge";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmerge/README.html