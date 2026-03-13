:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsearch'
.. highlight: bash

gsearch
=======

.. conda:recipe:: gsearch
   :replaces_section_title:
   :noindex:

   gsearch is an ultra\-fast and scalable microbial genome search program based on MinHash\-like metrics and graph\-based approximate nearest neighbor search

   :homepage: https://github.com/jean-pierreBoth/gsearch
   :license: MIT
   :recipe: /`gsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsearch/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkae609`

   


.. conda:package:: gsearch

   |downloads_gsearch| |docker_gsearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-0</code>,  </span></summary>
      

      ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-6``,  ``0.1.2-5``,  ``0.1.2-0``,  ``0.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openblas: 
   :depends on openssl: ``>=3.6.0,<4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install gsearch

to add into an existing workspace instead, run::

    pixi add gsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gsearch

Alternatively, to install into a new environment, run::

    conda create -n envname gsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gsearch:<tag>

(see `gsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gsearch| image:: https://img.shields.io/conda/dn/bioconda/gsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/gsearch
   :alt:   (downloads)
.. |docker_gsearch| image:: https://quay.io/repository/biocontainers/gsearch/status
   :target: https://quay.io/repository/biocontainers/gsearch
.. _`gsearch/tags`: https://quay.io/repository/biocontainers/gsearch?tab=tags


.. raw:: html

    <script>
        var package = "gsearch";
        var versions = ["0.3.4","0.3.3","0.3.2","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsearch/README.html