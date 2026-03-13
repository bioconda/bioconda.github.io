:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clust'
.. highlight: bash

clust
=====

.. conda:recipe:: clust
   :replaces_section_title:
   :noindex:

   Optimised consensus clustering of multiple heterogeneous datasets.

   :homepage: https://github.com/baselabujamous/clust
   :license: LGPL / LGPL-3.0
   :recipe: /`clust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clust/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1536-8`

   


.. conda:package:: clust

   |downloads_clust| |docker_clust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.12-0</code>,  <code>1.10.10-0</code>,  <code>1.10.8-0</code>,  <code>1.10.7-0</code>,  <code>1.8.10-0</code>,  <code>1.8.9-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.17.0-0``,  ``1.12.0-0``,  ``1.10.12-0``,  ``1.10.10-0``,  ``1.10.8-0``,  ``1.10.7-0``,  ``1.8.10-0``,  ``1.8.9-0``,  ``1.8.7-0``,  ``1.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on portalocker: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: 

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

    pixi global install clust

to add into an existing workspace instead, run::

    pixi add clust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clust

Alternatively, to install into a new environment, run::

    conda create -n envname clust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clust:<tag>

(see `clust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clust| image:: https://img.shields.io/conda/dn/bioconda/clust.svg?style=flat
   :target: https://anaconda.org/bioconda/clust
   :alt:   (downloads)
.. |docker_clust| image:: https://quay.io/repository/biocontainers/clust/status
   :target: https://quay.io/repository/biocontainers/clust
.. _`clust/tags`: https://quay.io/repository/biocontainers/clust?tab=tags


.. raw:: html

    <script>
        var package = "clust";
        var versions = ["1.18.0","1.17.0","1.12.0","1.10.12","1.10.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clust/README.html