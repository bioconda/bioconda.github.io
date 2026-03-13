:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-italics'
.. highlight: bash

bioconductor-italics
====================

.. conda:recipe:: bioconductor-italics
   :replaces_section_title:
   :noindex:

   ITALICS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ITALICS.html
   :license: GPL-2
   :recipe: /`bioconductor-italics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-italics/meta.yaml>`_

   A Method to normalize of Affymetrix GeneChip Human Mapping 100K and 500K set


.. conda:package:: bioconductor-italics

   |downloads_bioconductor-italics| |docker_bioconductor-italics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.70.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  </span></summary>
      

      ``2.70.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affxparser: ``>=1.82.0,<1.83.0``
   :depends on bioconductor-glad: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-italicsdata: ``>=2.48.0,<2.49.0``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-oligoclasses: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-pd.mapping50k.xba240: ``>=3.12.0,<3.13.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 

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

    pixi global install bioconductor-italics

to add into an existing workspace instead, run::

    pixi add bioconductor-italics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-italics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-italics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-italics:<tag>

(see `bioconductor-italics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-italics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-italics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-italics
   :alt:   (downloads)
.. |docker_bioconductor-italics| image:: https://quay.io/repository/biocontainers/bioconductor-italics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-italics
.. _`bioconductor-italics/tags`: https://quay.io/repository/biocontainers/bioconductor-italics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-italics";
        var versions = ["2.70.0","2.62.0","2.60.0","2.58.0","2.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-italics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-italics/README.html