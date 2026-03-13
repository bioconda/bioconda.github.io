:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhmmsearch'
.. highlight: bash

pyhmmsearch
===========

.. conda:recipe:: pyhmmsearch
   :replaces_section_title:
   :noindex:

   Fast implementation of HMMSEARCH optimized for high\-memory systems using PyHmmer.

   :homepage: https://github.com/jolespin/pyhmmsearch
   :documentation: https://github.com/jolespin/pyhmmsearch/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`pyhmmsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhmmsearch/meta.yaml>`_

   


.. conda:package:: pyhmmsearch

   |downloads_pyhmmsearch| |docker_pyhmmsearch|

   :versions:
      
      

      ``2025.10.23.post1-0``,  ``2025.9.5-0``,  ``2025.9.4.post1-0``,  ``2025.9.4-0``,  ``2025.1.23-0``,  ``2024.10.20-0``

      

   
   :depends on biopython: 
   :depends on pandas: ``>=2``
   :depends on pyhmmer: ``>=0.10.12,<0.11.0``
   :depends on python: 
   :depends on tqdm: ``>=4``

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

    pixi global install pyhmmsearch

to add into an existing workspace instead, run::

    pixi add pyhmmsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyhmmsearch

Alternatively, to install into a new environment, run::

    conda create -n envname pyhmmsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyhmmsearch:<tag>

(see `pyhmmsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyhmmsearch| image:: https://img.shields.io/conda/dn/bioconda/pyhmmsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhmmsearch
   :alt:   (downloads)
.. |docker_pyhmmsearch| image:: https://quay.io/repository/biocontainers/pyhmmsearch/status
   :target: https://quay.io/repository/biocontainers/pyhmmsearch
.. _`pyhmmsearch/tags`: https://quay.io/repository/biocontainers/pyhmmsearch?tab=tags


.. raw:: html

    <script>
        var package = "pyhmmsearch";
        var versions = ["2025.10.23.post1","2025.9.5","2025.9.4.post1","2025.9.4","2025.1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhmmsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhmmsearch/README.html