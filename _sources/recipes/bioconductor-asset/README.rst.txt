:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asset'
.. highlight: bash

bioconductor-asset
==================

.. conda:recipe:: bioconductor-asset
   :replaces_section_title:
   :noindex:

   An R package for subset\-based association analysis of heterogeneous traits and subtypes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASSET.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-asset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset/meta.yaml>`_

   An R package for subset\-based analysis of heterogeneous traits and disease subtypes. The package allows the user to search through all possible subsets of z\-scores to identify the subset of traits giving the best meta\-analyzed z\-score. Further\, it returns a p\-value adjusting for the multiple\-testing involved in the search. It also allows for searching for the best combination of disease subtypes associated with each variant.


.. conda:package:: bioconductor-asset

   |downloads_bioconductor-asset| |docker_bioconductor-asset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 
   :depends on r-msm: 
   :depends on r-rmeta: 

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

    pixi global install bioconductor-asset

to add into an existing workspace instead, run::

    pixi add bioconductor-asset

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-asset

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-asset

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-asset:<tag>

(see `bioconductor-asset/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-asset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asset
   :alt:   (downloads)
.. |docker_bioconductor-asset| image:: https://quay.io/repository/biocontainers/bioconductor-asset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asset
.. _`bioconductor-asset/tags`: https://quay.io/repository/biocontainers/bioconductor-asset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asset";
        var versions = ["2.28.0","2.24.0","2.20.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asset/README.html