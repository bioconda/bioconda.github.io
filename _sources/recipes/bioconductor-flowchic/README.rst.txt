:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowchic'
.. highlight: bash

bioconductor-flowchic
=====================

.. conda:recipe:: bioconductor-flowchic
   :replaces_section_title:
   :noindex:

   Analyze flow cytometric data using histogram information

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowCHIC.html
   :license: GPL-2
   :recipe: /`bioconductor-flowchic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowchic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowchic/meta.yaml>`_

   A package to analyze flow cytometric data of complex microbial communities based on histogram images


.. conda:package:: bioconductor-flowchic

   |downloads_bioconductor-flowchic| |docker_bioconductor-flowchic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-hexbin: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-flowchic

to add into an existing workspace instead, run::

    pixi add bioconductor-flowchic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowchic

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowchic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowchic:<tag>

(see `bioconductor-flowchic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowchic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowchic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowchic
   :alt:   (downloads)
.. |docker_bioconductor-flowchic| image:: https://quay.io/repository/biocontainers/bioconductor-flowchic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowchic
.. _`bioconductor-flowchic/tags`: https://quay.io/repository/biocontainers/bioconductor-flowchic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowchic";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowchic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowchic/README.html