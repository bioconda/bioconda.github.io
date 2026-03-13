:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantfiltering'
.. highlight: bash

bioconductor-variantfiltering
=============================

.. conda:recipe:: bioconductor-variantfiltering
   :replaces_section_title:
   :noindex:

   Filtering of coding and non\-coding genetic variants

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VariantFiltering.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-variantfiltering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantfiltering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantfiltering/meta.yaml>`_
   :links: biotools: :biotools:`variantfiltering`, doi: :doi:`10.1038/nmeth.3252`

   Filter genetic variants using different criteria such as inheritance model\, amino acid change consequence\, minor allele frequencies across human populations\, splice site strength\, conservation\, etc.


.. conda:package:: bioconductor-variantfiltering

   |downloads_bioconductor-variantfiltering| |docker_bioconductor-variantfiltering|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.1-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.1-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-genomicscores: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-genomicscores: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0a0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0a0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dt: 
   :depends on r-shiny: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
   :depends on r-shinytree: 

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

    pixi global install bioconductor-variantfiltering

to add into an existing workspace instead, run::

    pixi add bioconductor-variantfiltering

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-variantfiltering

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-variantfiltering

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-variantfiltering:<tag>

(see `bioconductor-variantfiltering/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-variantfiltering| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantfiltering.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantfiltering
   :alt:   (downloads)
.. |docker_bioconductor-variantfiltering| image:: https://quay.io/repository/biocontainers/bioconductor-variantfiltering/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantfiltering
.. _`bioconductor-variantfiltering/tags`: https://quay.io/repository/biocontainers/bioconductor-variantfiltering?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-variantfiltering";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.1","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantfiltering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantfiltering/README.html