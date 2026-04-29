:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopenms'
.. highlight: bash

pyopenms
========

.. conda:recipe:: pyopenms
   :replaces_section_title:
   :noindex:

   Python bindings for OpenMS\, an open\-source software C\+\+ library for LC\-MS data management and analyses.

   :homepage: https://github.com/OpenMS/OpenMS
   :documentation: https://openms.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pyopenms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms/meta.yaml>`_
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1038/s41592-024-02197-7`

   


.. conda:package:: pyopenms

   |downloads_pyopenms| |docker_pyopenms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.1-3</code>,  <code>3.4.1-2</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.0-5</code>,  <code>3.3.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``3.4.1-3``,  ``3.4.1-2``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-5``,  ``3.3.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.9.1-3``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on eigen: ``>=3.4.0,<3.5.0a0``
   :depends on libgcc: ``>=14``
   :depends on libopenms: ``3.4.1``
   :depends on libopenms: ``3.4.1.*``
   :depends on libstdcxx: ``>=14``
   :depends on libsvm: ``>=335,<400``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.0``
   :depends on pandas: 
   :depends on pip: ``<25.3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on qt6-main: ``>=6.7.3,<6.8.0a0``
   :depends on setuptools: ``<81``
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

    pixi global install pyopenms

to add into an existing workspace instead, run::

    pixi add pyopenms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyopenms

Alternatively, to install into a new environment, run::

    conda create -n envname pyopenms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyopenms:<tag>

(see `pyopenms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyopenms| image:: https://img.shields.io/conda/dn/bioconda/pyopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopenms
   :alt:   (downloads)
.. |docker_pyopenms| image:: https://quay.io/repository/biocontainers/pyopenms/status
   :target: https://quay.io/repository/biocontainers/pyopenms
.. _`pyopenms/tags`: https://quay.io/repository/biocontainers/pyopenms?tab=tags


.. raw:: html

    <script>
        var package = "pyopenms";
        var versions = ["3.4.1","3.4.1","3.4.1","3.4.1","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopenms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopenms/README.html