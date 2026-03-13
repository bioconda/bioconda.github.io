:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-farms'
.. highlight: bash

bioconductor-farms
==================

.. conda:recipe:: bioconductor-farms
   :replaces_section_title:
   :noindex:

   FARMS \- Factor Analysis for Robust Microarray Summarization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/farms.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-farms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-farms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-farms/meta.yaml>`_
   :links: biotools: :biotools:`farms`

   The package provides the summarization algorithm called Factor Analysis for Robust Microarray Summarization \(FARMS\) and a novel unsupervised feature selection criterion called \"I\/NI\-calls\"


.. conda:package:: bioconductor-farms

   |downloads_bioconductor-farms| |docker_bioconductor-farms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-mass: 

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

    pixi global install bioconductor-farms

to add into an existing workspace instead, run::

    pixi add bioconductor-farms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-farms

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-farms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-farms:<tag>

(see `bioconductor-farms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-farms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-farms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-farms
   :alt:   (downloads)
.. |docker_bioconductor-farms| image:: https://quay.io/repository/biocontainers/bioconductor-farms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-farms
.. _`bioconductor-farms/tags`: https://quay.io/repository/biocontainers/bioconductor-farms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-farms";
        var versions = ["1.52.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-farms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-farms/README.html