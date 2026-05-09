:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biscuit'
.. highlight: bash

biscuit
=======

.. conda:recipe:: biscuit
   :replaces_section_title:
   :noindex:

   A utility for analyzing sodium bisulfite conversion\-based DNA methylation\/modification data.

   :homepage: https://github.com/huishenlab/biscuit
   :documentation: https://huishenlab.github.io/biscuit
   
   :license: MIT / MIT
   :recipe: /`biscuit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscuit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biscuit/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkae097`, biotools: :biotools:`biscuit`

   


.. conda:package:: biscuit

   |downloads_biscuit| |docker_biscuit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0.20260217-0</code>,  <code>1.7.1.20250908-0</code>,  <code>1.7.0.20250512-0</code>,  <code>1.6.1.20250415-0</code>,  <code>1.6.0.20241216-1</code>,  <code>1.6.0.20241216-0</code>,  <code>1.5.0.20240506-1</code>,  <code>1.5.0.20240506-0</code>,  <code>1.4.0.20240108-0</code>,  </span></summary>
      

      ``1.8.0.20260217-0``,  ``1.7.1.20250908-0``,  ``1.7.0.20250512-0``,  ``1.6.1.20250415-0``,  ``1.6.0.20241216-1``,  ``1.6.0.20241216-0``,  ``1.5.0.20240506-1``,  ``1.5.0.20240506-0``,  ``1.4.0.20240108-0``,  ``1.3.0.20231027-0``,  ``1.2.1.20230601-2``,  ``1.2.1.20230601-0``,  ``1.2.0.20230130-2``,  ``1.2.0.20230130-1``,  ``1.2.0.20230130-0``,  ``1.1.0.20220707-1``,  ``1.1.0.20220707-0``,  ``1.0.2.20220113-1``,  ``1.0.2.20220113-0``,  ``1.0.1.20211018-1``,  ``1.0.1.20211018-0``,  ``1.0.0.20210917-0``,  ``0.3.16.20200420-4``,  ``0.3.16.20200420-3``,  ``0.3.16.20200420-2``,  ``0.3.16.20200420-1``,  ``0.3.16.20200420-0``,  ``0.3.15.20200318-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on perl: 
   :depends on pthread-stubs: 

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

    pixi global install biscuit

to add into an existing workspace instead, run::

    pixi add biscuit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biscuit

Alternatively, to install into a new environment, run::

    conda create -n envname biscuit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biscuit:<tag>

(see `biscuit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biscuit| image:: https://img.shields.io/conda/dn/bioconda/biscuit.svg?style=flat
   :target: https://anaconda.org/bioconda/biscuit
   :alt:   (downloads)
.. |docker_biscuit| image:: https://quay.io/repository/biocontainers/biscuit/status
   :target: https://quay.io/repository/biocontainers/biscuit
.. _`biscuit/tags`: https://quay.io/repository/biocontainers/biscuit?tab=tags


.. raw:: html

    <script>
        var package = "biscuit";
        var versions = ["1.8.0.20260217","1.7.1.20250908","1.7.0.20250512","1.6.1.20250415","1.6.0.20241216"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biscuit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biscuit/README.html