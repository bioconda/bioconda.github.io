:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alevinqc'
.. highlight: bash

bioconductor-alevinqc
=====================

.. conda:recipe:: bioconductor-alevinqc
   :replaces_section_title:
   :noindex:

   Generate QC Reports For Alevin Output

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alevinQC.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alevinqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alevinqc/meta.yaml>`_

   Generate QC reports summarizing the output from an alevin\, alevin\-fry\, or simpleaf run. Reports can be generated as html or pdf files\, or as shiny applications.


.. conda:package:: bioconductor-alevinqc

   |downloads_bioconductor-alevinqc| |docker_bioconductor-alevinqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-tximport: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-tximport: ``>=1.38.2,<1.39.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggally: 
   :depends on r-ggplot2: ``>=3.4.0``
   :depends on r-rcpp: 
   :depends on r-rjson: 
   :depends on r-rlang: 
   :depends on r-rmarkdown: ``>=2.5``
   :depends on r-shiny: 
   :depends on r-shinydashboard: 

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

    pixi global install bioconductor-alevinqc

to add into an existing workspace instead, run::

    pixi add bioconductor-alevinqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alevinqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alevinqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alevinqc:<tag>

(see `bioconductor-alevinqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alevinqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alevinqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alevinqc
   :alt:   (downloads)
.. |docker_bioconductor-alevinqc| image:: https://quay.io/repository/biocontainers/bioconductor-alevinqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alevinqc
.. _`bioconductor-alevinqc/tags`: https://quay.io/repository/biocontainers/bioconductor-alevinqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alevinqc";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alevinqc/README.html