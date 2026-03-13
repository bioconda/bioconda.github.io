:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-interop'
.. highlight: bash

illumina-interop
================

.. conda:recipe:: illumina-interop
   :replaces_section_title:
   :noindex:

   The Illumina InterOp libraries are a set of common routines used for reading and writing InterOp metric files. These metric files are binary files produced during a run providing detailed statistics about a run. In a few cases\, the metric files are produced after a run during secondary analysis \(index metrics\) or for faster display of a subset of the original data \(collapsed quality scores\).

   :homepage: http://illumina.github.io/interop/index.html
   :developer docs: https://github.com/Illumina/interop
   :license: GPL / GPL-3.0-only
   :recipe: /`illumina-interop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-interop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-interop/meta.yaml>`_

   


.. conda:package:: illumina-interop

   |downloads_illumina-interop| |docker_illumina-interop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-2``,  ``1.2.4-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.28-0``,  ``1.1.27-1``,  ``1.1.27-0``,  ``1.1.25-1``,  ``1.1.25-0``,  ``1.1.24-0``,  ``1.1.23-1``,  ``1.1.23-0``,  ``1.1.22-0``,  ``1.1.21-1``,  ``1.1.21-0``,  ``1.1.20-0``,  ``1.1.19-0``,  ``1.1.18-0``,  ``1.1.16-0``,  ``1.1.15-0``,  ``1.1.14-0``,  ``1.1.12-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.4-3``,  ``1.1.4-0``,  ``1.0.25-1``,  ``1.0.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install illumina-interop

to add into an existing workspace instead, run::

    pixi add illumina-interop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install illumina-interop

Alternatively, to install into a new environment, run::

    conda create -n envname illumina-interop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/illumina-interop:<tag>

(see `illumina-interop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_illumina-interop| image:: https://img.shields.io/conda/dn/bioconda/illumina-interop.svg?style=flat
   :target: https://anaconda.org/bioconda/illumina-interop
   :alt:   (downloads)
.. |docker_illumina-interop| image:: https://quay.io/repository/biocontainers/illumina-interop/status
   :target: https://quay.io/repository/biocontainers/illumina-interop
.. _`illumina-interop/tags`: https://quay.io/repository/biocontainers/illumina-interop?tab=tags


.. raw:: html

    <script>
        var package = "illumina-interop";
        var versions = ["1.9.0","1.8.0","1.7.0","1.5.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-interop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-interop/README.html