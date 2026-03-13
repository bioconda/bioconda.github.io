:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stemhypoxia'
.. highlight: bash

bioconductor-stemhypoxia
========================

.. conda:recipe:: bioconductor-stemhypoxia
   :replaces_section_title:
   :noindex:

   Differentiation of Human Embryonic Stem Cells under Hypoxia gene expression dataset by Prado\-Lopez et al. \(2010\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/stemHypoxia.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-stemhypoxia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stemhypoxia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stemhypoxia/meta.yaml>`_

   Expression profiling using microarray technology to prove if \'Hypoxia Promotes Efficient Differentiation of Human Embryonic Stem Cells to Functional Endothelium\' by Prado\-Lopez et al. \(2010\) Stem Cells 28\:407\-418. Full data available at Gene Expression Omnibus series GSE37761.


.. conda:package:: bioconductor-stemhypoxia

   |downloads_bioconductor-stemhypoxia| |docker_bioconductor-stemhypoxia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
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

    pixi global install bioconductor-stemhypoxia

to add into an existing workspace instead, run::

    pixi add bioconductor-stemhypoxia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-stemhypoxia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-stemhypoxia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-stemhypoxia:<tag>

(see `bioconductor-stemhypoxia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-stemhypoxia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stemhypoxia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stemhypoxia
   :alt:   (downloads)
.. |docker_bioconductor-stemhypoxia| image:: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia
.. _`bioconductor-stemhypoxia/tags`: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stemhypoxia";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.33.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stemhypoxia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stemhypoxia/README.html