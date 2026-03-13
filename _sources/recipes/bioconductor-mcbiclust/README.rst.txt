:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcbiclust'
.. highlight: bash

bioconductor-mcbiclust
======================

.. conda:recipe:: bioconductor-mcbiclust
   :replaces_section_title:
   :noindex:

   Massive correlating biclusters for gene expression data and associated methods

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MCbiclust.html
   :license: GPL-2
   :recipe: /`bioconductor-mcbiclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcbiclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcbiclust/meta.yaml>`_

   Custom made algorithm and associated methods for finding\, visualising and analysing biclusters in large gene expression data sets. Algorithm is based on with a supplied gene set of size n\, finding the maximum strength correlation matrix containing m samples from the data set.


.. conda:package:: bioconductor-mcbiclust

   |downloads_bioconductor-mcbiclust| |docker_bioconductor-mcbiclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-scales: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-mcbiclust

to add into an existing workspace instead, run::

    pixi add bioconductor-mcbiclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mcbiclust

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mcbiclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mcbiclust:<tag>

(see `bioconductor-mcbiclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mcbiclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcbiclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcbiclust
   :alt:   (downloads)
.. |docker_bioconductor-mcbiclust| image:: https://quay.io/repository/biocontainers/bioconductor-mcbiclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcbiclust
.. _`bioconductor-mcbiclust/tags`: https://quay.io/repository/biocontainers/bioconductor-mcbiclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mcbiclust";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcbiclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcbiclust/README.html