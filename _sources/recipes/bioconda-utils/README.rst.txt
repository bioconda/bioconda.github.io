:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda-utils'
.. highlight: bash

bioconda-utils
==============

.. conda:recipe:: bioconda-utils
   :replaces_section_title:
   :noindex:

   Utilities for building and managing bioconda recipes.

   :homepage: https://bioconda.github.io/contributor/build-system.html
   :documentation: https://bioconda.github.io/contributor/guidelines.html
   
   :developer docs: https://github.com/bioconda/bioconda-utils
   :license: MIT / MIT
   :recipe: /`bioconda-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils/meta.yaml>`_

   


.. conda:package:: bioconda-utils

   |downloads_bioconda-utils| |docker_bioconda-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>3.9.2-0</code>,  <code>3.9.1-0</code>,  <code>3.9.0-0</code>,  <code>3.8.0-0</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.7.0-0</code>,  </span></summary>
      

      ``4.1.0-0``,  ``4.0.0-0``,  ``3.9.2-0``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.0-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.0-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.15.1-0``,  ``2.15.0-1``,  ``2.15.0-0``,  ``2.14.0-0``,  ``2.13.2-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.20.0-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.6-0``,  ``0.18.5-0``,  ``0.18.4-0``,  ``0.18.1-0``,  ``0.17.10-0``,  ``0.17.9-0``,  ``0.17.8-0``,  ``0.17.6-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.23-0``,  ``0.16.22-1``,  ``0.16.22-0``,  ``0.16.21-0``,  ``0.16.20-0``,  ``0.16.19-0``,  ``0.16.18-0``,  ``0.16.17-0``,  ``0.16.16-0``,  ``0.16.15-0``,  ``0.16.14-0``,  ``0.16.13-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-1``,  ``0.16.10-0``,  ``0.16.8-3``,  ``0.16.8-2``,  ``0.16.7-1``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.15.13-0``,  ``0.15.12-0``,  ``0.15.11-0``,  ``0.15.10-1``,  ``0.15.10-0``,  ``0.15.8-0``,  ``0.15.7-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.9-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.0-0``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aiofiles: ``24.*``
   :depends on aioftp: ``0.26.*``
   :depends on aiohttp: ``>=3.12.14``
   :depends on aiohttp-jinja2: 
   :depends on aiohttp-security: 
   :depends on aiohttp-session: 
   :depends on anaconda-client: ``1.13.*``
   :depends on argh: ``0.31.*``
   :depends on backoff: ``2.2.*``
   :depends on beautifulsoup4: ``4.*``
   :depends on boltons: ``25.0.*``
   :depends on cachetools: ``5.3.*``
   :depends on colorlog: ``6.*``
   :depends on conda: ``25.7.*``
   :depends on conda-build: ``25.7.*``
   :depends on conda-forge-pinning: ``2024.11.29.12.37.53.*``
   :depends on conda-index: ``0.6.*``
   :depends on conda-libmamba-solver: ``25.4.*``
   :depends on conda-package-streaming: ``0.12.*``
   :depends on diskcache: ``5.*``
   :depends on findutils: 
   :depends on galaxy-tool-util: ``25.*``
   :depends on gidgethub: ``5.*``
   :depends on git: ``2.*``
   :depends on gitpython: ``3.1.*``
   :depends on involucro: ``1.1.*``
   :depends on jinja2: ``3.1.*``
   :depends on jsonschema: ``4.25.*``
   :depends on libblas: ``* *openblas``
   :depends on mamba: ``2.3.*``
   :depends on networkx: ``3.5.*``
   :depends on pandas: ``2.3.*``
   :depends on platformdirs: ``4.*``
   :depends on pyaml: ``25.7.*``
   :depends on pygithub: 
   :depends on pyjwt: ``>=2.4.0``
   :depends on python: ``3.12.*``
   :depends on regex: ``2025.*``
   :depends on requests: ``2.32.*``
   :depends on ruamel.yaml: ``0.18.*``
   :depends on skopeo: ``1.15.*``
   :depends on tabulate: ``0.9.*``
   :depends on tqdm: ``4.67.*``
   :depends on yaspin: ``3.*``

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

    pixi global install bioconda-utils

to add into an existing workspace instead, run::

    pixi add bioconda-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconda-utils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconda-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconda-utils:<tag>

(see `bioconda-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconda-utils| image:: https://img.shields.io/conda/dn/bioconda/bioconda-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda-utils
   :alt:   (downloads)
.. |docker_bioconda-utils| image:: https://quay.io/repository/biocontainers/bioconda-utils/status
   :target: https://quay.io/repository/biocontainers/bioconda-utils
.. _`bioconda-utils/tags`: https://quay.io/repository/biocontainers/bioconda-utils?tab=tags


.. raw:: html

    <script>
        var package = "bioconda-utils";
        var versions = ["4.1.0","4.0.0","3.9.2","3.9.1","3.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda-utils/README.html