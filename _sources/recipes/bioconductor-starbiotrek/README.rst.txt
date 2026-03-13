:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-starbiotrek'
.. highlight: bash

bioconductor-starbiotrek
========================

.. conda:recipe:: bioconductor-starbiotrek
   :replaces_section_title:
   :noindex:

   StarBioTrek

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/StarBioTrek.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-starbiotrek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starbiotrek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starbiotrek/meta.yaml>`_
   :links: biotools: :biotools:`starbiotrek`, doi: :doi:`10.1186/s12918-015-0211-x`

   This tool StarBioTrek presents some methodologies to measure pathway activity and cross\-talk among pathways integrating also the information of network data.


.. conda:package:: bioconductor-starbiotrek

   |downloads_bioconductor-starbiotrek| |docker_bioconductor-starbiotrek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-graphite: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-spidermir: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-e1071: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-mlmetrics: 
   :depends on r-reshape2: 
   :depends on r-rocr: 

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

    pixi global install bioconductor-starbiotrek

to add into an existing workspace instead, run::

    pixi add bioconductor-starbiotrek

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-starbiotrek

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-starbiotrek

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-starbiotrek:<tag>

(see `bioconductor-starbiotrek/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-starbiotrek| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-starbiotrek.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-starbiotrek
   :alt:   (downloads)
.. |docker_bioconductor-starbiotrek| image:: https://quay.io/repository/biocontainers/bioconductor-starbiotrek/status
   :target: https://quay.io/repository/biocontainers/bioconductor-starbiotrek
.. _`bioconductor-starbiotrek/tags`: https://quay.io/repository/biocontainers/bioconductor-starbiotrek?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-starbiotrek";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-starbiotrek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-starbiotrek/README.html