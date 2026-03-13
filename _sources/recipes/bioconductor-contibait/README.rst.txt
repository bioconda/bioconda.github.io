:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-contibait'
.. highlight: bash

bioconductor-contibait
======================

.. conda:recipe:: bioconductor-contibait
   :replaces_section_title:
   :noindex:

   Improves Early Build Genome Assemblies using Strand\-Seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/contiBAIT.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-contibait <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-contibait>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-contibait/meta.yaml>`_
   :links: biotools: :biotools:`contibait`, doi: :doi:`10.1093/bioinformatics/btx281`

   Using strand inheritance data from multiple single cells from the organism whose genome is to be assembled\, contiBAIT can cluster unbridged contigs together into putative chromosomes\, and order the contigs within those chromosomes.


.. conda:package:: bioconductor-contibait

   |downloads_bioconductor-contibait| |docker_bioconductor-contibait|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends on bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends on bioconductor-dnacopy: ``>=1.76.0,<1.77.0a0``
   :depends on bioconductor-exomecopy: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-exomecopy: ``>=1.48.0,<1.49.0a0``
   :depends on bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-genomicfiles: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomicfiles: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends on bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bh: ``>=1.51.0.3``
   :depends on r-clue: 
   :depends on r-cluster: 
   :depends on r-colorspace: 
   :depends on r-data.table: 
   :depends on r-diagram: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gtools: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-tsp: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-contibait

to add into an existing workspace instead, run::

    pixi add bioconductor-contibait

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-contibait

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-contibait

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-contibait:<tag>

(see `bioconductor-contibait/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-contibait| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-contibait.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-contibait
   :alt:   (downloads)
.. |docker_bioconductor-contibait| image:: https://quay.io/repository/biocontainers/bioconductor-contibait/status
   :target: https://quay.io/repository/biocontainers/bioconductor-contibait
.. _`bioconductor-contibait/tags`: https://quay.io/repository/biocontainers/bioconductor-contibait?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-contibait";
        var versions = ["1.30.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-contibait/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-contibait/README.html