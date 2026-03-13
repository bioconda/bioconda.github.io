:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcwlpipelines'
.. highlight: bash

bioconductor-rcwlpipelines
==========================

.. conda:recipe:: bioconductor-rcwlpipelines
   :replaces_section_title:
   :noindex:

   Bioinformatics pipelines based on Rcwl

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RcwlPipelines.html
   :license: GPL-2
   :recipe: /`bioconductor-rcwlpipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwlpipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwlpipelines/meta.yaml>`_

   A collection of Bioinformatics tools and pipelines based on R and the Common Workflow Language.


.. conda:package:: bioconductor-rcwlpipelines

   |downloads_bioconductor-rcwlpipelines| |docker_bioconductor-rcwlpipelines|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-1</code>,  <code>1.22.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.2-0</code>,  </span></summary>
      

      ``1.26.0-1``,  ``1.22.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-rcwl: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on nodejs: ``<24``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-git2r: 
   :depends on r-httr: 
   :depends on r-rappdirs: 

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

    pixi global install bioconductor-rcwlpipelines

to add into an existing workspace instead, run::

    pixi add bioconductor-rcwlpipelines

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcwlpipelines

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcwlpipelines

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcwlpipelines:<tag>

(see `bioconductor-rcwlpipelines/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcwlpipelines| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcwlpipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcwlpipelines
   :alt:   (downloads)
.. |docker_bioconductor-rcwlpipelines| image:: https://quay.io/repository/biocontainers/bioconductor-rcwlpipelines/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcwlpipelines
.. _`bioconductor-rcwlpipelines/tags`: https://quay.io/repository/biocontainers/bioconductor-rcwlpipelines?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcwlpipelines";
        var versions = ["1.26.0","1.22.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcwlpipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcwlpipelines/README.html