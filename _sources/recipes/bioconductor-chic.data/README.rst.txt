:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chic.data'
.. highlight: bash

bioconductor-chic.data
======================

.. conda:recipe:: bioconductor-chic.data
   :replaces_section_title:
   :noindex:

   ChIC package data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/ChIC.data.html
   :license: GPL-2
   :recipe: /`bioconductor-chic.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chic.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chic.data/meta.yaml>`_

   This package contains annotation and metagene profile data for the ChIC package.


.. conda:package:: bioconductor-chic.data

   |downloads_bioconductor-chic.data| |docker_bioconductor-chic.data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on bioconductor-genomeintervals: ``>=1.58.0,<1.59.0``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-caret: ``>=6.0-78``
   :depends on r-randomforest: 

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

    pixi global install bioconductor-chic.data

to add into an existing workspace instead, run::

    pixi add bioconductor-chic.data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-chic.data

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-chic.data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-chic.data:<tag>

(see `bioconductor-chic.data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-chic.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chic.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chic.data
   :alt:   (downloads)
.. |docker_bioconductor-chic.data| image:: https://quay.io/repository/biocontainers/bioconductor-chic.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chic.data
.. _`bioconductor-chic.data/tags`: https://quay.io/repository/biocontainers/bioconductor-chic.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chic.data";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chic.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chic.data/README.html