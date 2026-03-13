:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcwl'
.. highlight: bash

bioconductor-rcwl
=================

.. conda:recipe:: bioconductor-rcwl
   :replaces_section_title:
   :noindex:

   An R interface to the Common Workflow Language

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rcwl.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-rcwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcwl/meta.yaml>`_

   The Common Workflow Language \(CWL\) is an open standard for development of data analysis workflows that is portable and scalable across different tools and working environments. Rcwl provides a simple way to wrap command line tools and build CWL data analysis pipelines programmatically within R. It increases the ease of usage\, development\, and maintenance of CWL pipelines.


.. conda:package:: bioconductor-rcwl

   |downloads_bioconductor-rcwl| |docker_bioconductor-rcwl|

   :versions:
      
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-batchtools: 
   :depends on r-codetools: 
   :depends on r-diagrammer: 
   :depends on r-r.utils: 
   :depends on r-shiny: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-rcwl

to add into an existing workspace instead, run::

    pixi add bioconductor-rcwl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcwl

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcwl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcwl:<tag>

(see `bioconductor-rcwl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcwl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcwl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcwl
   :alt:   (downloads)
.. |docker_bioconductor-rcwl| image:: https://quay.io/repository/biocontainers/bioconductor-rcwl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcwl
.. _`bioconductor-rcwl/tags`: https://quay.io/repository/biocontainers/bioconductor-rcwl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcwl";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcwl/README.html