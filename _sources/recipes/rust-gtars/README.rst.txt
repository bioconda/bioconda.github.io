:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-gtars'
.. highlight: bash

rust-gtars
==========

.. conda:recipe:: rust-gtars
   :replaces_section_title:
   :noindex:

   Performance\-critical tools to manipulate\, analyze\, and process genomic interval data.

   :homepage: https://github.com/databio/gtars
   :documentation: https://docs.rs/crate/gtars/0.7.0
   
   :license: BSD / BSD-2-Clause
   :recipe: /`rust-gtars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-gtars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-gtars/meta.yaml>`_

   


.. conda:package:: rust-gtars

   |downloads_rust-gtars| |docker_rust-gtars|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libsqlite: ``>=3.51.2,<4.0a0``
   :depends on openssl: ``>=3.5.5,<4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install rust-gtars

to add into an existing workspace instead, run::

    pixi add rust-gtars

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rust-gtars

Alternatively, to install into a new environment, run::

    conda create -n envname rust-gtars

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rust-gtars:<tag>

(see `rust-gtars/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rust-gtars| image:: https://img.shields.io/conda/dn/bioconda/rust-gtars.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-gtars
   :alt:   (downloads)
.. |docker_rust-gtars| image:: https://quay.io/repository/biocontainers/rust-gtars/status
   :target: https://quay.io/repository/biocontainers/rust-gtars
.. _`rust-gtars/tags`: https://quay.io/repository/biocontainers/rust-gtars?tab=tags


.. raw:: html

    <script>
        var package = "rust-gtars";
        var versions = ["0.7.0","0.6.0","0.5.3","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-gtars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-gtars/README.html