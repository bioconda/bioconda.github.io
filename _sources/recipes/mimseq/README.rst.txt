:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimseq'
.. highlight: bash

mimseq
======

.. conda:recipe:: mimseq
   :replaces_section_title:
   :noindex:

   Modification\-induced misincorporation tRNA sequencing.

   :homepage: https://github.com/nedialkova-lab/mim-tRNAseq
   :license: GPL3 / GPL-3.0-only
   :recipe: /`mimseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimseq/meta.yaml>`_

   


.. conda:package:: mimseq

   |downloads_mimseq| |docker_mimseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.11-0</code>,  <code>1.3.10-0</code>,  <code>1.3.9-0</code>,  <code>1.3.8-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  </span></summary>
      

      ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.4-0``,  ``0.3.4.9-0``,  ``0.3.4.8-0``,  ``0.3.4.7-0``,  ``0.3.4.5-0``,  ``0.3.4.3-0``,  ``0.3.4.1-0``,  ``0.3.4-0``,  ``0.3.3.2-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.6-0``,  ``0.2.5.6-0``,  ``0.2.5.5-1``,  ``0.2.5.5-0``,  ``0.2.5.4-0``,  ``0.2.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.30.0``
   :depends on bioconductor-complexheatmap: ``>=2.2.0``
   :depends on bioconductor-deseq2: ``>=1.26.0``
   :depends on biopython: ``>=1.79``
   :depends on blast: ``>=2.10.1``
   :depends on gmap: ``<=2019.02.26``
   :depends on infernal: ``>=1.1.4``
   :depends on matplotlib-base: ``>=3.4.2``
   :depends on numpy: ``>=1.21.1``
   :depends on pandas: ``>=1.3.1``
   :depends on pybedtools: ``>=0.8.2``
   :depends on pyfiglet: ``>=0.8.post1``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``3.7.*``
   :depends on r-base: ``>=4.1``
   :depends on r-calibrate: ``>=1.7.7``
   :depends on r-devtools: ``>=2.4.1``
   :depends on r-dplyr: ``>=1.0.6``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-ggpol: ``>=0.0.7``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-reshape2: ``>=1.4.4``
   :depends on r-tidyverse: ``>=1.3.0``
   :depends on requests: ``>=2.26.0``
   :depends on samtools: ``>=1.11``
   :depends on seaborn-base: ``>=0.11.1``
   :depends on statsmodels: ``>=0.13.1``

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

    pixi global install mimseq

to add into an existing workspace instead, run::

    pixi add mimseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mimseq

Alternatively, to install into a new environment, run::

    conda create -n envname mimseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mimseq:<tag>

(see `mimseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mimseq| image:: https://img.shields.io/conda/dn/bioconda/mimseq.svg?style=flat
   :target: https://anaconda.org/bioconda/mimseq
   :alt:   (downloads)
.. |docker_mimseq| image:: https://quay.io/repository/biocontainers/mimseq/status
   :target: https://quay.io/repository/biocontainers/mimseq
.. _`mimseq/tags`: https://quay.io/repository/biocontainers/mimseq?tab=tags


.. raw:: html

    <script>
        var package = "mimseq";
        var versions = ["1.3.11","1.3.10","1.3.9","1.3.8","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimseq/README.html