:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hca'
.. highlight: bash

bioconductor-hca
================

.. conda:recipe:: bioconductor-hca
   :replaces_section_title:
   :noindex:

   Exploring the Human Cell Atlas Data Coordinating Platform

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hca.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hca/meta.yaml>`_

   This package provides users with the ability to query the Human Cell Atlas data repository for single\-cell experiment data. The \`projects\(\)\`\, \`files\(\)\`\, \`samples\(\)\` and \`bundles\(\)\` functions retrieve summary information on each of these indexes\; corresponding \`\*\_details\(\)\` are available for individual entries of each index. File\-based resources can be downloaded using \`files\_download\(\)\`. Advanced use of the package allows the user to page through large result sets\, and to flexibly query the \'list\-of\-lists\' structure representing query responses.


.. conda:package:: bioconductor-hca

   |downloads_bioconductor-hca| |docker_bioconductor-hca|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-digest: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-miniui: 
   :depends on r-readr: 
   :depends on r-shiny: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-hca

to add into an existing workspace instead, run::

    pixi add bioconductor-hca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hca

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hca:<tag>

(see `bioconductor-hca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hca
   :alt:   (downloads)
.. |docker_bioconductor-hca| image:: https://quay.io/repository/biocontainers/bioconductor-hca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hca
.. _`bioconductor-hca/tags`: https://quay.io/repository/biocontainers/bioconductor-hca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hca";
        var versions = ["1.14.0","1.10.0","1.8.1","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hca/README.html