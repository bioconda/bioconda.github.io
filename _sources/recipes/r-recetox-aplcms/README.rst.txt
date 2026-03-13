:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-aplcms'
.. highlight: bash

r-recetox-aplcms
================

.. conda:recipe:: r-recetox-aplcms
   :replaces_section_title:
   :noindex:

   apLCMS is a software which generates a feature table from a batch of LC\/MS spectra. A modified fork of the original apLCMS by Tianwei Yu.

   :homepage: https://github.com/RECETOX/recetox-aplcms
   :documentation: https://mypage.cuhk.edu.cn/academics/yutianwei/apLCMS
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-recetox-aplcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-aplcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-aplcms/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btp291`, doi: :doi:`10.1186/1471-2105-11-559`, doi: :doi:`10.1021/pr301053d`, doi: :doi:`10.1093/bioinformatics/btu430`, doi: :doi:`10.1038/s41598-020-70850-0`

   


.. conda:package:: r-recetox-aplcms

   |downloads_r-recetox-aplcms| |docker_r-recetox-aplcms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-1</code>,  <code>0.12.0-0</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.3-2``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.4-1``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mzr: 
   :depends on bioconductor-rawrr: 
   :depends on r-arrow: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-future.apply: 
   :depends on r-iterators: 
   :depends on r-mass: 
   :depends on r-plyr: 
   :depends on r-rcpp: 
   :depends on r-snow: 
   :depends on r-splines2: 
   :depends on r-stringi: 
   :depends on r-stringr: 
   :depends on r-tibble: 
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

    pixi global install r-recetox-aplcms

to add into an existing workspace instead, run::

    pixi add r-recetox-aplcms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-recetox-aplcms

Alternatively, to install into a new environment, run::

    conda create -n envname r-recetox-aplcms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-recetox-aplcms:<tag>

(see `r-recetox-aplcms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-recetox-aplcms| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-aplcms.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-aplcms
   :alt:   (downloads)
.. |docker_r-recetox-aplcms| image:: https://quay.io/repository/biocontainers/r-recetox-aplcms/status
   :target: https://quay.io/repository/biocontainers/r-recetox-aplcms
.. _`r-recetox-aplcms/tags`: https://quay.io/repository/biocontainers/r-recetox-aplcms?tab=tags


.. raw:: html

    <script>
        var package = "r-recetox-aplcms";
        var versions = ["0.14.2","0.14.1","0.14.0","0.13.4","0.13.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-aplcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-aplcms/README.html