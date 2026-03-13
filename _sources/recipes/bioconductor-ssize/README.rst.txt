:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ssize'
.. highlight: bash

bioconductor-ssize
==================

.. conda:recipe:: bioconductor-ssize
   :replaces_section_title:
   :noindex:

   Estimate Microarray Sample Size

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ssize.html
   :license: LGPL
   :recipe: /`bioconductor-ssize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssize/meta.yaml>`_
   :links: biotools: :biotools:`ssize`, doi: :doi:`10.1038/nmeth.3252`

   Functions for computing and displaying sample size information for gene expression arrays.


.. conda:package:: bioconductor-ssize

   |downloads_bioconductor-ssize| |docker_bioconductor-ssize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.84.0-0</code>,  <code>1.80.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  </span></summary>
      

      ``1.84.0-0``,  ``1.80.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gdata: 
   :depends on r-xtable: 

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

    pixi global install bioconductor-ssize

to add into an existing workspace instead, run::

    pixi add bioconductor-ssize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ssize

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ssize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ssize:<tag>

(see `bioconductor-ssize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ssize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ssize
   :alt:   (downloads)
.. |docker_bioconductor-ssize| image:: https://quay.io/repository/biocontainers/bioconductor-ssize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssize
.. _`bioconductor-ssize/tags`: https://quay.io/repository/biocontainers/bioconductor-ssize?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ssize";
        var versions = ["1.84.0","1.80.0","1.76.0","1.76.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssize/README.html