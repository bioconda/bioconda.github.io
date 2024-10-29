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

         <details><summary><span class="truncated-version-list"><code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.15.1-0</code>,  <code>2.15.0-1</code>,  </span></summary>
      

      ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.15.1-0``,  ``2.15.0-1``,  ``2.15.0-0``,  ``2.14.0-0``,  ``2.13.2-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.20.0-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.6-0``,  ``0.18.5-0``,  ``0.18.4-0``,  ``0.18.1-0``,  ``0.17.10-0``,  ``0.17.9-0``,  ``0.17.8-0``,  ``0.17.6-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.23-0``,  ``0.16.22-1``,  ``0.16.22-0``,  ``0.16.21-0``,  ``0.16.20-0``,  ``0.16.19-0``,  ``0.16.18-0``,  ``0.16.17-0``,  ``0.16.16-0``,  ``0.16.15-0``,  ``0.16.14-0``,  ``0.16.13-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-1``,  ``0.16.10-0``,  ``0.16.8-3``,  ``0.16.8-2``,  ``0.16.7-1``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.15.13-0``,  ``0.15.12-0``,  ``0.15.11-0``,  ``0.15.10-1``,  ``0.15.10-0``,  ``0.15.8-0``,  ``0.15.7-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.9-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.0-0``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiofiles: ``23.*``
   :depends aioftp: ``0.22.*``
   :depends aiohttp: ``3.9.*``
   :depends aiohttp-jinja2: 
   :depends aiohttp-security: 
   :depends aiohttp-session: 
   :depends anaconda-client: ``1.12.*``
   :depends argh: ``0.31.*``
   :depends backoff: ``2.2.*``
   :depends beautifulsoup4: ``4.*``
   :depends boltons: ``24.0.*``
   :depends cachetools: ``5.3.*``
   :depends colorlog: ``6.*``
   :depends conda: ``24.9.*``
   :depends conda-build: ``24.7.*``
   :depends conda-forge-pinning: ``2024.06.01.05.54.15.*``
   :depends conda-index: ``0.5.*``
   :depends conda-libmamba-solver: ``24.1.*``
   :depends conda-package-streaming: ``0.11.*``
   :depends diskcache: ``5.*``
   :depends findutils: 
   :depends galaxy-tool-util: ``24.*``
   :depends gidgethub: ``5.*``
   :depends git: ``2.*``
   :depends gitpython: ``3.1.*``
   :depends involucro: ``1.1.*``
   :depends jinja2: ``3.1.*``
   :depends jsonschema: ``4.22.*``
   :depends libblas: ``* *openblas``
   :depends mamba: ``1.5.*``
   :depends networkx: ``3.3.*``
   :depends pandas: ``2.2.*``
   :depends platformdirs: ``4.*``
   :depends pyaml: ``24.04.*``
   :depends pygithub: 
   :depends pyjwt: ``>=2.4.0``
   :depends python: ``3.10.*``
   :depends regex: ``2024.*``
   :depends requests: ``2.32.*``
   :depends ruamel.yaml: ``0.18.*``
   :depends skopeo: ``1.15.*``
   :depends tabulate: ``0.9.*``
   :depends tqdm: ``4.66.*``
   :depends yaspin: ``2.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconda-utils

   and update with::

      mamba update bioconda-utils

  To create a new environment, run::

      mamba create --name myenvname bioconda-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconda-utils:<tag>

   (see `bioconda-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconda-utils| image:: https://img.shields.io/conda/dn/bioconda/bioconda-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda-utils
   :alt:   (downloads)
.. |docker_bioconda-utils| image:: https://quay.io/repository/biocontainers/bioconda-utils/status
   :target: https://quay.io/repository/biocontainers/bioconda-utils
.. _`bioconda-utils/tags`: https://quay.io/repository/biocontainers/bioconda-utils?tab=tags


.. raw:: html

    <script>
        var package = "bioconda-utils";
        var versions = ["3.4.1","3.4.0","3.3.2","3.3.1","3.3.0"];
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