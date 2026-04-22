:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignoth'
.. highlight: bash

alignoth
========

.. conda:recipe:: alignoth
   :replaces_section_title:
   :noindex:

   A tool for creating alignment plots from bam files.

   :homepage: https://alignoth.github.io
   :documentation: https://github.com/alignoth/alignoth/blob/v1.5.1/README.md
   
   :developer docs: https://github.com/alignoth/alignoth
   :license: MIT / MIT
   :recipe: /`alignoth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignoth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignoth/meta.yaml>`_

   


.. conda:package:: alignoth

   |downloads_alignoth| |docker_alignoth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.16.4-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.1-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.2-2``,  ``0.8.2-0``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libcurl: ``>=8.19.0,<9.0a0``
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

    pixi global install alignoth

to add into an existing workspace instead, run::

    pixi add alignoth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alignoth

Alternatively, to install into a new environment, run::

    conda create -n envname alignoth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alignoth:<tag>

(see `alignoth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alignoth| image:: https://img.shields.io/conda/dn/bioconda/alignoth.svg?style=flat
   :target: https://anaconda.org/bioconda/alignoth
   :alt:   (downloads)
.. |docker_alignoth| image:: https://quay.io/repository/biocontainers/alignoth/status
   :target: https://quay.io/repository/biocontainers/alignoth
.. _`alignoth/tags`: https://quay.io/repository/biocontainers/alignoth?tab=tags


.. raw:: html

    <script>
        var package = "alignoth";
        var versions = ["1.5.1","1.5.0","1.4.6","1.4.5","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignoth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignoth/README.html