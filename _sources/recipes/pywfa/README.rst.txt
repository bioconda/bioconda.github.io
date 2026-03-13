:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pywfa'
.. highlight: bash

pywfa
=====

.. conda:recipe:: pywfa
   :replaces_section_title:
   :noindex:

   A python wrapper for wavefront alignment using WFA2\-lib.

   :homepage: https://github.com/kcleal/pywfa
   :license: MIT / MIT
   :recipe: /`pywfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywfa/meta.yaml>`_

   


.. conda:package:: pywfa

   |downloads_pywfa| |docker_pywfa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-4</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-2</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-2</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.5.1-4``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-2``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``

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

    pixi global install pywfa

to add into an existing workspace instead, run::

    pixi add pywfa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pywfa

Alternatively, to install into a new environment, run::

    conda create -n envname pywfa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pywfa:<tag>

(see `pywfa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pywfa| image:: https://img.shields.io/conda/dn/bioconda/pywfa.svg?style=flat
   :target: https://anaconda.org/bioconda/pywfa
   :alt:   (downloads)
.. |docker_pywfa| image:: https://quay.io/repository/biocontainers/pywfa/status
   :target: https://quay.io/repository/biocontainers/pywfa
.. _`pywfa/tags`: https://quay.io/repository/biocontainers/pywfa?tab=tags


.. raw:: html

    <script>
        var package = "pywfa";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywfa/README.html