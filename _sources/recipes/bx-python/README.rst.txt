:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bx-python'
.. highlight: bash

bx-python
=========

.. conda:recipe:: bx-python
   :replaces_section_title:
   :noindex:

   Tools for manipulating biological data\, particularly multiple sequence alignments.

   :homepage: https://github.com/bxlab/bx-python
   :documentation: https://bx-python.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`bx-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bx-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bx-python/meta.yaml>`_
   :links: biotools: :biotools:`bx-python`

   


.. conda:package:: bx-python

   |downloads_bx-python| |docker_bx-python|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.0-1</code>,  <code>0.14.0-0</code>,  <code>0.13.0-2</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-3</code>,  <code>0.11.0-2</code>,  <code>0.11.0-1</code>,  </span></summary>
      

      ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-3``,  ``0.11.0-2``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.13-1``,  ``0.8.13-0``,  ``0.8.12-0``,  ``0.8.11-1``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-2``,  ``0.8.9-1``,  ``0.8.9-0``,  ``0.8.8-1``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.25``
   :depends on pyparsing: 
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

    pixi global install bx-python

to add into an existing workspace instead, run::

    pixi add bx-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bx-python

Alternatively, to install into a new environment, run::

    conda create -n envname bx-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bx-python:<tag>

(see `bx-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bx-python| image:: https://img.shields.io/conda/dn/bioconda/bx-python.svg?style=flat
   :target: https://anaconda.org/bioconda/bx-python
   :alt:   (downloads)
.. |docker_bx-python| image:: https://quay.io/repository/biocontainers/bx-python/status
   :target: https://quay.io/repository/biocontainers/bx-python
.. _`bx-python/tags`: https://quay.io/repository/biocontainers/bx-python?tab=tags


.. raw:: html

    <script>
        var package = "bx-python";
        var versions = ["0.14.0","0.14.0","0.13.0","0.13.0","0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bx-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bx-python/README.html