:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gscreend'
.. highlight: bash

bioconductor-gscreend
=====================

.. conda:recipe:: bioconductor-gscreend
   :replaces_section_title:
   :noindex:

   Analysis of pooled genetic screens

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gscreend.html
   :license: GPL-3
   :recipe: /`bioconductor-gscreend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gscreend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gscreend/meta.yaml>`_

   Package for the analysis of pooled genetic screens \(e.g. CRISPR\-KO\). The analysis of such screens is based on the comparison of gRNA abundances before and after a cell proliferation phase. The gscreend packages takes gRNA counts as input and allows detection of genes whose knockout decreases or increases cell proliferation.


.. conda:package:: bioconductor-gscreend

   |downloads_bioconductor-gscreend| |docker_bioconductor-gscreend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-fgarch: 
   :depends on r-nloptr: 

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

    pixi global install bioconductor-gscreend

to add into an existing workspace instead, run::

    pixi add bioconductor-gscreend

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gscreend

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gscreend

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gscreend:<tag>

(see `bioconductor-gscreend/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gscreend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gscreend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gscreend
   :alt:   (downloads)
.. |docker_bioconductor-gscreend| image:: https://quay.io/repository/biocontainers/bioconductor-gscreend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gscreend
.. _`bioconductor-gscreend/tags`: https://quay.io/repository/biocontainers/bioconductor-gscreend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gscreend";
        var versions = ["1.24.0","1.20.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gscreend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gscreend/README.html