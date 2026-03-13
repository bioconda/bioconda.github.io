:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxovarian'
.. highlight: bash

bioconductor-metagxovarian
==========================

.. conda:recipe:: bioconductor-metagxovarian
   :replaces_section_title:
   :noindex:

   Transcriptomic Ovarian Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/MetaGxOvarian.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagxovarian <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxovarian>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxovarian/meta.yaml>`_

   A collection of Ovarian Cancer Transcriptomic Datasets that are part of the MetaGxData package compendium.


.. conda:package:: bioconductor-metagxovarian

   |downloads_bioconductor-metagxovarian| |docker_bioconductor-metagxovarian|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-data-packages: ``>=20241103``
   :depends on bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on curl: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-lattice: 

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

    pixi global install bioconductor-metagxovarian

to add into an existing workspace instead, run::

    pixi add bioconductor-metagxovarian

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metagxovarian

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metagxovarian

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metagxovarian:<tag>

(see `bioconductor-metagxovarian/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metagxovarian| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxovarian.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxovarian
   :alt:   (downloads)
.. |docker_bioconductor-metagxovarian| image:: https://quay.io/repository/biocontainers/bioconductor-metagxovarian/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxovarian
.. _`bioconductor-metagxovarian/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxovarian?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagxovarian";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxovarian/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxovarian/README.html