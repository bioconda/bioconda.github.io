:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpa'
.. highlight: bash

bioconductor-gpa
================

.. conda:recipe:: bioconductor-gpa
   :replaces_section_title:
   :noindex:

   GPA \(Genetic analysis incorporating Pleiotropy and Annotation\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GPA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpa/meta.yaml>`_
   :links: biotools: :biotools:`GPA`

   This package provides functions for fitting GPA\, a statistical framework to prioritize GWAS results by integrating pleiotropy information and annotation data. In addition\, it also includes ShinyGPA\, an interactive visualization toolkit to investigate pleiotropic architecture.


.. conda:package:: bioconductor-gpa

   |downloads_bioconductor-gpa| |docker_bioconductor-gpa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-plyr: 
   :depends on r-rcpp: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-vegan: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-gpa

to add into an existing workspace instead, run::

    pixi add bioconductor-gpa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gpa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gpa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gpa:<tag>

(see `bioconductor-gpa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpa
   :alt:   (downloads)
.. |docker_bioconductor-gpa| image:: https://quay.io/repository/biocontainers/bioconductor-gpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpa
.. _`bioconductor-gpa/tags`: https://quay.io/repository/biocontainers/bioconductor-gpa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpa";
        var versions = ["1.22.0","1.18.0","1.14.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpa/README.html