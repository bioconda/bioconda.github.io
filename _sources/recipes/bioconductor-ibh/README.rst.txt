:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ibh'
.. highlight: bash

bioconductor-ibh
================

.. conda:recipe:: bioconductor-ibh
   :replaces_section_title:
   :noindex:

   Interaction Based Homogeneity for Evaluating Gene Lists

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ibh.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ibh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibh/meta.yaml>`_
   :links: biotools: :biotools:`ibh`, doi: :doi:`10.1038/nmeth.3252`

   This package contains methods for calculating Interaction Based Homogeneity to evaluate fitness of gene lists to an interaction network which is useful for evaluation of clustering results and gene list analysis. BioGRID interactions are used in the calculation. The user can also provide their own interactions.


.. conda:package:: bioconductor-ibh

   |downloads_bioconductor-ibh| |docker_bioconductor-ibh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-2``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-simpintlists: ``>=1.46.0,<1.47.0``
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

    pixi global install bioconductor-ibh

to add into an existing workspace instead, run::

    pixi add bioconductor-ibh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ibh

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ibh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ibh:<tag>

(see `bioconductor-ibh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ibh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ibh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ibh
   :alt:   (downloads)
.. |docker_bioconductor-ibh| image:: https://quay.io/repository/biocontainers/bioconductor-ibh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ibh
.. _`bioconductor-ibh/tags`: https://quay.io/repository/biocontainers/bioconductor-ibh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ibh";
        var versions = ["1.58.0","1.54.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ibh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ibh/README.html