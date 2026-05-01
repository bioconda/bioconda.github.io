:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expansionhunter'
.. highlight: bash

expansionhunter
===============

.. conda:recipe:: expansionhunter
   :replaces_section_title:
   :noindex:

   A tool for estimating repeat sizes.

   :homepage: https://github.com/Illumina/ExpansionHunter
   :license: APACHE / Apache-2.0
   :recipe: /`expansionhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter/meta.yaml>`_

   


.. conda:package:: expansionhunter

   |downloads_expansionhunter| |docker_expansionhunter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.0-5</code>,  <code>5.0.0-4</code>,  <code>5.0.0-3</code>,  <code>5.0.0-2</code>,  <code>5.0.0-1</code>,  <code>5.0.0-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>3.2.2-1</code>,  </span></summary>
      

      ``5.0.0-5``,  ``5.0.0-4``,  ``5.0.0-3``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on abseil-cpp: ``>=20210324.2,<20210324.3.0a0``
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on fmt: ``>=10.2.1,<11.0a0``
   :depends on gtest: ``>=1.17.0,<1.17.1.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on spdlog: ``>=1.14.1,<1.15.0a0``

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

    pixi global install expansionhunter

to add into an existing workspace instead, run::

    pixi add expansionhunter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install expansionhunter

Alternatively, to install into a new environment, run::

    conda create -n envname expansionhunter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/expansionhunter:<tag>

(see `expansionhunter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_expansionhunter| image:: https://img.shields.io/conda/dn/bioconda/expansionhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/expansionhunter
   :alt:   (downloads)
.. |docker_expansionhunter| image:: https://quay.io/repository/biocontainers/expansionhunter/status
   :target: https://quay.io/repository/biocontainers/expansionhunter
.. _`expansionhunter/tags`: https://quay.io/repository/biocontainers/expansionhunter?tab=tags


.. raw:: html

    <script>
        var package = "expansionhunter";
        var versions = ["5.0.0","5.0.0","5.0.0","5.0.0","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expansionhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expansionhunter/README.html