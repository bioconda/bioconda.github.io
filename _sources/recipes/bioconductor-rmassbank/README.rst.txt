:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmassbank'
.. highlight: bash

bioconductor-rmassbank
======================

.. conda:recipe:: bioconductor-rmassbank
   :replaces_section_title:
   :noindex:

   Workflow to process tandem MS files and build MassBank records

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RMassBank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmassbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbank/meta.yaml>`_

   Workflow to process tandem MS files and build MassBank records.  Functions include automated extraction of tandem MS spectra\, formula assignment to tandem MS fragments\, recalibration of tandem MS spectra with assigned fragments\, spectrum cleanup\, automated retrieval of compound information from Internet databases\, and export to MassBank records.


.. conda:package:: bioconductor-rmassbank

   |downloads_bioconductor-rmassbank| |docker_bioconductor-rmassbank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.20.0-0</code>,  <code>3.16.0-0</code>,  <code>3.12.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-1</code>,  <code>3.8.0-0</code>,  <code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  </span></summary>
      

      ``3.20.0-0``,  ``3.16.0-0``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-1``,  ``3.8.0-0``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.2.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.13.0-0``,  ``2.12.0-1``,  ``2.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-chemminer: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-chemminer: ``>=3.62.0,<3.63.0a0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openbabel: 
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-digest: 
   :depends on r-dplyr: 
   :depends on r-envipat: 
   :depends on r-glue: 
   :depends on r-httr: 
   :depends on r-httr2: 
   :depends on r-logger: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-rcdk: 
   :depends on r-rcpp: 
   :depends on r-readjdx: 
   :depends on r-readr: 
   :depends on r-rjson: 
   :depends on r-tibble: 
   :depends on r-tidyselect: 
   :depends on r-webchem: 
   :depends on r-xml: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-rmassbank

to add into an existing workspace instead, run::

    pixi add bioconductor-rmassbank

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rmassbank

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rmassbank

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rmassbank:<tag>

(see `bioconductor-rmassbank/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rmassbank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmassbank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmassbank
   :alt:   (downloads)
.. |docker_bioconductor-rmassbank| image:: https://quay.io/repository/biocontainers/bioconductor-rmassbank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmassbank
.. _`bioconductor-rmassbank/tags`: https://quay.io/repository/biocontainers/bioconductor-rmassbank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmassbank";
        var versions = ["3.20.0","3.16.0","3.12.0","3.10.0","3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmassbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmassbank/README.html