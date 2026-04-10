:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nanopore'
.. highlight: bash

r-nanopore
==========

.. conda:recipe:: r-nanopore
   :replaces_section_title:
   :noindex:

   R methods\, associated with Nanopore tutorials\, for analysis and presentation of Oxford Nanopore Technologies long\-read sequence data

   :homepage: https://github.com/sagrudd/nanopoRe
   :license: OTHER / MPL-2.0
   :recipe: /`r-nanopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanopore/meta.yaml>`_

   


.. conda:package:: r-nanopore

   |downloads_r-nanopore| |docker_r-nanopore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.9-7</code>,  <code>0.2.9-6</code>,  <code>0.2.9-5</code>,  <code>0.2.9-4</code>,  <code>0.2.9-3</code>,  <code>0.2.9-2</code>,  <code>0.2.9-1</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``0.2.9-7``,  ``0.2.9-6``,  ``0.2.9-5``,  ``0.2.9-4``,  ``0.2.9-3``,  ``0.2.9-2``,  ``0.2.9-1``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-genomeinfodb: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-ggbio: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-rsamtools: 
   :depends on bioconductor-s4vectors: 
   :depends on bioconductor-shortread: 
   :depends on bioconductor-variantannotation: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-dplyr: 
   :depends on r-emojifont: 
   :depends on r-fastmatch: 
   :depends on r-gdata: 
   :depends on r-ggplot2: 
   :depends on r-gtools: 
   :depends on r-hmisc: 
   :depends on r-irdisplay: 
   :depends on r-jsonlite: 
   :depends on r-kableextra: 
   :depends on r-magrittr: 
   :depends on r-pbmcapply: 
   :depends on r-plyr: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcurl: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-tibble: 
   :depends on r-vcfr: 
   :depends on r-writexl: 
   :depends on r-yaml: 

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

    pixi global install r-nanopore

to add into an existing workspace instead, run::

    pixi add r-nanopore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-nanopore

Alternatively, to install into a new environment, run::

    conda create -n envname r-nanopore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-nanopore:<tag>

(see `r-nanopore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-nanopore| image:: https://img.shields.io/conda/dn/bioconda/r-nanopore.svg?style=flat
   :target: https://anaconda.org/bioconda/r-nanopore
   :alt:   (downloads)
.. |docker_r-nanopore| image:: https://quay.io/repository/biocontainers/r-nanopore/status
   :target: https://quay.io/repository/biocontainers/r-nanopore
.. _`r-nanopore/tags`: https://quay.io/repository/biocontainers/r-nanopore?tab=tags


.. raw:: html

    <script>
        var package = "r-nanopore";
        var versions = ["0.2.9","0.2.9","0.2.9","0.2.9","0.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nanopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nanopore/README.html