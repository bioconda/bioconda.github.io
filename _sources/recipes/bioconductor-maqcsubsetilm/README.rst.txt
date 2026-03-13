:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maqcsubsetilm'
.. highlight: bash

bioconductor-maqcsubsetilm
==========================

.. conda:recipe:: bioconductor-maqcsubsetilm
   :replaces_section_title:
   :noindex:

   MAQC data subset for the Illumina platform

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/MAQCsubsetILM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-maqcsubsetilm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubsetilm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubsetilm/meta.yaml>`_

   MAQC data subset for the Illumina platform


.. conda:package:: bioconductor-maqcsubsetilm

   |downloads_bioconductor-maqcsubsetilm| |docker_bioconductor-maqcsubsetilm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-data-packages: ``>=20231203``
   :depends on bioconductor-lumi: ``>=2.54.0,<2.55.0``
   :depends on curl: 
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-maqcsubsetilm

to add into an existing workspace instead, run::

    pixi add bioconductor-maqcsubsetilm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-maqcsubsetilm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-maqcsubsetilm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-maqcsubsetilm:<tag>

(see `bioconductor-maqcsubsetilm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-maqcsubsetilm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maqcsubsetilm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maqcsubsetilm
   :alt:   (downloads)
.. |docker_bioconductor-maqcsubsetilm| image:: https://quay.io/repository/biocontainers/bioconductor-maqcsubsetilm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maqcsubsetilm
.. _`bioconductor-maqcsubsetilm/tags`: https://quay.io/repository/biocontainers/bioconductor-maqcsubsetilm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maqcsubsetilm";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maqcsubsetilm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maqcsubsetilm/README.html