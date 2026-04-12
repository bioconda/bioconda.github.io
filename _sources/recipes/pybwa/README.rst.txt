:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybwa'
.. highlight: bash

pybwa
=====

.. conda:recipe:: pybwa
   :replaces_section_title:
   :noindex:

   Pybwa is a python module that makes it easy to align sequence data. It is a lightweight wrapper of bwa.

   :homepage: https://github.com/fulcrumgenomics/pybwa
   :documentation: https://pybwa.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`pybwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybwa/meta.yaml>`_

   


.. conda:package:: pybwa

   |downloads_pybwa| |docker_pybwa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.2-0</code>,  <code>1.5.0-0</code>,  <code>1.4.8-0</code>,  <code>1.4.7-1</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.8-0``,  ``1.4.7-1``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on fgpyo: ``>=0.7.0``
   :depends on libcurl: ``>=8.14.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.3,<4.0a0``
   :depends on pysam: ``>=0.22.1``
   :depends on pysam: ``>=0.23.3,<0.24.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on typing-extensions: ``>=3.7.4``

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

    pixi global install pybwa

to add into an existing workspace instead, run::

    pixi add pybwa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybwa

Alternatively, to install into a new environment, run::

    conda create -n envname pybwa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybwa:<tag>

(see `pybwa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybwa| image:: https://img.shields.io/conda/dn/bioconda/pybwa.svg?style=flat
   :target: https://anaconda.org/bioconda/pybwa
   :alt:   (downloads)
.. |docker_pybwa| image:: https://quay.io/repository/biocontainers/pybwa/status
   :target: https://quay.io/repository/biocontainers/pybwa
.. _`pybwa/tags`: https://quay.io/repository/biocontainers/pybwa?tab=tags


.. raw:: html

    <script>
        var package = "pybwa";
        var versions = ["2.2.0","2.1.0","2.0.1","2.0.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybwa/README.html