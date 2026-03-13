:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wgcna'
.. highlight: bash

r-wgcna
=======

.. conda:recipe:: r-wgcna
   :replaces_section_title:
   :noindex:

   Functions necessary to perform Weighted Correlation Network Analysis on high\-dimensional data as originally described in Horvath and Zhang \(2005\) \<doi\:10.2202\/1544\-6115.1128\> and Langfelder and Horvath \(2008\) \<doi\:10.1186\/1471\-2105\-9\-559\>. Includes functions for rudimentary data cleaning\, construction of correlation networks\, module identification\, summarization\, and relating of variables and modules to sample traits. Also includes a number of utility functions for data manipulation and visualization.

   :homepage: http://horvath.genetics.ucla.edu/html/CoexpressionNetwork/Rpackages/WGCNA/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-wgcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wgcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wgcna/meta.yaml>`_
   :links: biotools: :biotools:`wgcna`, doi: :doi:`10.1186/1471-2105-9-559`

   


.. conda:package:: r-wgcna

   |downloads_r-wgcna| |docker_r-wgcna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74-1</code>,  <code>1.74-0</code>,  <code>1.73-1</code>,  <code>1.73-0</code>,  <code>1.71-5</code>,  <code>1.71-4</code>,  <code>1.71-3</code>,  <code>1.71-2</code>,  <code>1.71-0</code>,  </span></summary>
      

      ``1.74-1``,  ``1.74-0``,  ``1.73-1``,  ``1.73-0``,  ``1.71-5``,  ``1.71-4``,  ``1.71-3``,  ``1.71-2``,  ``1.71-0``,  ``1.69-5``,  ``1.69-4``,  ``1.69-3``,  ``1.69-2``,  ``1.69-1``,  ``1.69-0``,  ``1.68-1``,  ``1.68-0``,  ``1.67-0``,  ``1.66-1``,  ``1.66-0``,  ``1.64_1-0``,  ``1.61-0``,  ``1.51-1``,  ``1.51-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0a0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0a0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dynamictreecut: ``>=1.62``
   :depends on r-fastcluster: 
   :depends on r-foreach: 
   :depends on r-hmisc: 
   :depends on r-matrixstats: ``>=0.8.1``
   :depends on r-rcpp: ``>=0.11.0``
   :depends on r-robust: 
   :depends on r-survival: 

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

    pixi global install r-wgcna

to add into an existing workspace instead, run::

    pixi add r-wgcna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-wgcna

Alternatively, to install into a new environment, run::

    conda create -n envname r-wgcna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-wgcna:<tag>

(see `r-wgcna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-wgcna| image:: https://img.shields.io/conda/dn/bioconda/r-wgcna.svg?style=flat
   :target: https://anaconda.org/bioconda/r-wgcna
   :alt:   (downloads)
.. |docker_r-wgcna| image:: https://quay.io/repository/biocontainers/r-wgcna/status
   :target: https://quay.io/repository/biocontainers/r-wgcna
.. _`r-wgcna/tags`: https://quay.io/repository/biocontainers/r-wgcna?tab=tags


.. raw:: html

    <script>
        var package = "r-wgcna";
        var versions = ["1.74","1.74","1.73","1.73","1.71"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wgcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wgcna/README.html