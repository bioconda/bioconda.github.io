:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathvar'
.. highlight: bash

bioconductor-pathvar
====================

.. conda:recipe:: bioconductor-pathvar
   :replaces_section_title:
   :noindex:

   Methods to Find Pathways with Significantly Different Variability

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pathVar.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-pathvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathvar/meta.yaml>`_
   :links: biotools: :biotools:`pathvar`, doi: :doi:`10.7717/peerj.3334`

   This package contains the functions to find the pathways that have significantly different variability than a reference gene set. It also finds the categories from this pathway that are significant where each category is a cluster of genes. The genes are separated into clusters by their level of variability.


.. conda:package:: bioconductor-pathvar

   |downloads_bioconductor-pathvar| |docker_bioconductor-pathvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-emt: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-matching: 
   :depends on r-mclust: 

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

    pixi global install bioconductor-pathvar

to add into an existing workspace instead, run::

    pixi add bioconductor-pathvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pathvar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pathvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pathvar:<tag>

(see `bioconductor-pathvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pathvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathvar
   :alt:   (downloads)
.. |docker_bioconductor-pathvar| image:: https://quay.io/repository/biocontainers/bioconductor-pathvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathvar
.. _`bioconductor-pathvar/tags`: https://quay.io/repository/biocontainers/bioconductor-pathvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathvar";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathvar/README.html