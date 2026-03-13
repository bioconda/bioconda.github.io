:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-oncopharmadb'
.. highlight: bash

r-oncopharmadb
==============

.. conda:recipe:: r-oncopharmadb
   :replaces_section_title:
   :noindex:

   Targeted and non\-targeted anticancer drugs and drug regimens

   :homepage: https://github.com/sigven/oncoPharmaDB
   :license: MIT / MIT
   :recipe: /`r-oncopharmadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oncopharmadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oncopharmadb/meta.yaml>`_

   


.. conda:package:: r-oncopharmadb

   |downloads_r-oncopharmadb| |docker_r-oncopharmadb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.7-0</code>,  <code>1.9.2-0</code>,  <code>1.8.7-1</code>,  <code>1.8.7-0</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.7.0-0</code>,  <code>1.5.1-0</code>,  <code>1.4.6-0</code>,  </span></summary>
      

      ``1.9.7-0``,  ``1.9.2-0``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.0-0``,  ``1.5.1-0``,  ``1.4.6-0``,  ``1.4.4-0``,  ``1.3.7-0``,  ``0.0.1-1``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-googledrive: 
   :depends on r-lgr: 
   :depends on r-magrittr: 
   :depends on r-rlang: 
   :depends on r-stringr: 
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

    pixi global install r-oncopharmadb

to add into an existing workspace instead, run::

    pixi add r-oncopharmadb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-oncopharmadb

Alternatively, to install into a new environment, run::

    conda create -n envname r-oncopharmadb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-oncopharmadb:<tag>

(see `r-oncopharmadb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-oncopharmadb| image:: https://img.shields.io/conda/dn/bioconda/r-oncopharmadb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-oncopharmadb
   :alt:   (downloads)
.. |docker_r-oncopharmadb| image:: https://quay.io/repository/biocontainers/r-oncopharmadb/status
   :target: https://quay.io/repository/biocontainers/r-oncopharmadb
.. _`r-oncopharmadb/tags`: https://quay.io/repository/biocontainers/r-oncopharmadb?tab=tags


.. raw:: html

    <script>
        var package = "r-oncopharmadb";
        var versions = ["1.9.7","1.9.2","1.8.7","1.8.7","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-oncopharmadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-oncopharmadb/README.html