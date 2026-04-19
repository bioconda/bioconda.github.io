:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribodipa'
.. highlight: bash

bioconductor-ribodipa
=====================

.. conda:recipe:: bioconductor-ribodipa
   :replaces_section_title:
   :noindex:

   Differential pattern analysis for Ribo\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RiboDiPA.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-ribodipa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribodipa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribodipa/meta.yaml>`_

   This package performs differential pattern analysis for Ribo\-seq data. It identifies genes with significantly different patterns in the ribosome footprint between two conditions. RiboDiPA contains five major components including bam file processing\, P\-site mapping\, data binning\, differential pattern analysis and footprint visualization.


.. conda:package:: bioconductor-ribodipa

   |downloads_bioconductor-ribodipa| |docker_bioconductor-ribodipa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-deseq2: ``>=1.50.2,<1.51.0a0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0a0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.2,<1.7.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-elitism: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: ``>=1.0.2``
   :depends on r-reldist: 

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

    pixi global install bioconductor-ribodipa

to add into an existing workspace instead, run::

    pixi add bioconductor-ribodipa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ribodipa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ribodipa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ribodipa:<tag>

(see `bioconductor-ribodipa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ribodipa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribodipa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribodipa
   :alt:   (downloads)
.. |docker_bioconductor-ribodipa| image:: https://quay.io/repository/biocontainers/bioconductor-ribodipa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribodipa
.. _`bioconductor-ribodipa/tags`: https://quay.io/repository/biocontainers/bioconductor-ribodipa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribodipa";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribodipa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribodipa/README.html