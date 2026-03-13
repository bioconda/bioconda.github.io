:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dimsum'
.. highlight: bash

r-dimsum
========

.. conda:recipe:: r-dimsum
   :replaces_section_title:
   :noindex:

   An error model and pipeline for analyzing deep mutational scanning \(DMS\) data and diagnosing common experimental pathologies

   :homepage: https://github.com/lehner-lab/DiMSum
   :license: MIT
   :recipe: /`r-dimsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dimsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dimsum/meta.yaml>`_

   


.. conda:package:: r-dimsum

   |downloads_r-dimsum| |docker_r-dimsum|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-5</code>,  <code>1.4-4</code>,  <code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3-2</code>,  </span></summary>
      

      ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-shortread: 
   :depends on cutadapt: ``>=2.4-0``
   :depends on fastqc: ``0.11.*``
   :depends on pandoc: ``>=1.17.2``
   :depends on r-base: ``>=4.0,<4.1.0a0``
   :depends on r-cairo: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-hexbin: 
   :depends on r-optparse: 
   :depends on r-plyr: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-seqinr: 
   :depends on r-stringr: 
   :depends on starcode: ``>=1.3``
   :depends on vsearch: ``>=2.17``

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

    pixi global install r-dimsum

to add into an existing workspace instead, run::

    pixi add r-dimsum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-dimsum

Alternatively, to install into a new environment, run::

    conda create -n envname r-dimsum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-dimsum:<tag>

(see `r-dimsum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-dimsum| image:: https://img.shields.io/conda/dn/bioconda/r-dimsum.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dimsum
   :alt:   (downloads)
.. |docker_r-dimsum| image:: https://quay.io/repository/biocontainers/r-dimsum/status
   :target: https://quay.io/repository/biocontainers/r-dimsum
.. _`r-dimsum/tags`: https://quay.io/repository/biocontainers/r-dimsum?tab=tags


.. raw:: html

    <script>
        var package = "r-dimsum";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dimsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dimsum/README.html