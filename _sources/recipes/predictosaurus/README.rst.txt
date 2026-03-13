:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'predictosaurus'
.. highlight: bash

predictosaurus
==============

.. conda:recipe:: predictosaurus
   :replaces_section_title:
   :noindex:

   Predictosaurus is a command\-line tool designed for uncertainty\-aware haplotype\-based genomic variant effect prediction.

   :homepage: https://github.com/fxwiegand/predictosaurus
   :documentation: https://github.com/fxwiegand/predictosaurus/blob/v0.10.0/README.md
   
   :license: MIT / MIT
   :recipe: /`predictosaurus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predictosaurus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predictosaurus/meta.yaml>`_

   


.. conda:package:: predictosaurus

   |downloads_predictosaurus| |docker_predictosaurus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on openssl: ``>=3.5.5,<4.0a0``

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

    pixi global install predictosaurus

to add into an existing workspace instead, run::

    pixi add predictosaurus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install predictosaurus

Alternatively, to install into a new environment, run::

    conda create -n envname predictosaurus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/predictosaurus:<tag>

(see `predictosaurus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_predictosaurus| image:: https://img.shields.io/conda/dn/bioconda/predictosaurus.svg?style=flat
   :target: https://anaconda.org/bioconda/predictosaurus
   :alt:   (downloads)
.. |docker_predictosaurus| image:: https://quay.io/repository/biocontainers/predictosaurus/status
   :target: https://quay.io/repository/biocontainers/predictosaurus
.. _`predictosaurus/tags`: https://quay.io/repository/biocontainers/predictosaurus?tab=tags


.. raw:: html

    <script>
        var package = "predictosaurus";
        var versions = ["0.10.0","0.9.3","0.9.2","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/predictosaurus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/predictosaurus/README.html