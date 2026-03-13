:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplast.data'
.. highlight: bash

bioconductor-geneplast.data
===========================

.. conda:recipe:: bioconductor-geneplast.data
   :replaces_section_title:
   :noindex:

   Input data for the geneplast package via AnnotationHub

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/geneplast.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplast.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data/meta.yaml>`_

   The package geneplast.data provides datasets from different sources via AnnotationHub to use in geneplast pipelines. The datasets have species\, phylogenetic trees\, and orthology relationships among eukaryotes from different orthologs databases.


.. conda:package:: bioconductor-geneplast.data

   |downloads_bioconductor-geneplast.data| |docker_bioconductor-geneplast.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.9-1</code>,  <code>0.99.9-0</code>,  <code>0.99.7-0</code>,  <code>0.99.6-2</code>,  <code>0.99.6-1</code>,  <code>0.99.6-0</code>,  <code>0.99.4-0</code>,  <code>0.99.2-2</code>,  <code>0.99.2-1</code>,  </span></summary>
      

      ``0.99.9-1``,  ``0.99.9-0``,  ``0.99.7-0``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.4-0``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-geneplast: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-treeio: ``>=1.34.0,<1.35.0``
   :depends on curl: 
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-igraph: 
   :depends on r-purrr: 
   :depends on r-readr: 
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

    pixi global install bioconductor-geneplast.data

to add into an existing workspace instead, run::

    pixi add bioconductor-geneplast.data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geneplast.data

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geneplast.data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geneplast.data:<tag>

(see `bioconductor-geneplast.data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geneplast.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplast.data
   :alt:   (downloads)
.. |docker_bioconductor-geneplast.data| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast.data
.. _`bioconductor-geneplast.data/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplast.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneplast.data";
        var versions = ["0.99.9","0.99.9","0.99.7","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast.data/README.html