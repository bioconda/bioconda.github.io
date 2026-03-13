:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastx'
.. highlight: bash

pyfastx
=======

.. conda:recipe:: pyfastx
   :replaces_section_title:
   :noindex:

   pyfastx is a python module for fast random access to sequences from plain and gzipped FASTA\/Q file.

   :homepage: https://github.com/lmdu/pyfastx
   :documentation: https://pyfastx.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`pyfastx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastx/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbaa368`, biotools: :biotools:`pyfastx`

   


.. conda:package:: pyfastx

   |downloads_pyfastx| |docker_pyfastx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-2</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.0-4</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  </span></summary>
      

      ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.0-3``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``0.9.1-0``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.16-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install pyfastx

to add into an existing workspace instead, run::

    pixi add pyfastx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyfastx

Alternatively, to install into a new environment, run::

    conda create -n envname pyfastx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyfastx:<tag>

(see `pyfastx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyfastx| image:: https://img.shields.io/conda/dn/bioconda/pyfastx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastx
   :alt:   (downloads)
.. |docker_pyfastx| image:: https://quay.io/repository/biocontainers/pyfastx/status
   :target: https://quay.io/repository/biocontainers/pyfastx
.. _`pyfastx/tags`: https://quay.io/repository/biocontainers/pyfastx?tab=tags


.. raw:: html

    <script>
        var package = "pyfastx";
        var versions = ["2.3.0","2.3.0","2.3.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastx/README.html