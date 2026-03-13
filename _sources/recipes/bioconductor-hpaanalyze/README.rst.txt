:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpaanalyze'
.. highlight: bash

bioconductor-hpaanalyze
=======================

.. conda:recipe:: bioconductor-hpaanalyze
   :replaces_section_title:
   :noindex:

   Retrieve and analyze data from the Human Protein Atlas

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HPAanalyze.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-hpaanalyze <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpaanalyze/meta.yaml>`_

   Provide functions for retrieving\, exploratory analyzing and visualizing the Human Protein Atlas data.


.. conda:package:: bioconductor-hpaanalyze

   |downloads_bioconductor-hpaanalyze| |docker_bioconductor-hpaanalyze|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-openxlsx: 
   :depends on r-tibble: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-hpaanalyze

to add into an existing workspace instead, run::

    pixi add bioconductor-hpaanalyze

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hpaanalyze

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hpaanalyze

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hpaanalyze:<tag>

(see `bioconductor-hpaanalyze/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hpaanalyze| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpaanalyze.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpaanalyze
   :alt:   (downloads)
.. |docker_bioconductor-hpaanalyze| image:: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze
.. _`bioconductor-hpaanalyze/tags`: https://quay.io/repository/biocontainers/bioconductor-hpaanalyze?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpaanalyze";
        var versions = ["1.28.0","1.24.0","1.20.0","1.20.0","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpaanalyze/README.html