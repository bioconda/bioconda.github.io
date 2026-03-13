:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-diffcorr'
.. highlight: bash

r-diffcorr
==========

.. conda:recipe:: r-diffcorr
   :replaces_section_title:
   :noindex:

   A method for identifying pattern changes between 2 experimental conditions in correlation networks \(e.g.\, gene co\-expression networks\)\, which builds on a commonly used association measure\, such as Pearson\'s correlation coefficient. This package includes functions to calculate correlation matrices for high\-dimensional dataset and to test differential correlation\, which means the changes in the correlation relationship among variables \(e.g.\, genes and metabolites\) between 2 experimental conditions. 

   :homepage: https://CRAN.R-project.org/package=DiffCorr
   :license: GPL3 / GPL3
   :recipe: /`r-diffcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-diffcorr/meta.yaml>`_

   


.. conda:package:: r-diffcorr

   |downloads_r-diffcorr| |docker_r-diffcorr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.5-1</code>,  <code>0.4.5-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-6</code>,  </span></summary>
      

      ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-multtest: 
   :depends on bioconductor-pcamethods: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-fdrtool: 
   :depends on r-igraph: 

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

    pixi global install r-diffcorr

to add into an existing workspace instead, run::

    pixi add r-diffcorr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-diffcorr

Alternatively, to install into a new environment, run::

    conda create -n envname r-diffcorr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-diffcorr:<tag>

(see `r-diffcorr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-diffcorr| image:: https://img.shields.io/conda/dn/bioconda/r-diffcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-diffcorr
   :alt:   (downloads)
.. |docker_r-diffcorr| image:: https://quay.io/repository/biocontainers/r-diffcorr/status
   :target: https://quay.io/repository/biocontainers/r-diffcorr
.. _`r-diffcorr/tags`: https://quay.io/repository/biocontainers/r-diffcorr?tab=tags


.. raw:: html

    <script>
        var package = "r-diffcorr";
        var versions = ["0.4.5","0.4.5","0.4.4","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-diffcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-diffcorr/README.html