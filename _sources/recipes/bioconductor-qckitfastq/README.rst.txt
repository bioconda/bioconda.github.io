:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qckitfastq'
.. highlight: bash

bioconductor-qckitfastq
=======================

.. conda:recipe:: bioconductor-qckitfastq
   :replaces_section_title:
   :noindex:

   FASTQ Quality Control

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/qckitfastq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qckitfastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qckitfastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qckitfastq/meta.yaml>`_

   Assessment of FASTQ file format with multiple metrics including quality score\, sequence content\, overrepresented sequence and Kmers.


.. conda:package:: bioconductor-qckitfastq

   |downloads_bioconductor-qckitfastq| |docker_bioconductor-qckitfastq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rseqan: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-rseqan: ``>=1.26.0,<1.27.0a0``
   :depends on bioconductor-seqtools: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-seqtools: ``>=1.40.0,<1.41.0a0``
   :depends on bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-qckitfastq

to add into an existing workspace instead, run::

    pixi add bioconductor-qckitfastq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qckitfastq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qckitfastq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qckitfastq:<tag>

(see `bioconductor-qckitfastq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qckitfastq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qckitfastq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qckitfastq
   :alt:   (downloads)
.. |docker_bioconductor-qckitfastq| image:: https://quay.io/repository/biocontainers/bioconductor-qckitfastq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qckitfastq
.. _`bioconductor-qckitfastq/tags`: https://quay.io/repository/biocontainers/bioconductor-qckitfastq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qckitfastq";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qckitfastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qckitfastq/README.html