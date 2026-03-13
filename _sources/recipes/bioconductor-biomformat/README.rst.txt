:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomformat'
.. highlight: bash

bioconductor-biomformat
=======================

.. conda:recipe:: bioconductor-biomformat
   :replaces_section_title:
   :noindex:

   An interface package for the BIOM file format

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biomformat.html
   :license: GPL-2
   :recipe: /`bioconductor-biomformat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat/meta.yaml>`_
   :links: biotools: :biotools:`biomformat`, doi: :doi:`10.1038/nmeth.3252`

   This is an R package for interfacing with the BIOM format. This package includes basic tools for reading biom\-format files\, accessing and subsetting data tables from a biom object \(which is more complex than a single table\)\, as well as limited support for writing a biom\-object back to a biom\-format file. The design of this API is intended to match the python API and other tools included with the biom\-format project\, but with a decidedly \"R flavor\" that should be familiar to R users. This includes S4 classes and methods\, as well as extensions of common core functions\/methods.


.. conda:package:: bioconductor-biomformat

   |downloads_bioconductor-biomformat| |docker_bioconductor-biomformat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-jsonlite: ``>=0.9.16``
   :depends on r-matrix: ``>=1.2``
   :depends on r-plyr: ``>=1.8``

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

    pixi global install bioconductor-biomformat

to add into an existing workspace instead, run::

    pixi add bioconductor-biomformat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biomformat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biomformat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biomformat:<tag>

(see `bioconductor-biomformat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biomformat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomformat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomformat
   :alt:   (downloads)
.. |docker_bioconductor-biomformat| image:: https://quay.io/repository/biocontainers/bioconductor-biomformat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomformat
.. _`bioconductor-biomformat/tags`: https://quay.io/repository/biocontainers/bioconductor-biomformat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomformat";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomformat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomformat/README.html