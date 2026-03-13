:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hireadsprocessor'
.. highlight: bash

bioconductor-hireadsprocessor
=============================

.. conda:recipe:: bioconductor-hireadsprocessor
   :replaces_section_title:
   :noindex:

   Functions to process LM\-PCR reads from 454\/Illumina data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hiReadsProcessor.html
   :license: GPL-3
   :recipe: /`bioconductor-hireadsprocessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireadsprocessor/meta.yaml>`_

   hiReadsProcessor contains set of functions which allow users to process LM\-PCR products sequenced using any platform. Given an excel\/txt file containing parameters for demultiplexing and sample metadata\, the functions automate trimming of adaptors and identification of the genomic product. Genomic products are further processed for QC and abundance quantification.


.. conda:package:: bioconductor-hireadsprocessor

   |downloads_bioconductor-hireadsprocessor| |docker_bioconductor-hireadsprocessor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-hiannotator: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-readxl: 
   :depends on r-soniclength: 

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

    pixi global install bioconductor-hireadsprocessor

to add into an existing workspace instead, run::

    pixi add bioconductor-hireadsprocessor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hireadsprocessor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hireadsprocessor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hireadsprocessor:<tag>

(see `bioconductor-hireadsprocessor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hireadsprocessor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireadsprocessor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hireadsprocessor
   :alt:   (downloads)
.. |docker_bioconductor-hireadsprocessor| image:: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor
.. _`bioconductor-hireadsprocessor/tags`: https://quay.io/repository/biocontainers/bioconductor-hireadsprocessor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hireadsprocessor";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireadsprocessor/README.html