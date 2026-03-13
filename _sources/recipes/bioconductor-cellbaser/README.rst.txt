:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbaser'
.. highlight: bash

bioconductor-cellbaser
======================

.. conda:recipe:: bioconductor-cellbaser
   :replaces_section_title:
   :noindex:

   Querying annotation data from the high performance Cellbase web

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellbaseR.html
   :license: Apache License (== 2.0)
   :recipe: /`bioconductor-cellbaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser/meta.yaml>`_

   This R package makes use of the exhaustive RESTful Web service API that has been implemented for the Cellabase database. It enable researchers to query and obtain a wealth of biological information from a single database saving a lot of time. Another benefit is that researchers can easily make queries about different biological topics and link all this information together as all information is integrated.


.. conda:package:: bioconductor-cellbaser

   |downloads_bioconductor-cellbaser| |docker_bioconductor-cellbaser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-pbapply: 
   :depends on r-r.utils: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-cellbaser

to add into an existing workspace instead, run::

    pixi add bioconductor-cellbaser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellbaser

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellbaser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellbaser:<tag>

(see `bioconductor-cellbaser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellbaser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbaser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbaser
   :alt:   (downloads)
.. |docker_bioconductor-cellbaser| image:: https://quay.io/repository/biocontainers/bioconductor-cellbaser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbaser
.. _`bioconductor-cellbaser/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbaser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellbaser";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html