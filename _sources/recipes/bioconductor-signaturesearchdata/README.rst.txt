:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signaturesearchdata'
.. highlight: bash

bioconductor-signaturesearchdata
================================

.. conda:recipe:: bioconductor-signaturesearchdata
   :replaces_section_title:
   :noindex:

   Datasets for signatureSearch package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/signatureSearchData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-signaturesearchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearchdata/meta.yaml>`_

   CMAP\/LINCS hdf5 databases and other annotations used for signatureSearch software package.


.. conda:package:: bioconductor-signaturesearchdata

   |downloads_bioconductor-signaturesearchdata| |docker_bioconductor-signaturesearchdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.4-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.4-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.14-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-r.utils: 

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

    pixi global install bioconductor-signaturesearchdata

to add into an existing workspace instead, run::

    pixi add bioconductor-signaturesearchdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-signaturesearchdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-signaturesearchdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-signaturesearchdata:<tag>

(see `bioconductor-signaturesearchdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-signaturesearchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signaturesearchdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signaturesearchdata
   :alt:   (downloads)
.. |docker_bioconductor-signaturesearchdata| image:: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata
.. _`bioconductor-signaturesearchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-signaturesearchdata";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signaturesearchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signaturesearchdata/README.html