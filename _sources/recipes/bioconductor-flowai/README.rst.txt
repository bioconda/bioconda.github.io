:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowai'
.. highlight: bash

bioconductor-flowai
===================

.. conda:recipe:: bioconductor-flowai
   :replaces_section_title:
   :noindex:

   Automatic and interactive quality control for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowAI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-flowai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowai/meta.yaml>`_
   :links: biotools: :biotools:`flowai`, doi: :doi:`10.1093/bioinformatics/btw191`

   The package is able to perform an automatic or interactive quality control on FCS data acquired using flow cytometry instruments. By evaluating three different properties\: 1\) flow rate\, 2\) signal acquisition\, 3\) dynamic range\, the quality control enables the detection and removal of anomalies.


.. conda:package:: bioconductor-flowai

   |downloads_bioconductor-flowai| |docker_bioconductor-flowai|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.7-0``,  ``1.12.1-0``,  ``1.10.1-0``,  ``1.6.2-0``,  ``1.4.4-0``,  ``1.2.9-0``,  ``1.2.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-changepoint: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 

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

    pixi global install bioconductor-flowai

to add into an existing workspace instead, run::

    pixi add bioconductor-flowai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowai

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowai:<tag>

(see `bioconductor-flowai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowai
   :alt:   (downloads)
.. |docker_bioconductor-flowai| image:: https://quay.io/repository/biocontainers/bioconductor-flowai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowai
.. _`bioconductor-flowai/tags`: https://quay.io/repository/biocontainers/bioconductor-flowai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowai";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowai/README.html