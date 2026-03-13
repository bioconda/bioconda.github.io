:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annonars'
.. highlight: bash

annonars
========

.. conda:recipe:: annonars
   :replaces_section_title:
   :noindex:

   Genome annotation based on Rust and RocksDB.

   :homepage: https://github.com/varfish-org/annonars
   :documentation: https://github.com/varfish-org/annonars/blob/v0.44.1/README.md
   
   :license: Apache-2.0
   :recipe: /`annonars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars/meta.yaml>`_

   


.. conda:package:: annonars

   |downloads_annonars| |docker_annonars|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.44.1-0</code>,  <code>0.44.0-0</code>,  <code>0.41.0-0</code>,  <code>0.40.0-0</code>,  <code>0.39.0-0</code>,  <code>0.38.0-0</code>,  <code>0.37.0-0</code>,  <code>0.36.2-0</code>,  <code>0.36.1-1</code>,  </span></summary>
      

      ``0.44.1-0``,  ``0.44.0-0``,  ``0.41.0-0``,  ``0.40.0-0``,  ``0.39.0-0``,  ``0.38.0-0``,  ``0.37.0-0``,  ``0.36.2-0``,  ``0.36.1-1``,  ``0.36.1-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.1-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.33.0-0``,  ``0.32.0-0``,  ``0.31.2-0``,  ``0.31.1-0``,  ``0.31.0-0``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.4-0``,  ``0.29.3-0``,  ``0.29.2-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.5-0``,  ``0.24.4-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.22.0-0``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.1-0``,  ``0.13.0-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.4-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libprotobuf: ``>=5.27.5,<5.27.6.0a0``
   :depends on libsqlite: ``>=3.50.4,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.4,<4.0a0``
   :depends on sqlite: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install annonars

to add into an existing workspace instead, run::

    pixi add annonars

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install annonars

Alternatively, to install into a new environment, run::

    conda create -n envname annonars

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/annonars:<tag>

(see `annonars/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_annonars| image:: https://img.shields.io/conda/dn/bioconda/annonars.svg?style=flat
   :target: https://anaconda.org/bioconda/annonars
   :alt:   (downloads)
.. |docker_annonars| image:: https://quay.io/repository/biocontainers/annonars/status
   :target: https://quay.io/repository/biocontainers/annonars
.. _`annonars/tags`: https://quay.io/repository/biocontainers/annonars?tab=tags


.. raw:: html

    <script>
        var package = "annonars";
        var versions = ["0.44.1","0.44.0","0.41.0","0.40.0","0.39.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annonars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annonars/README.html