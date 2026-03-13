:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-occugene'
.. highlight: bash

bioconductor-occugene
=====================

.. conda:recipe:: bioconductor-occugene
   :replaces_section_title:
   :noindex:

   Functions for Multinomial Occupancy Distribution

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/occugene.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-occugene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-occugene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-occugene/meta.yaml>`_
   :links: biotools: :biotools:`occugene`, doi: :doi:`10.1007/978-1-59745-321-9_22`

   Statistical tools for building random mutagenesis libraries for prokaryotes. The package has functions for handling the occupancy distribution for a multinomial and for estimating the number of essential genes in random transposon mutagenesis libraries.


.. conda:package:: bioconductor-occugene

   |downloads_bioconductor-occugene| |docker_bioconductor-occugene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-occugene

to add into an existing workspace instead, run::

    pixi add bioconductor-occugene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-occugene

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-occugene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-occugene:<tag>

(see `bioconductor-occugene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-occugene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-occugene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-occugene
   :alt:   (downloads)
.. |docker_bioconductor-occugene| image:: https://quay.io/repository/biocontainers/bioconductor-occugene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-occugene
.. _`bioconductor-occugene/tags`: https://quay.io/repository/biocontainers/bioconductor-occugene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-occugene";
        var versions = ["1.70.0","1.66.0","1.62.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-occugene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-occugene/README.html