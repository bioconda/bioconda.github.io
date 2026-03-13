:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pumadata'
.. highlight: bash

bioconductor-pumadata
=====================

.. conda:recipe:: bioconductor-pumadata
   :replaces_section_title:
   :noindex:

   Various data sets for use with the puma package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/pumadata.html
   :license: LGPL
   :recipe: /`bioconductor-pumadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pumadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pumadata/meta.yaml>`_

   This is a simple data package including various data sets derived from the estrogen data for use with the puma \(Propagating Uncertainty in Microarray Analysis\) package.


.. conda:package:: bioconductor-pumadata

   |downloads_bioconductor-pumadata| |docker_bioconductor-pumadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.46.0-0</code>,  <code>2.42.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  </span></summary>
      

      ``2.46.0-0``,  ``2.42.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-oligo: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-puma: ``>=3.52.0,<3.53.0``
   :depends on curl: 
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

    pixi global install bioconductor-pumadata

to add into an existing workspace instead, run::

    pixi add bioconductor-pumadata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pumadata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pumadata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pumadata:<tag>

(see `bioconductor-pumadata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pumadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pumadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pumadata
   :alt:   (downloads)
.. |docker_bioconductor-pumadata| image:: https://quay.io/repository/biocontainers/bioconductor-pumadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pumadata
.. _`bioconductor-pumadata/tags`: https://quay.io/repository/biocontainers/bioconductor-pumadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pumadata";
        var versions = ["2.46.0","2.42.0","2.38.0","2.36.0","2.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pumadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pumadata/README.html