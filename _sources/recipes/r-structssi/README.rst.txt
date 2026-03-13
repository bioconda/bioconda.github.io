:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-structssi'
.. highlight: bash

r-structssi
===========

.. conda:recipe:: r-structssi
   :replaces_section_title:
   :noindex:

   Performs multiple testing corrections that take specific structure of hypotheses into account.

   :homepage: https://CRAN.R-project.org/package=structSSI
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-structssi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-structssi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-structssi/meta.yaml>`_

   


.. conda:package:: r-structssi

   |downloads_r-structssi| |docker_r-structssi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-11</code>,  <code>1.1.1-10</code>,  <code>1.1.1-9</code>,  <code>1.1.1-8</code>,  <code>1.1.1-7</code>,  <code>1.1.1-6</code>,  <code>1.1.1-5</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-11``,  ``1.1.1-10``,  ``1.1.1-9``,  ``1.1.1-8``,  ``1.1.1-7``,  ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-multtest: 
   :depends on bioconductor-phyloseq: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-reshape2: 

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

    pixi global install r-structssi

to add into an existing workspace instead, run::

    pixi add r-structssi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-structssi

Alternatively, to install into a new environment, run::

    conda create -n envname r-structssi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-structssi:<tag>

(see `r-structssi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-structssi| image:: https://img.shields.io/conda/dn/bioconda/r-structssi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-structssi
   :alt:   (downloads)
.. |docker_r-structssi| image:: https://quay.io/repository/biocontainers/r-structssi/status
   :target: https://quay.io/repository/biocontainers/r-structssi
.. _`r-structssi/tags`: https://quay.io/repository/biocontainers/r-structssi?tab=tags


.. raw:: html

    <script>
        var package = "r-structssi";
        var versions = ["1.2.1","1.2.0","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-structssi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-structssi/README.html