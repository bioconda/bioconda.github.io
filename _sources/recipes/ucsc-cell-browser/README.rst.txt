:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-cell-browser'
.. highlight: bash

ucsc-cell-browser
=================

.. conda:recipe:: ucsc-cell-browser
   :replaces_section_title:
   :noindex:

   A browser for single\-cell data\, main site at http\:\/\/cells.ucsc.edu. UCSC Cellbrowser\, an interactive browser for single cell data. Includes importers and basic pipelines for text files\, Seurat\, Scanpy and Cellranger. All Javascript \- does not require a server backend.

   :homepage: https://cells.ucsc.edu
   :documentation: https://cellbrowser.readthedocs.io/en/master/
   
   :developer docs: https://github.com/maximilianh/cellBrowser
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ucsc-cell-browser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-cell-browser/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab503`

   


.. conda:package:: ucsc-cell-browser

   |downloads_ucsc-cell-browser| |docker_ucsc-cell-browser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.16-0</code>,  <code>1.2.15-0</code>,  <code>1.2.14-0</code>,  <code>1.2.13-0</code>,  <code>1.2.12-0</code>,  <code>1.2.11-0</code>,  <code>1.2.10-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  </span></summary>
      

      ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.15-0``,  ``0.7.14-0``,  ``0.7.13-0``,  ``0.7.11-0``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.5.49-0``,  ``0.5.46-0``,  ``0.5.45-0``,  ``0.5.43-1``,  ``0.5.43-0``,  ``0.5.38-0``,  ``0.5.37-0``,  ``0.5.21-0``,  ``0.4.56-0``,  ``0.4.38-0``,  ``0.4.35-0``,  ``0.4.23-1``,  ``0.4.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on numpy: 
   :depends on python: ``>=3.6,<3.12``

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

    pixi global install ucsc-cell-browser

to add into an existing workspace instead, run::

    pixi add ucsc-cell-browser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ucsc-cell-browser

Alternatively, to install into a new environment, run::

    conda create -n envname ucsc-cell-browser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ucsc-cell-browser:<tag>

(see `ucsc-cell-browser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ucsc-cell-browser| image:: https://img.shields.io/conda/dn/bioconda/ucsc-cell-browser.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-cell-browser
   :alt:   (downloads)
.. |docker_ucsc-cell-browser| image:: https://quay.io/repository/biocontainers/ucsc-cell-browser/status
   :target: https://quay.io/repository/biocontainers/ucsc-cell-browser
.. _`ucsc-cell-browser/tags`: https://quay.io/repository/biocontainers/ucsc-cell-browser?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-cell-browser";
        var versions = ["1.2.16","1.2.15","1.2.14","1.2.13","1.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-cell-browser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-cell-browser/README.html