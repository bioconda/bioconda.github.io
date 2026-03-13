:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-desingle'
.. highlight: bash

bioconductor-desingle
=====================

.. conda:recipe:: bioconductor-desingle
   :replaces_section_title:
   :noindex:

   DEsingle for detecting three types of differential expression in single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DEsingle.html
   :license: GPL-2
   :recipe: /`bioconductor-desingle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle/meta.yaml>`_

   DEsingle is an R package for differential expression \(DE\) analysis of single\-cell RNA\-seq \(scRNA\-seq\) data. It defines and detects 3 types of differentially expressed genes between two groups of single cells\, with regard to different expression status \(DEs\)\, differential expression abundance \(DEa\)\, and general differential expression \(DEg\). DEsingle employs Zero\-Inflated Negative Binomial model to estimate the proportion of real and dropout zeros and to define and detect the 3 types of DE genes. Results showed that DEsingle outperforms existing methods for scRNA\-seq DE analysis\, and can reveal different types of DE genes that are enriched in different biological functions.


.. conda:package:: bioconductor-desingle

   |downloads_bioconductor-desingle| |docker_bioconductor-desingle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bbmle: ``>=1.0.18``
   :depends on r-gamlss: ``>=4.4-0``
   :depends on r-mass: ``>=7.3-45``
   :depends on r-matrix: ``>=1.2-14``
   :depends on r-maxlik: ``>=1.3-4``
   :depends on r-pscl: ``>=1.4.9``
   :depends on r-vgam: ``>=1.0-2``

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

    pixi global install bioconductor-desingle

to add into an existing workspace instead, run::

    pixi add bioconductor-desingle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-desingle

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-desingle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-desingle:<tag>

(see `bioconductor-desingle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-desingle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desingle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-desingle
   :alt:   (downloads)
.. |docker_bioconductor-desingle| image:: https://quay.io/repository/biocontainers/bioconductor-desingle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desingle
.. _`bioconductor-desingle/tags`: https://quay.io/repository/biocontainers/bioconductor-desingle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-desingle";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desingle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desingle/README.html