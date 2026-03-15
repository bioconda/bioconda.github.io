:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openms-meta'
.. highlight: bash

openms-meta
===========

.. conda:recipe:: openms-meta
   :replaces_section_title:
   :noindex:

   OpenMS is an open\-source software C\+\+ library for LC\-MS data management and analyses. The openms\-meta package should not be installed. Please use one of its outputs libopenms\, openms \(\=tools\) or openms\-thirdparty.

   :homepage: https://github.com/OpenMS/OpenMS
   :documentation: https://openms.readthedocs.io/en/latest/index.html
   
   :license: BSD / BSD-3-Clause
   :recipe: /`openms-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta/meta.yaml>`_
   :links: biotools: :biotools:`openms`, usegalaxy-eu: :usegalaxy-eu:`openms_fileconverter`, doi: :doi:`10.1038/s41592-024-02197-7`

   


.. conda:package:: libopenms

   |downloads_libopenms| |docker_libopenms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.2.0-5</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``

      
      .. raw:: html

         </details>
      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on coin-or-cbc: ``>=2.10.12,<2.11.0a0``
   :depends on coin-or-cgl: ``>=0.60,<0.61.0a0``
   :depends on coin-or-clp: ``>=1.17,<1.18.0a0``
   :depends on coin-or-utils: ``>=2.11,<2.12.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libsvm: ``>=335,<400``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on qt6-main: ``>=6.7.3,<6.8.0a0``
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``
   :depends on yaml-cpp: ``>=0.8.0,<0.9.0a0``

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

    pixi global install libopenms

to add into an existing workspace instead, run::

    pixi add libopenms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libopenms

Alternatively, to install into a new environment, run::

    conda create -n envname libopenms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libopenms:<tag>

(see `libopenms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libopenms| image:: https://img.shields.io/conda/dn/bioconda/libopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/libopenms
   :alt:   (downloads)
.. |docker_libopenms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`libopenms/tags`: https://quay.io/repository/biocontainers/libopenms?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = ["3.5.0","3.4.1","3.4.1","3.4.0","3.4.0"];
    </script>


.. conda:package:: openms

   |downloads_openms| |docker_openms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.2.0-5</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on eigen: ``>=3.4.0,<3.5.0a0``
   :depends on libarrow: ``>=21.0.0,<21.1.0a0``
   :depends on libgcc: ``>=13``
   :depends on libopenms: ``3.5.0 h80c9f57_0``
   :depends on libparquet: ``>=21.0.0,<21.1.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libsvm: ``>=335,<400``
   :depends on qt6-main: ``>=6.7.3,<6.8.0a0``
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``

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

    pixi global install openms

to add into an existing workspace instead, run::

    pixi add openms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openms

Alternatively, to install into a new environment, run::

    conda create -n envname openms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openms:<tag>

(see `openms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openms| image:: https://img.shields.io/conda/dn/bioconda/openms.svg?style=flat
   :target: https://anaconda.org/bioconda/openms
   :alt:   (downloads)
.. |docker_openms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms/tags`: https://quay.io/repository/biocontainers/openms?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = ["3.5.0","3.4.1","3.4.1","3.4.0","3.4.0"];
    </script>


.. conda:package:: openms-meta

   |downloads_openms-meta| |docker_openms-meta|

   :versions:
      
      

      

      

   

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

    pixi global install openms-meta

to add into an existing workspace instead, run::

    pixi add openms-meta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openms-meta

Alternatively, to install into a new environment, run::

    conda create -n envname openms-meta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openms-meta:<tag>

(see `openms-meta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openms-meta| image:: https://img.shields.io/conda/dn/bioconda/openms-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-meta
   :alt:   (downloads)
.. |docker_openms-meta| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-meta/tags`: https://quay.io/repository/biocontainers/openms-meta?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = [];
    </script>


.. conda:package:: openms-thirdparty

   |downloads_openms-thirdparty| |docker_openms-thirdparty|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.2.0-5</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on comet-ms: ``2024011``
   :depends on gnuplot: 
   :depends on luciphor2: ``2020_04_03``
   :depends on msgf_plus: ``2024.03.26``
   :depends on openms: ``3.5.0 h1ce2723_0``
   :depends on percolator: ``3.7.1``
   :depends on r-gplots: 
   :depends on sage-proteomics: ``0.14.7``
   :depends on sirius-ms: ``>=6.1.0``
   :depends on thermorawfileparser: ``1.4.3``

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

    pixi global install openms-thirdparty

to add into an existing workspace instead, run::

    pixi add openms-thirdparty

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openms-thirdparty

Alternatively, to install into a new environment, run::

    conda create -n envname openms-thirdparty

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openms-thirdparty:<tag>

(see `openms-thirdparty/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openms-thirdparty| image:: https://img.shields.io/conda/dn/bioconda/openms-thirdparty.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-thirdparty
   :alt:   (downloads)
.. |docker_openms-thirdparty| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-thirdparty/tags`: https://quay.io/repository/biocontainers/openms-thirdparty?tab=tags


.. raw:: html

    <script>
        var package = "openms-meta";
        var versions = ["3.5.0","3.4.1","3.4.1","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openms-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openms-meta/README.html