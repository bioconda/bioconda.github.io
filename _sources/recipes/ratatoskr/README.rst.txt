:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratatoskr'
.. highlight: bash

ratatoskr
=========

.. conda:recipe:: ratatoskr
   :replaces_section_title:
   :noindex:

   Tool for collecting and downloading taxonomic type strain data.

   :homepage: https://github.com/Fabian-Bastiaanssen/Ratatoskr
   :license: MIT
   :recipe: /`ratatoskr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatoskr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatoskr/meta.yaml>`_

   


.. conda:package:: ratatoskr

   |downloads_ratatoskr| |docker_ratatoskr|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends on async-dsmz: ``>=2025.0.5``
   :depends on bacdive: ``1.0.0``
   :depends on biopython: ``>=1.86``
   :depends on loguru: ``>=0.7.2``
   :depends on lpsn: ``1.0.0``
   :depends on ncbi-datasets-cli: ``>=18.10.2``
   :depends on polars: ``>=1.32.2``
   :depends on pyarrow: ``>=13.0.0``
   :depends on python: ``>=3.12``
   :depends on rich-click: ``>=1.8.8``
   :depends on tqdm: ``>=4.66.1``

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

    pixi global install ratatoskr

to add into an existing workspace instead, run::

    pixi add ratatoskr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ratatoskr

Alternatively, to install into a new environment, run::

    conda create -n envname ratatoskr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ratatoskr:<tag>

(see `ratatoskr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ratatoskr| image:: https://img.shields.io/conda/dn/bioconda/ratatoskr.svg?style=flat
   :target: https://anaconda.org/bioconda/ratatoskr
   :alt:   (downloads)
.. |docker_ratatoskr| image:: https://quay.io/repository/biocontainers/ratatoskr/status
   :target: https://quay.io/repository/biocontainers/ratatoskr
.. _`ratatoskr/tags`: https://quay.io/repository/biocontainers/ratatoskr?tab=tags


.. raw:: html

    <script>
        var package = "ratatoskr";
        var versions = ["1.0.4","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratatoskr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratatoskr/README.html