:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsemmed'
.. highlight: bash

bioconductor-rsemmed
====================

.. conda:recipe:: bioconductor-rsemmed
   :replaces_section_title:
   :noindex:

   An interface to the Semantic MEDLINE database

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rsemmed.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rsemmed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsemmed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsemmed/meta.yaml>`_

   A programmatic interface to the Semantic MEDLINE database. It provides functions for searching the database for concepts and finding paths between concepts. Path searching can also be tailored to user specifications\, such as placing restrictions on concept types and the type of link between concepts. It also provides functions for summarizing and visualizing those paths.


.. conda:package:: bioconductor-rsemmed

   |downloads_bioconductor-rsemmed| |docker_bioconductor-rsemmed|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-rsemmed

to add into an existing workspace instead, run::

    pixi add bioconductor-rsemmed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rsemmed

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rsemmed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rsemmed:<tag>

(see `bioconductor-rsemmed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rsemmed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsemmed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsemmed
   :alt:   (downloads)
.. |docker_bioconductor-rsemmed| image:: https://quay.io/repository/biocontainers/bioconductor-rsemmed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsemmed
.. _`bioconductor-rsemmed/tags`: https://quay.io/repository/biocontainers/bioconductor-rsemmed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsemmed";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsemmed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsemmed/README.html