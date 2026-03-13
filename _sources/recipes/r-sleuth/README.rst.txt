:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sleuth'
.. highlight: bash

r-sleuth
========

.. conda:recipe:: r-sleuth
   :replaces_section_title:
   :noindex:

   Tools for investigating RNA\-Seq.

   :homepage: https://pachterlab.github.io/sleuth
   :developer docs: https://github.com/pachterlab/sleuth
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-sleuth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sleuth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sleuth/meta.yaml>`_

   


.. conda:package:: r-sleuth

   |downloads_r-sleuth| |docker_r-sleuth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.2-0</code>,  <code>0.30.1-1</code>,  <code>0.30.1-0</code>,  <code>0.30.0-6</code>,  <code>0.30.0-5</code>,  <code>0.30.0-4</code>,  <code>0.30.0-3</code>,  <code>0.30.0-2</code>,  <code>0.30.0-1</code>,  </span></summary>
      

      ``0.30.2-0``,  ``0.30.1-1``,  ``0.30.1-0``,  ``0.30.0-6``,  ``0.30.0-5``,  ``0.30.0-4``,  ``0.30.0-3``,  ``0.30.0-2``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rhdf5: 
   :depends on r-aggregation: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-lazyeval: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-pheatmap: 
   :depends on r-reshape2: 
   :depends on r-shiny: 
   :depends on r-tidyr: 

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

    pixi global install r-sleuth

to add into an existing workspace instead, run::

    pixi add r-sleuth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sleuth

Alternatively, to install into a new environment, run::

    conda create -n envname r-sleuth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sleuth:<tag>

(see `r-sleuth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sleuth| image:: https://img.shields.io/conda/dn/bioconda/r-sleuth.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sleuth
   :alt:   (downloads)
.. |docker_r-sleuth| image:: https://quay.io/repository/biocontainers/r-sleuth/status
   :target: https://quay.io/repository/biocontainers/r-sleuth
.. _`r-sleuth/tags`: https://quay.io/repository/biocontainers/r-sleuth?tab=tags


.. raw:: html

    <script>
        var package = "r-sleuth";
        var versions = ["0.30.2","0.30.1","0.30.1","0.30.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sleuth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sleuth/README.html