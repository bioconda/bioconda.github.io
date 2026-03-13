:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhmmer'
.. highlight: bash

pyhmmer
=======

.. conda:recipe:: pyhmmer
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to HMMER3.

   :homepage: https://github.com/althonos/pyhmmer
   :documentation: https://pyhmmer.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pyhmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad214`, biotools: :biotools:`pyhmmer`

   


.. conda:package:: pyhmmer

   |downloads_pyhmmer| |docker_pyhmmer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-1</code>,  <code>0.12.0-0</code>,  <code>0.11.4-0</code>,  <code>0.11.3-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-2</code>,  <code>0.11.1-1</code>,  <code>0.11.1-0</code>,  <code>0.11.0-1</code>,  </span></summary>
      

      ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-2``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.15-1``,  ``0.10.15-0``,  ``0.10.14-1``,  ``0.10.14-0``,  ``0.10.13-0``,  ``0.10.12-1``,  ``0.10.12-0``,  ``0.10.11-0``,  ``0.10.10-1``,  ``0.10.10-0``,  ``0.10.9-0``,  ``0.10.8-0``,  ``0.10.7-0``,  ``0.10.6-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-4``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-3``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.11-1``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on psutil: ``>=6.0,<8.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pyhmmer

to add into an existing workspace instead, run::

    pixi add pyhmmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyhmmer

Alternatively, to install into a new environment, run::

    conda create -n envname pyhmmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyhmmer:<tag>

(see `pyhmmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyhmmer| image:: https://img.shields.io/conda/dn/bioconda/pyhmmer.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhmmer
   :alt:   (downloads)
.. |docker_pyhmmer| image:: https://quay.io/repository/biocontainers/pyhmmer/status
   :target: https://quay.io/repository/biocontainers/pyhmmer
.. _`pyhmmer/tags`: https://quay.io/repository/biocontainers/pyhmmer?tab=tags


.. raw:: html

    <script>
        var package = "pyhmmer";
        var versions = ["0.12.0","0.12.0","0.11.4","0.11.3","0.11.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhmmer/README.html