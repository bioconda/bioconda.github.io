:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtree'
.. highlight: bash

bioconductor-ggtree
===================

.. conda:recipe:: bioconductor-ggtree
   :replaces_section_title:
   :noindex:

   an R package for visualization of tree and annotation data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ggtree.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtree/meta.yaml>`_
   :links: biotools: :biotools:`ggtree`, doi: :doi:`10.1111/2041-210X.12628`

   \'ggtree\' extends the \'ggplot2\' plotting system which implemented the grammar of graphics. \'ggtree\' is designed for visualization and annotation of phylogenetic trees and other tree\-like structures with their annotation data.


.. conda:package:: bioconductor-ggtree

   |downloads_bioconductor-ggtree| |docker_bioconductor-ggtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.4-1</code>,  <code>4.0.4-0</code>,  <code>3.14.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.1-0</code>,  <code>2.4.1-0</code>,  </span></summary>
      

      ``4.0.4-1``,  ``4.0.4-0``,  ``3.14.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.1-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-0``,  ``1.16.3-0``,  ``1.16.0-0``,  ``1.14.6-0``,  ``1.14.4-0``,  ``1.12.7-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.4.20-0``,  ``1.2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-treeio: ``>=1.34.0,<1.35.0``
   :depends on r-ape: 
   :depends on r-aplot: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-dplyr: 
   :depends on r-ggfun: ``>=0.1.7``
   :depends on r-ggiraph: ``>=0.9.1``
   :depends on r-ggplot2: ``>=4.0.0``
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-tidyr: 
   :depends on r-tidytree: ``>=0.4.5``
   :depends on r-yulab.utils: ``>=0.1.6``

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

    pixi global install bioconductor-ggtree

to add into an existing workspace instead, run::

    pixi add bioconductor-ggtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ggtree

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ggtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ggtree:<tag>

(see `bioconductor-ggtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ggtree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggtree
   :alt:   (downloads)
.. |docker_bioconductor-ggtree| image:: https://quay.io/repository/biocontainers/bioconductor-ggtree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtree
.. _`bioconductor-ggtree/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtree?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggtree";
        var versions = ["4.0.4","4.0.4","3.14.0","3.10.0","3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtree/README.html