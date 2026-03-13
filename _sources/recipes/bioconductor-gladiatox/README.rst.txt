:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gladiatox'
.. highlight: bash

bioconductor-gladiatox
======================

.. conda:recipe:: bioconductor-gladiatox
   :replaces_section_title:
   :noindex:

   R Package for Processing High Content Screening data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GladiaTOX.html
   :license: GPL-2
   :recipe: /`bioconductor-gladiatox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gladiatox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gladiatox/meta.yaml>`_

   GladiaTOX R package is an open\-source\, flexible solution to high\-content screening data processing and reporting in biomedical research. GladiaTOX takes advantage of the tcpl core functionalities and provides a number of extensions\: it provides a web\-service solution to fetch raw data\; it computes severity scores and exports ToxPi formatted files\; furthermore it contains a suite of functionalities to generate pdf reports for quality control and data processing.


.. conda:package:: bioconductor-gladiatox

   |downloads_bioconductor-gladiatox| |docker_bioconductor-gladiatox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-brew: 
   :depends on r-data.table: ``>=1.9.4``
   :depends on r-dbi: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-numderiv: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcurl: 
   :depends on r-rjsonio: 
   :depends on r-rmariadb: 
   :depends on r-rsqlite: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-xml: 
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

    pixi global install bioconductor-gladiatox

to add into an existing workspace instead, run::

    pixi add bioconductor-gladiatox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gladiatox

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gladiatox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gladiatox:<tag>

(see `bioconductor-gladiatox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gladiatox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gladiatox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gladiatox
   :alt:   (downloads)
.. |docker_bioconductor-gladiatox| image:: https://quay.io/repository/biocontainers/bioconductor-gladiatox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gladiatox
.. _`bioconductor-gladiatox/tags`: https://quay.io/repository/biocontainers/bioconductor-gladiatox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gladiatox";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gladiatox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gladiatox/README.html