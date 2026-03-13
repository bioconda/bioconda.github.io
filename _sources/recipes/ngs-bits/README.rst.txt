:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-bits'
.. highlight: bash

ngs-bits
========

.. conda:recipe:: ngs-bits
   :replaces_section_title:
   :noindex:

   Short\-read sequencing tools.

   :homepage: https://github.com/imgag/ngs-bits
   :license: MIT / MIT
   :recipe: /`ngs-bits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-bits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-bits/meta.yaml>`_

   


.. conda:package:: ngs-bits

   |downloads_ngs-bits| |docker_ngs-bits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2025_12-0</code>,  <code>2025_09-0</code>,  <code>2025_07-1</code>,  <code>2025_07-0</code>,  <code>2025_05-0</code>,  <code>2025_03-0</code>,  <code>2025_01-0</code>,  <code>2024_11-1</code>,  <code>2024_11-0</code>,  </span></summary>
      

      ``2025_12-0``,  ``2025_09-0``,  ``2025_07-1``,  ``2025_07-0``,  ``2025_05-0``,  ``2025_03-0``,  ``2025_01-0``,  ``2024_11-1``,  ``2024_11-0``,  ``2024_08-0``,  ``2024_07-0``,  ``2024_06-1``,  ``2024_06-0``,  ``2024_02-1``,  ``2024_02-0``,  ``2023_11-0``,  ``2023_09-0``,  ``2023_06-0``,  ``2023_02-2``,  ``2023_02-1``,  ``2023_02-0``,  ``2022_12-0``,  ``2022_11-0``,  ``2022_10-1``,  ``2022_10-0``,  ``2022_07-1``,  ``2022_07-0``,  ``2022_04-0``,  ``2021_12-2``,  ``2021_12-1``,  ``2021_12-0``,  ``2021_09-0``,  ``2021_06-0``,  ``2021_03-1``,  ``2021_03-0``,  ``2020_12-0``,  ``2020_09-0``,  ``2020_06-0``,  ``2020_03-0``,  ``2019_11-0``,  ``2019_09-0``,  ``2019_08-0``,  ``2019_07-0``,  ``2019_05-0``,  ``2019_04-0``,  ``2019_03-0``,  ``2018_11-2``,  ``2018_10-2``,  ``2018_06-2``,  ``2018_06-1``,  ``2018_04-0``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libxml2: ``>=2.13.9,<2.14.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on qt-main: ``>=5.15.15,<5.16.0a0``
   :depends on sysroot_linux-64: ``2.17.*``

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

    pixi global install ngs-bits

to add into an existing workspace instead, run::

    pixi add ngs-bits

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs-bits

Alternatively, to install into a new environment, run::

    conda create -n envname ngs-bits

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs-bits:<tag>

(see `ngs-bits/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs-bits| image:: https://img.shields.io/conda/dn/bioconda/ngs-bits.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-bits
   :alt:   (downloads)
.. |docker_ngs-bits| image:: https://quay.io/repository/biocontainers/ngs-bits/status
   :target: https://quay.io/repository/biocontainers/ngs-bits
.. _`ngs-bits/tags`: https://quay.io/repository/biocontainers/ngs-bits?tab=tags


.. raw:: html

    <script>
        var package = "ngs-bits";
        var versions = ["2025_12","2025_09","2025_07","2025_07","2025_05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-bits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-bits/README.html