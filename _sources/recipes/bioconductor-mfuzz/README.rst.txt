:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mfuzz'
.. highlight: bash

bioconductor-mfuzz
==================

.. conda:recipe:: bioconductor-mfuzz
   :replaces_section_title:
   :noindex:

   Soft clustering of omics time series data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Mfuzz.html
   :license: GPL-2
   :recipe: /`bioconductor-mfuzz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfuzz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfuzz/meta.yaml>`_

   The Mfuzz package implements noise\-robust soft clustering of omics time\-series data\, including transcriptomic\, proteomic or metabolomic data. It is based on the use of c\-means clustering. For convenience\, it includes a graphical user interface.


.. conda:package:: bioconductor-mfuzz

   |downloads_bioconductor-mfuzz| |docker_bioconductor-mfuzz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.70.0-0</code>,  <code>2.66.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  </span></summary>
      

      ``2.70.0-0``,  ``2.66.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-tkwidgets: ``>=1.88.0,<1.89.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 

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

    pixi global install bioconductor-mfuzz

to add into an existing workspace instead, run::

    pixi add bioconductor-mfuzz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mfuzz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mfuzz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mfuzz:<tag>

(see `bioconductor-mfuzz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mfuzz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mfuzz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mfuzz
   :alt:   (downloads)
.. |docker_bioconductor-mfuzz| image:: https://quay.io/repository/biocontainers/bioconductor-mfuzz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mfuzz
.. _`bioconductor-mfuzz/tags`: https://quay.io/repository/biocontainers/bioconductor-mfuzz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mfuzz";
        var versions = ["2.70.0","2.66.0","2.62.0","2.60.0","2.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mfuzz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mfuzz/README.html