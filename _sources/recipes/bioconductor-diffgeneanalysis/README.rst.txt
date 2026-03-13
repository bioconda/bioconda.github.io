:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffgeneanalysis'
.. highlight: bash

bioconductor-diffgeneanalysis
=============================

.. conda:recipe:: bioconductor-diffgeneanalysis
   :replaces_section_title:
   :noindex:

   Performs differential gene expression Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/diffGeneAnalysis.html
   :license: GPL
   :recipe: /`bioconductor-diffgeneanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffgeneanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffgeneanalysis/meta.yaml>`_
   :links: biotools: :biotools:`diffgeneanalysis`, doi: :doi:`10.1038/nmeth.3252`

   Analyze microarray data


.. conda:package:: bioconductor-diffgeneanalysis

   |downloads_bioconductor-diffgeneanalysis| |docker_bioconductor-diffgeneanalysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.92.0-0</code>,  <code>1.88.0-0</code>,  <code>1.84.0-0</code>,  <code>1.82.0-0</code>,  <code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  </span></summary>
      

      ``1.92.0-0``,  ``1.88.0-0``,  ``1.84.0-0``,  ``1.82.0-0``,  ``1.80.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-minpack.lm: ``>=1.0-4``

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

    pixi global install bioconductor-diffgeneanalysis

to add into an existing workspace instead, run::

    pixi add bioconductor-diffgeneanalysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-diffgeneanalysis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-diffgeneanalysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-diffgeneanalysis:<tag>

(see `bioconductor-diffgeneanalysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-diffgeneanalysis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffgeneanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffgeneanalysis
   :alt:   (downloads)
.. |docker_bioconductor-diffgeneanalysis| image:: https://quay.io/repository/biocontainers/bioconductor-diffgeneanalysis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffgeneanalysis
.. _`bioconductor-diffgeneanalysis/tags`: https://quay.io/repository/biocontainers/bioconductor-diffgeneanalysis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffgeneanalysis";
        var versions = ["1.92.0","1.88.0","1.84.0","1.82.0","1.80.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffgeneanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffgeneanalysis/README.html