:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsean'
.. highlight: bash

bioconductor-gsean
==================

.. conda:recipe:: bioconductor-gsean
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis with Networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gsean.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gsean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsean/meta.yaml>`_

   Biological molecules in a living organism seldom work individually. They usually interact each other in a cooperative way. Biological process is too complicated to understand without considering such interactions. Thus\, network\-based procedures can be seen as powerful methods for studying complex process. However\, many methods are devised for analyzing individual genes. It is said that techniques based on biological networks such as gene co\-expression are more precise ways to represent information than those using lists of genes only. This package is aimed to integrate the gene expression and biological network. A biological network is constructed from gene expression data and it is used for Gene Set Enrichment Analysis.


.. conda:package:: bioconductor-gsean

   |downloads_bioconductor-gsean| |docker_bioconductor-gsean|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.2-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-fgsea: ``>=1.36.2,<1.37.0a0``
   :depends on bioconductor-ppinfer: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-ppinfer: ``>=1.36.0,<1.37.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-gsean

to add into an existing workspace instead, run::

    pixi add bioconductor-gsean

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gsean

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gsean

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gsean:<tag>

(see `bioconductor-gsean/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gsean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsean.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsean
   :alt:   (downloads)
.. |docker_bioconductor-gsean| image:: https://quay.io/repository/biocontainers/bioconductor-gsean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsean
.. _`bioconductor-gsean/tags`: https://quay.io/repository/biocontainers/bioconductor-gsean?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsean";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.2","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsean/README.html