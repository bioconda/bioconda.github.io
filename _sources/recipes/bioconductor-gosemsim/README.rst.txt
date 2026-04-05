:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosemsim'
.. highlight: bash

bioconductor-gosemsim
=====================

.. conda:recipe:: bioconductor-gosemsim
   :replaces_section_title:
   :noindex:

   GO\-terms Semantic Similarity Measures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GOSemSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gosemsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosemsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosemsim/meta.yaml>`_
   :links: biotools: :biotools:`gosemsim`

   The semantic comparisons of Gene Ontology \(GO\) annotations provide quantitative ways to compute similarities between genes and gene groups\, and have became important basis for many bioinformatics analysis approaches. GOSemSim is an R package for semantic similarity computation among GO terms\, sets of GO terms\, gene products and gene clusters. GOSemSim implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively.


.. conda:package:: bioconductor-gosemsim

   |downloads_bioconductor-gosemsim| |docker_bioconductor-gosemsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.20.0-2</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.20.0-2``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.8.0-0``,  ``2.6.2-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.30.3-0``,  ``1.29.0-0``,  ``1.28.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-digest: 
   :depends on r-r.utils: 
   :depends on r-rcpp: 
   :depends on r-rlang: 
   :depends on r-yulab.utils: ``>=0.2.1``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-gosemsim

to add into an existing workspace instead, run::

    pixi add bioconductor-gosemsim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gosemsim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gosemsim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gosemsim:<tag>

(see `bioconductor-gosemsim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gosemsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosemsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gosemsim
   :alt:   (downloads)
.. |docker_bioconductor-gosemsim| image:: https://quay.io/repository/biocontainers/bioconductor-gosemsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosemsim
.. _`bioconductor-gosemsim/tags`: https://quay.io/repository/biocontainers/bioconductor-gosemsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gosemsim";
        var versions = ["2.36.0","2.32.0","2.32.0","2.28.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosemsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosemsim/README.html