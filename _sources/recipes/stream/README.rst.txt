:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stream'
.. highlight: bash

stream
======

.. conda:recipe:: stream
   :replaces_section_title:
   :noindex:

   STREAM\-Single\-cell Trajectories Reconstruction\, Exploration And Mapping

   :homepage: https://github.com/pinellolab/STREAM
   :license: AGPL-3
   :recipe: /`stream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream/meta.yaml>`_

   


.. conda:package:: stream

   |downloads_stream| |docker_stream|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-0</code>,  <code>1.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.9-3</code>,  <code>0.3.9-2</code>,  <code>0.3.9-1</code>,  <code>0.3.9-0</code>,  <code>0.3.8-0</code>,  </span></summary>
      

      ``1.1-0``,  ``1.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.9-3``,  ``0.3.9-2``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on gunicorn: 
   :depends on matplotlib-base: ``>=3.2``
   :depends on networkx: ``2.1.*``
   :depends on numpy: 
   :depends on plotly: 
   :depends on python: ``>=3``
   :depends on python-slugify: 
   :depends on r-base: ``3.6.*``
   :depends on r-devtools: 
   :depends on r-distutils: 
   :depends on r-elpigraph.r: 
   :depends on r-essentials: 
   :depends on r-igraph: 
   :depends on r-kernsmooth: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-vgam: 
   :depends on r-xml: 
   :depends on rpy2: ``2.9.*``
   :depends on scikit-learn: ``>=0.23``
   :depends on scipy: 
   :depends on seaborn: 
   :depends on shapely: 
   :depends on statsmodels: 
   :depends on umap-learn: 
   :depends on unzip: 
   :depends on zip: 

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

    pixi global install stream

to add into an existing workspace instead, run::

    pixi add stream

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stream

Alternatively, to install into a new environment, run::

    conda create -n envname stream

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stream:<tag>

(see `stream/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stream| image:: https://img.shields.io/conda/dn/bioconda/stream.svg?style=flat
   :target: https://anaconda.org/bioconda/stream
   :alt:   (downloads)
.. |docker_stream| image:: https://quay.io/repository/biocontainers/stream/status
   :target: https://quay.io/repository/biocontainers/stream
.. _`stream/tags`: https://quay.io/repository/biocontainers/stream?tab=tags


.. raw:: html

    <script>
        var package = "stream";
        var versions = ["1.1","1.0","0.4.1","0.4.0","0.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stream/README.html