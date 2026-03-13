:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellity'
.. highlight: bash

bioconductor-cellity
====================

.. conda:recipe:: bioconductor-cellity
   :replaces_section_title:
   :noindex:

   Quality Control for Single\-Cell RNA\-seq Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellity.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cellity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellity/meta.yaml>`_

   A support vector machine approach to identifying and filtering low quality cells from single\-cell RNA\-seq datasets.


.. conda:package:: bioconductor-cellity

   |downloads_bioconductor-cellity| |docker_bioconductor-cellity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-topgo: ``>=2.62.0,<2.63.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-ggplot2: 
   :depends on r-mvoutlier: 
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

    pixi global install bioconductor-cellity

to add into an existing workspace instead, run::

    pixi add bioconductor-cellity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellity

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellity:<tag>

(see `bioconductor-cellity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellity
   :alt:   (downloads)
.. |docker_bioconductor-cellity| image:: https://quay.io/repository/biocontainers/bioconductor-cellity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellity
.. _`bioconductor-cellity/tags`: https://quay.io/repository/biocontainers/bioconductor-cellity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellity";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellity/README.html