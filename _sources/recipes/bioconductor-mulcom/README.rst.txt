:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mulcom'
.. highlight: bash

bioconductor-mulcom
===================

.. conda:recipe:: bioconductor-mulcom
   :replaces_section_title:
   :noindex:

   Calculates Mulcom test

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Mulcom.html
   :license: GPL-2
   :recipe: /`bioconductor-mulcom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mulcom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mulcom/meta.yaml>`_
   :links: biotools: :biotools:`mulcom`, doi: :doi:`10.1186/1471-2105-12-382`

   Identification of differentially expressed genes and false discovery rate \(FDR\) calculation by Multiple Comparison test.


.. conda:package:: bioconductor-mulcom

   |downloads_bioconductor-mulcom| |docker_bioconductor-mulcom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.44.0-2</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.0-2``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-fields: 

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

    pixi global install bioconductor-mulcom

to add into an existing workspace instead, run::

    pixi add bioconductor-mulcom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mulcom

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mulcom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mulcom:<tag>

(see `bioconductor-mulcom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mulcom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mulcom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mulcom
   :alt:   (downloads)
.. |docker_bioconductor-mulcom| image:: https://quay.io/repository/biocontainers/bioconductor-mulcom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mulcom
.. _`bioconductor-mulcom/tags`: https://quay.io/repository/biocontainers/bioconductor-mulcom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mulcom";
        var versions = ["1.60.0","1.56.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mulcom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mulcom/README.html