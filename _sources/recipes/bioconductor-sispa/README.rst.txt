:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sispa'
.. highlight: bash

bioconductor-sispa
==================

.. conda:recipe:: bioconductor-sispa
   :replaces_section_title:
   :noindex:

   SISPA\: Method for Sample Integrated Set Profile Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-sispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sispa/meta.yaml>`_
   :links: biotools: :biotools:`sispa`, doi: :doi:`10.1093/nar/gkv1503`

   Sample Integrated Set Profile Analysis \(SISPA\) is a method designed to define sample groups with similar gene set enrichment profiles.


.. conda:package:: bioconductor-sispa

   |downloads_bioconductor-sispa| |docker_bioconductor-sispa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends on bioconductor-gsva: ``>=1.48.0,<1.49.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-changepoint: 
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-plyr: 

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

    pixi global install bioconductor-sispa

to add into an existing workspace instead, run::

    pixi add bioconductor-sispa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sispa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sispa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sispa:<tag>

(see `bioconductor-sispa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sispa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sispa
   :alt:   (downloads)
.. |docker_bioconductor-sispa| image:: https://quay.io/repository/biocontainers/bioconductor-sispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sispa
.. _`bioconductor-sispa/tags`: https://quay.io/repository/biocontainers/bioconductor-sispa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sispa";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sispa/README.html