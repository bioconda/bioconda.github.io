:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocstyle'
.. highlight: bash

bioconductor-biocstyle
======================

.. conda:recipe:: bioconductor-biocstyle
   :replaces_section_title:
   :noindex:

   Standard styles for vignettes and other Bioconductor documents

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocStyle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocstyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocstyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocstyle/meta.yaml>`_
   :links: biotools: :biotools:`biocstyle`, doi: :doi:`10.1038/nmeth.3252`

   Provides standard formatting styles for Bioconductor PDF and HTML documents. Package vignettes illustrate use and functionality.


.. conda:package:: bioconductor-biocstyle

   |downloads_bioconductor-biocstyle| |docker_bioconductor-biocstyle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.1-0</code>,  <code>2.18.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.6.0-0``,  ``2.4.1-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-bookdown: 
   :depends on r-knitr: ``>=1.30``
   :depends on r-rmarkdown: ``>=1.2``
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

    pixi global install bioconductor-biocstyle

to add into an existing workspace instead, run::

    pixi add bioconductor-biocstyle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocstyle

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocstyle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocstyle:<tag>

(see `bioconductor-biocstyle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocstyle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocstyle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocstyle
   :alt:   (downloads)
.. |docker_bioconductor-biocstyle| image:: https://quay.io/repository/biocontainers/bioconductor-biocstyle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocstyle
.. _`bioconductor-biocstyle/tags`: https://quay.io/repository/biocontainers/bioconductor-biocstyle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocstyle";
        var versions = ["2.38.0","2.34.0","2.30.0","2.28.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocstyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocstyle/README.html