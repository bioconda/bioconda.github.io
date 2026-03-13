:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igblast'
.. highlight: bash

igblast
=======

.. conda:recipe:: igblast
   :replaces_section_title:
   :noindex:

   A tool for analyzing immunoglobulin \(IG\) and T cell receptor \(TR\) sequences

   :homepage: http://www.ncbi.nlm.nih.gov/projects/igblast/
   :license: Public Domain and others
   :recipe: /`igblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast/meta.yaml>`_
   :links: biotools: :biotools:`igblast`

   


.. conda:package:: igblast

   |downloads_igblast| |docker_igblast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.21.0-1</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.17.1-1</code>,  <code>1.17.1-0</code>,  </span></summary>
      

      ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-1``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.17.1-1``,  ``1.17.1-0``,  ``1.15.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.4.0-6``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libsqlite: ``>=3.52.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncbi-vdb: ``>=2.9.6``
   :depends on ncbi-vdb: ``>=3.3.0,<4.0a0``
   :depends on perl: 

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

    pixi global install igblast

to add into an existing workspace instead, run::

    pixi add igblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igblast

Alternatively, to install into a new environment, run::

    conda create -n envname igblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igblast:<tag>

(see `igblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igblast| image:: https://img.shields.io/conda/dn/bioconda/igblast.svg?style=flat
   :target: https://anaconda.org/bioconda/igblast
   :alt:   (downloads)
.. |docker_igblast| image:: https://quay.io/repository/biocontainers/igblast/status
   :target: https://quay.io/repository/biocontainers/igblast
.. _`igblast/tags`: https://quay.io/repository/biocontainers/igblast?tab=tags


.. raw:: html

    <script>
        var package = "igblast";
        var versions = ["1.22.0","1.22.0","1.22.0","1.21.0","1.21.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast/README.html