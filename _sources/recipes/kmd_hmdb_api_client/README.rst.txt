:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmd_hmdb_api_client'
.. highlight: bash

kmd_hmdb_api_client
===================

.. conda:recipe:: kmd_hmdb_api_client
   :replaces_section_title:
   :noindex:

   The KMD HMDB project API Client

   :homepage: https://pypi.org/project/kmd-hmdb-api-client/
   :license: AGPL-3.0-or-later
   :recipe: /`kmd_hmdb_api_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmd_hmdb_api_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmd_hmdb_api_client/meta.yaml>`_

   


.. conda:package:: kmd_hmdb_api_client

   |downloads_kmd_hmdb_api_client| |docker_kmd_hmdb_api_client|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on attrs: ``>=23.1.0``
   :depends on click: ``>=8.1.3``
   :depends on httpx: ``>=0.24.1``
   :depends on python: ``>=3.9``

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

    pixi global install kmd_hmdb_api_client

to add into an existing workspace instead, run::

    pixi add kmd_hmdb_api_client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmd_hmdb_api_client

Alternatively, to install into a new environment, run::

    conda create -n envname kmd_hmdb_api_client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmd_hmdb_api_client:<tag>

(see `kmd_hmdb_api_client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmd_hmdb_api_client| image:: https://img.shields.io/conda/dn/bioconda/kmd_hmdb_api_client.svg?style=flat
   :target: https://anaconda.org/bioconda/kmd_hmdb_api_client
   :alt:   (downloads)
.. |docker_kmd_hmdb_api_client| image:: https://quay.io/repository/biocontainers/kmd_hmdb_api_client/status
   :target: https://quay.io/repository/biocontainers/kmd_hmdb_api_client
.. _`kmd_hmdb_api_client/tags`: https://quay.io/repository/biocontainers/kmd_hmdb_api_client?tab=tags


.. raw:: html

    <script>
        var package = "kmd_hmdb_api_client";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmd_hmdb_api_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmd_hmdb_api_client/README.html