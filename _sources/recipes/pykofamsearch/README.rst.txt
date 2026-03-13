:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pykofamsearch'
.. highlight: bash

pykofamsearch
=============

.. conda:recipe:: pykofamsearch
   :replaces_section_title:
   :noindex:

   Fast implementation of HMMSEARCH optimized for high\-memory systems using PyHmmer.

   :homepage: https://github.com/jolespin/pykofamsearch
   :license: MIT / MIT
   :recipe: /`pykofamsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pykofamsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pykofamsearch/meta.yaml>`_

   


.. conda:package:: pykofamsearch

   |downloads_pykofamsearch| |docker_pykofamsearch|

   :versions:
      
      

      ``2025.9.5-1``,  ``2025.9.5-0``,  ``2024.11.9-0``,  ``2024.11.8.post1-0``,  ``2024.10.20-0``

      

   
   :depends on biopython: 
   :depends on pandas: ``>=2``
   :depends on pyhmmer: ``>=0.10.12,<0.11.0``
   :depends on python: ``>=3``
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

    pixi global install pykofamsearch

to add into an existing workspace instead, run::

    pixi add pykofamsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pykofamsearch

Alternatively, to install into a new environment, run::

    conda create -n envname pykofamsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pykofamsearch:<tag>

(see `pykofamsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pykofamsearch| image:: https://img.shields.io/conda/dn/bioconda/pykofamsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/pykofamsearch
   :alt:   (downloads)
.. |docker_pykofamsearch| image:: https://quay.io/repository/biocontainers/pykofamsearch/status
   :target: https://quay.io/repository/biocontainers/pykofamsearch
.. _`pykofamsearch/tags`: https://quay.io/repository/biocontainers/pykofamsearch?tab=tags


.. raw:: html

    <script>
        var package = "pykofamsearch";
        var versions = ["2025.9.5","2025.9.5","2024.11.9","2024.11.8.post1","2024.10.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pykofamsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pykofamsearch/README.html