:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedlite'
.. highlight: bash

pybedlite
=========

.. conda:recipe:: pybedlite
   :replaces_section_title:
   :noindex:

   Lightweight python classes for interfacing with bed intervals.

   :homepage: https://github.com/fulcrumgenomics/pybedlite
   :documentation: https://pybedlite.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`pybedlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedlite/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.11223166`

   


.. conda:package:: pybedlite

   |downloads_pybedlite| |docker_pybedlite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-1``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: ``>=23.0.0,<24``
   :depends on python: ``>=3.9,<4.0``
   :depends on superintervals: ``>=0.2.10,<0.3.0``

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

    pixi global install pybedlite

to add into an existing workspace instead, run::

    pixi add pybedlite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybedlite

Alternatively, to install into a new environment, run::

    conda create -n envname pybedlite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybedlite:<tag>

(see `pybedlite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybedlite| image:: https://img.shields.io/conda/dn/bioconda/pybedlite.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedlite
   :alt:   (downloads)
.. |docker_pybedlite| image:: https://quay.io/repository/biocontainers/pybedlite/status
   :target: https://quay.io/repository/biocontainers/pybedlite
.. _`pybedlite/tags`: https://quay.io/repository/biocontainers/pybedlite?tab=tags


.. raw:: html

    <script>
        var package = "pybedlite";
        var versions = ["1.1.0","1.1.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedlite/README.html