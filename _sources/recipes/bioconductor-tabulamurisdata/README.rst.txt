:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tabulamurisdata'
.. highlight: bash

bioconductor-tabulamurisdata
============================

.. conda:recipe:: bioconductor-tabulamurisdata
   :replaces_section_title:
   :noindex:

   10x And SmartSeq2 Data From The Tabula Muris Consortium

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/TabulaMurisData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tabulamurisdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tabulamurisdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tabulamurisdata/meta.yaml>`_

   Access to processed 10x \(droplet\) and SmartSeq2 \(on FACS\-sorted cells\) single\-cell RNA\-seq data from the Tabula Muris consortium \(http\:\/\/tabula\-muris.ds.czbiohub.org\/\).


.. conda:package:: bioconductor-tabulamurisdata

   |downloads_bioconductor-tabulamurisdata| |docker_bioconductor-tabulamurisdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-tabulamurisdata

to add into an existing workspace instead, run::

    pixi add bioconductor-tabulamurisdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tabulamurisdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tabulamurisdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tabulamurisdata:<tag>

(see `bioconductor-tabulamurisdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tabulamurisdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tabulamurisdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tabulamurisdata
   :alt:   (downloads)
.. |docker_bioconductor-tabulamurisdata| image:: https://quay.io/repository/biocontainers/bioconductor-tabulamurisdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tabulamurisdata
.. _`bioconductor-tabulamurisdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tabulamurisdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tabulamurisdata";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tabulamurisdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tabulamurisdata/README.html