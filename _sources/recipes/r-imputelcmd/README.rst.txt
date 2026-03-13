:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-imputelcmd'
.. highlight: bash

r-imputelcmd
============

.. conda:recipe:: r-imputelcmd
   :replaces_section_title:
   :noindex:

   The package contains a collection of functions for left\-censored missing data imputation. Left\-censoring is a special case of missing not at random \(MNAR\)  mechanism that generates non\-responses in proteomics experiments. The package also contains functions to artificially generate peptide\/protein expression data \(log\-transformed\) as random draws from a multivariate Gaussian distribution as well as a function to generate missing data \(both randomly and non\-randomly\). For comparison reasons\, the package also contains several wrapper functions for the imputation of non\-responses that are missing at random. \* New functionality has been added\: a hybrid method that allows the imputation of missing values in a more complex scenario where the missing data are both MAR and MNAR.

   :homepage: https://CRAN.R-project.org/package=imputeLCMD
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-imputelcmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imputelcmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imputelcmd/meta.yaml>`_

   


.. conda:package:: r-imputelcmd

   |downloads_r-imputelcmd| |docker_r-imputelcmd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-4</code>,  <code>2.1-3</code>,  <code>2.1-2</code>,  <code>2.1-1</code>,  <code>2.1-0</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  </span></summary>
      

      ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: 
   :depends on bioconductor-pcamethods: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-norm: 
   :depends on r-tmvtnorm: 

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

    pixi global install r-imputelcmd

to add into an existing workspace instead, run::

    pixi add r-imputelcmd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-imputelcmd

Alternatively, to install into a new environment, run::

    conda create -n envname r-imputelcmd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-imputelcmd:<tag>

(see `r-imputelcmd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-imputelcmd| image:: https://img.shields.io/conda/dn/bioconda/r-imputelcmd.svg?style=flat
   :target: https://anaconda.org/bioconda/r-imputelcmd
   :alt:   (downloads)
.. |docker_r-imputelcmd| image:: https://quay.io/repository/biocontainers/r-imputelcmd/status
   :target: https://quay.io/repository/biocontainers/r-imputelcmd
.. _`r-imputelcmd/tags`: https://quay.io/repository/biocontainers/r-imputelcmd?tab=tags


.. raw:: html

    <script>
        var package = "r-imputelcmd";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-imputelcmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-imputelcmd/README.html