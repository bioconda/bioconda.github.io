:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metams'
.. highlight: bash

bioconductor-metams
===================

.. conda:recipe:: bioconductor-metams
   :replaces_section_title:
   :noindex:

   MS\-based metabolomics annotation pipeline

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metaMS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metams/meta.yaml>`_
   :links: biotools: :biotools:`metams`

   MS\-based metabolomics data processing and compound annotation pipeline.


.. conda:package:: bioconductor-metams

   |downloads_bioconductor-metams| |docker_bioconductor-metams|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-camera: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-robustbase: 

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

    pixi global install bioconductor-metams

to add into an existing workspace instead, run::

    pixi add bioconductor-metams

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metams

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metams

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metams:<tag>

(see `bioconductor-metams/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metams| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metams.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metams
   :alt:   (downloads)
.. |docker_bioconductor-metams| image:: https://quay.io/repository/biocontainers/bioconductor-metams/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metams
.. _`bioconductor-metams/tags`: https://quay.io/repository/biocontainers/bioconductor-metams?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metams";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metams/README.html