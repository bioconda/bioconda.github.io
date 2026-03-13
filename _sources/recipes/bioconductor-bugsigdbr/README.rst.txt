:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bugsigdbr'
.. highlight: bash

bioconductor-bugsigdbr
======================

.. conda:recipe:: bioconductor-bugsigdbr
   :replaces_section_title:
   :noindex:

   R\-side access to published microbial signatures from BugSigDB

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bugsigdbr.html
   :license: GPL-3
   :recipe: /`bioconductor-bugsigdbr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bugsigdbr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bugsigdbr/meta.yaml>`_

   The bugsigdbr package implements convenient access to bugsigdb.org from within R\/Bioconductor. The goal of the package is to facilitate import of BugSigDB data into R\/Bioconductor\, provide utilities for extracting microbe signatures\, and enable export of the extracted signatures to plain text files in standard file formats such as GMT.


.. conda:package:: bioconductor-bugsigdbr

   |downloads_bioconductor-bugsigdbr| |docker_bioconductor-bugsigdbr|

   :versions:
      
      

      ``1.16.2-0``,  ``1.12.0-0``,  ``1.8.1-0``,  ``1.6.2-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-vroom: 

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

    pixi global install bioconductor-bugsigdbr

to add into an existing workspace instead, run::

    pixi add bioconductor-bugsigdbr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bugsigdbr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bugsigdbr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bugsigdbr:<tag>

(see `bioconductor-bugsigdbr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bugsigdbr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bugsigdbr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bugsigdbr
   :alt:   (downloads)
.. |docker_bioconductor-bugsigdbr| image:: https://quay.io/repository/biocontainers/bioconductor-bugsigdbr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bugsigdbr
.. _`bioconductor-bugsigdbr/tags`: https://quay.io/repository/biocontainers/bioconductor-bugsigdbr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bugsigdbr";
        var versions = ["1.16.2","1.12.0","1.8.1","1.6.2","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bugsigdbr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bugsigdbr/README.html