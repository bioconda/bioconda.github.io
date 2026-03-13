:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocversion'
.. highlight: bash

bioconductor-biocversion
========================

.. conda:recipe:: bioconductor-biocversion
   :replaces_section_title:
   :noindex:

   Set the appropriate version of Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocVersion.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocversion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocversion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocversion/meta.yaml>`_

   This package provides repository information for the appropriate version of Bioconductor.


.. conda:package:: bioconductor-biocversion

   |downloads_bioconductor-biocversion| |docker_bioconductor-biocversion|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.22.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.1-0</code>,  <code>3.17.1-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.13.1-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  </span></summary>
      

      ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.1-0``,  ``3.17.1-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.13.1-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.1-0``,  ``3.9.0-1``,  ``3.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      

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

    pixi global install bioconductor-biocversion

to add into an existing workspace instead, run::

    pixi add bioconductor-biocversion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocversion

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocversion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocversion:<tag>

(see `bioconductor-biocversion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocversion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocversion.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocversion
   :alt:   (downloads)
.. |docker_bioconductor-biocversion| image:: https://quay.io/repository/biocontainers/bioconductor-biocversion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocversion
.. _`bioconductor-biocversion/tags`: https://quay.io/repository/biocontainers/bioconductor-biocversion?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocversion";
        var versions = ["3.22.0","3.20.0","3.18.1","3.17.1","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocversion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocversion/README.html