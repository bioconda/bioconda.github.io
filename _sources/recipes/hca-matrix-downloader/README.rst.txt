:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hca-matrix-downloader'
.. highlight: bash

hca-matrix-downloader
=====================

.. conda:recipe:: hca-matrix-downloader
   :replaces_section_title:
   :noindex:

   Python client for the HCA DCP matrix service

   :homepage: https://github.com/ebi-gene-expression-group/hca-matrix-downloader
   :license: MIT
   :recipe: /`hca-matrix-downloader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca-matrix-downloader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hca-matrix-downloader/meta.yaml>`_

   


.. conda:package:: hca-matrix-downloader

   |downloads_hca-matrix-downloader| |docker_hca-matrix-downloader|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on python: ``>=3``
   :depends on requests: 

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

    pixi global install hca-matrix-downloader

to add into an existing workspace instead, run::

    pixi add hca-matrix-downloader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hca-matrix-downloader

Alternatively, to install into a new environment, run::

    conda create -n envname hca-matrix-downloader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hca-matrix-downloader:<tag>

(see `hca-matrix-downloader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hca-matrix-downloader| image:: https://img.shields.io/conda/dn/bioconda/hca-matrix-downloader.svg?style=flat
   :target: https://anaconda.org/bioconda/hca-matrix-downloader
   :alt:   (downloads)
.. |docker_hca-matrix-downloader| image:: https://quay.io/repository/biocontainers/hca-matrix-downloader/status
   :target: https://quay.io/repository/biocontainers/hca-matrix-downloader
.. _`hca-matrix-downloader/tags`: https://quay.io/repository/biocontainers/hca-matrix-downloader?tab=tags


.. raw:: html

    <script>
        var package = "hca-matrix-downloader";
        var versions = ["0.0.4","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hca-matrix-downloader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hca-matrix-downloader/README.html