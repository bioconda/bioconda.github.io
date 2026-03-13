:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-benchmarkfdrdata2019'
.. highlight: bash

bioconductor-benchmarkfdrdata2019
=================================

.. conda:recipe:: bioconductor-benchmarkfdrdata2019
   :replaces_section_title:
   :noindex:

   Data and Benchmarking Results from Korthauer and Kimes et al. \(2019\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/benchmarkfdrData2019.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-benchmarkfdrdata2019 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchmarkfdrdata2019>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-benchmarkfdrdata2019/meta.yaml>`_

   Benchmarking results for experimental and simulated data sets used in Korthauer and Kimes et al. \(2019\) to compare methods for controlling the false discovery rate.


.. conda:package:: bioconductor-benchmarkfdrdata2019

   |downloads_bioconductor-benchmarkfdrdata2019| |docker_bioconductor-benchmarkfdrdata2019|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20241103``
   :depends on bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on curl: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install bioconductor-benchmarkfdrdata2019

to add into an existing workspace instead, run::

    pixi add bioconductor-benchmarkfdrdata2019

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-benchmarkfdrdata2019

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-benchmarkfdrdata2019

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-benchmarkfdrdata2019:<tag>

(see `bioconductor-benchmarkfdrdata2019/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-benchmarkfdrdata2019| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-benchmarkfdrdata2019.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-benchmarkfdrdata2019
   :alt:   (downloads)
.. |docker_bioconductor-benchmarkfdrdata2019| image:: https://quay.io/repository/biocontainers/bioconductor-benchmarkfdrdata2019/status
   :target: https://quay.io/repository/biocontainers/bioconductor-benchmarkfdrdata2019
.. _`bioconductor-benchmarkfdrdata2019/tags`: https://quay.io/repository/biocontainers/bioconductor-benchmarkfdrdata2019?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-benchmarkfdrdata2019";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-benchmarkfdrdata2019/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-benchmarkfdrdata2019/README.html