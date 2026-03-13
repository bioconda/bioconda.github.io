:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htsbox'
.. highlight: bash

htsbox
======

.. conda:recipe:: htsbox
   :replaces_section_title:
   :noindex:

   HTSbox is a fork of early HTSlib. It is a collection of small experimental tools manipulating HTS\-related files.

   :homepage: https://github.com/lh3/htsbox
   :license: MIT / MIT
   :recipe: /`htsbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsbox/meta.yaml>`_

   


.. conda:package:: htsbox

   |downloads_htsbox| |docker_htsbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r350-0</code>,  <code>r346-6</code>,  <code>r346-5</code>,  <code>r346-4</code>,  <code>r346-3</code>,  <code>r346-2</code>,  <code>r346-1</code>,  <code>r346-0</code>,  <code>r340-2</code>,  </span></summary>
      

      ``r350-0``,  ``r346-6``,  ``r346-5``,  ``r346-4``,  ``r346-3``,  ``r346-2``,  ``r346-1``,  ``r346-0``,  ``r340-2``,  ``r340-1``,  ``r340-0``,  ``r327-0``,  ``r315-5``,  ``r315-4``,  ``r315-3``,  ``r315-2``,  ``r315-1``,  ``r315-0``,  ``r312-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install htsbox

to add into an existing workspace instead, run::

    pixi add htsbox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install htsbox

Alternatively, to install into a new environment, run::

    conda create -n envname htsbox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/htsbox:<tag>

(see `htsbox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_htsbox| image:: https://img.shields.io/conda/dn/bioconda/htsbox.svg?style=flat
   :target: https://anaconda.org/bioconda/htsbox
   :alt:   (downloads)
.. |docker_htsbox| image:: https://quay.io/repository/biocontainers/htsbox/status
   :target: https://quay.io/repository/biocontainers/htsbox
.. _`htsbox/tags`: https://quay.io/repository/biocontainers/htsbox?tab=tags


.. raw:: html

    <script>
        var package = "htsbox";
        var versions = ["r350","r346","r346","r346","r346"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsbox/README.html