:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-specond'
.. highlight: bash

bioconductor-specond
====================

.. conda:recipe:: bioconductor-specond
   :replaces_section_title:
   :noindex:

   Condition specific detection from expression data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpeCond.html
   :license: LGPL (>=2)
   :recipe: /`bioconductor-specond <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specond/meta.yaml>`_
   :links: biotools: :biotools:`specond`, doi: :doi:`10.1186/gb-2011-12-12-413`

   This package performs a gene expression data analysis to detect condition\-specific genes. Such genes are significantly up\- or down\-regulated in a small number of conditions. It does so by fitting a mixture of normal distributions to the expression values. Conditions can be environmental conditions\, different tissues\, organs or any other sources that you wish to compare in terms of gene expression.


.. conda:package:: bioconductor-specond

   |downloads_bioconductor-specond| |docker_bioconductor-specond|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-fields: 
   :depends on r-hwriter: ``>=1.1``
   :depends on r-mclust: ``>=3.3.1``
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-specond

to add into an existing workspace instead, run::

    pixi add bioconductor-specond

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-specond

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-specond

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-specond:<tag>

(see `bioconductor-specond/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-specond| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-specond.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-specond
   :alt:   (downloads)
.. |docker_bioconductor-specond| image:: https://quay.io/repository/biocontainers/bioconductor-specond/status
   :target: https://quay.io/repository/biocontainers/bioconductor-specond
.. _`bioconductor-specond/tags`: https://quay.io/repository/biocontainers/bioconductor-specond?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-specond";
        var versions = ["1.64.0","1.60.0","1.56.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-specond/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-specond/README.html