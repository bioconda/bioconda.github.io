:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tailfindr'
.. highlight: bash

r-tailfindr
===========

.. conda:recipe:: r-tailfindr
   :replaces_section_title:
   :noindex:

   An R package for estimating poly\(A\)\-tail lengths in Oxford Nanopore RNA and DNA reads.

   :homepage: https://github.com/adnaniazi/tailfindr
   :license: AGPL-3.0
   :recipe: /`r-tailfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tailfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tailfindr/meta.yaml>`_

   


.. conda:package:: r-tailfindr

   |downloads_r-tailfindr| |docker_r-tailfindr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  </span></summary>
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-rsamtools: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-crayon: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dosnow: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hdf5r: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-psych: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-rbokeh: 
   :depends on r-rcpp: 
   :depends on r-rcurl: 
   :depends on r-rmarkdown: 
   :depends on r-stringr: 
   :depends on r-testthat: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-xml: 

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

    pixi global install r-tailfindr

to add into an existing workspace instead, run::

    pixi add r-tailfindr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-tailfindr

Alternatively, to install into a new environment, run::

    conda create -n envname r-tailfindr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-tailfindr:<tag>

(see `r-tailfindr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-tailfindr| image:: https://img.shields.io/conda/dn/bioconda/r-tailfindr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tailfindr
   :alt:   (downloads)
.. |docker_r-tailfindr| image:: https://quay.io/repository/biocontainers/r-tailfindr/status
   :target: https://quay.io/repository/biocontainers/r-tailfindr
.. _`r-tailfindr/tags`: https://quay.io/repository/biocontainers/r-tailfindr?tab=tags


.. raw:: html

    <script>
        var package = "r-tailfindr";
        var versions = ["1.4","1.4","1.4","1.4","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tailfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tailfindr/README.html