:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustersignificance'
.. highlight: bash

bioconductor-clustersignificance
================================

.. conda:recipe:: bioconductor-clustersignificance
   :replaces_section_title:
   :noindex:

   The ClusterSignificance package provides tools to assess if class clusters in dimensionality reduced data representations have a separation different from permuted data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClusterSignificance.html
   :license: GPL-3
   :recipe: /`bioconductor-clustersignificance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustersignificance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustersignificance/meta.yaml>`_
   :links: biotools: :biotools:`clustersignificance`, doi: :doi:`10.1038/nmeth.3252`

   The ClusterSignificance package provides tools to assess if class clusters in dimensionality reduced data representations have a separation different from permuted data. The term class clusters here refers to\, clusters of points representing known classes in the data. This is particularly useful to determine if a subset of the variables\, e.g. genes in a specific pathway\, alone can separate samples into these established classes. ClusterSignificance accomplishes this by\, projecting all points onto a one dimensional line. Cluster separations are then scored and the probability of the seen separation being due to chance is evaluated using a permutation method.


.. conda:package:: bioconductor-clustersignificance

   |downloads_bioconductor-clustersignificance| |docker_bioconductor-clustersignificance|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-pracma: 
   :depends on r-princurve: ``>=2.0.5``
   :depends on r-rcolorbrewer: 
   :depends on r-scatterplot3d: 

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

    pixi global install bioconductor-clustersignificance

to add into an existing workspace instead, run::

    pixi add bioconductor-clustersignificance

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clustersignificance

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clustersignificance

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clustersignificance:<tag>

(see `bioconductor-clustersignificance/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clustersignificance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustersignificance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustersignificance
   :alt:   (downloads)
.. |docker_bioconductor-clustersignificance| image:: https://quay.io/repository/biocontainers/bioconductor-clustersignificance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustersignificance
.. _`bioconductor-clustersignificance/tags`: https://quay.io/repository/biocontainers/bioconductor-clustersignificance?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustersignificance";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustersignificance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustersignificance/README.html