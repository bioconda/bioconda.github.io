:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfastp'
.. highlight: bash

bioconductor-rfastp
===================

.. conda:recipe:: bioconductor-rfastp
   :replaces_section_title:
   :noindex:

   An Ultra\-Fast and All\-in\-One Fastq Preprocessor \(Quality Control\, Adapter\, low quality and polyX trimming\) and UMI Sequence Parsing\).

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rfastp.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-rfastp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfastp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfastp/meta.yaml>`_

   Rfastp is an R wrapper of fastp developed in c\+\+. fastp performs quality control for fastq files. including low quality bases trimming\, polyX trimming\, adapter auto\-detection and trimming\, paired\-end reads merging\, UMI sequence\/id handling. Rfastp can concatenate multiple files into one file \(like shell command cat\) and accept multiple files as input.


.. conda:package:: bioconductor-rfastp

   |downloads_bioconductor-rfastp| |docker_bioconductor-rfastp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.1-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.1-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rhtslib: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-rhtslib: ``>=3.6.0,<3.7.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-rjson: 

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

    pixi global install bioconductor-rfastp

to add into an existing workspace instead, run::

    pixi add bioconductor-rfastp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rfastp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rfastp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rfastp:<tag>

(see `bioconductor-rfastp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rfastp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rfastp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rfastp
   :alt:   (downloads)
.. |docker_bioconductor-rfastp| image:: https://quay.io/repository/biocontainers/bioconductor-rfastp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rfastp
.. _`bioconductor-rfastp/tags`: https://quay.io/repository/biocontainers/bioconductor-rfastp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rfastp";
        var versions = ["1.20.1","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rfastp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rfastp/README.html