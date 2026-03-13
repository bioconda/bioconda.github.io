:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inspect'
.. highlight: bash

bioconductor-inspect
====================

.. conda:recipe:: bioconductor-inspect
   :replaces_section_title:
   :noindex:

   Modeling RNA synthesis\, processing and degradation with RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/INSPEcT.html
   :license: GPL-2
   :recipe: /`bioconductor-inspect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect/meta.yaml>`_
   :links: biotools: :biotools:`inspect`

   INSPEcT \(INference of Synthesis\, Processing and dEgradation rates from Transcriptomic data\) RNA\-seq data in time\-course experiments or steady\-state conditions\, with or without the support of nascent RNA data.


.. conda:package:: bioconductor-inspect

   |downloads_bioconductor-inspect| |docker_bioconductor-inspect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-plgem: ``>=1.82.0,<1.83.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-desolve: 
   :depends on r-kernsmooth: 
   :depends on r-proc: 
   :depends on r-readxl: 
   :depends on r-rootsolve: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-inspect

to add into an existing workspace instead, run::

    pixi add bioconductor-inspect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-inspect

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-inspect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-inspect:<tag>

(see `bioconductor-inspect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-inspect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inspect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inspect
   :alt:   (downloads)
.. |docker_bioconductor-inspect| image:: https://quay.io/repository/biocontainers/bioconductor-inspect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inspect
.. _`bioconductor-inspect/tags`: https://quay.io/repository/biocontainers/bioconductor-inspect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-inspect";
        var versions = ["1.40.0","1.36.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inspect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inspect/README.html