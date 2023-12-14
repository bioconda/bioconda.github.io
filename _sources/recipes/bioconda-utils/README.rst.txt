:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda-utils'
.. highlight: bash

bioconda-utils
==============

.. conda:recipe:: bioconda-utils
   :replaces_section_title:
   :noindex:

   Utilities for building and managing bioconda recipes.

   :homepage: http://bioconda.github.io/build-system.html
   :developer docs: https://github.com/bioconda/bioconda-utils
   :license: MIT / MIT
   :recipe: /`bioconda-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils/meta.yaml>`_

   


.. conda:package:: bioconda-utils

   |downloads_bioconda-utils| |docker_bioconda-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.1-0</code>,  <code>2.11.0-0</code>,  <code>2.10.0-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.3.1-0</code>,  </span></summary>
      

      ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.1-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.20.0-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.6-0``,  ``0.18.5-0``,  ``0.18.4-0``,  ``0.18.1-0``,  ``0.17.10-0``,  ``0.17.9-0``,  ``0.17.8-0``,  ``0.17.6-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.23-0``,  ``0.16.22-1``,  ``0.16.22-0``,  ``0.16.21-0``,  ``0.16.20-0``,  ``0.16.19-0``,  ``0.16.18-0``,  ``0.16.17-0``,  ``0.16.16-0``,  ``0.16.15-0``,  ``0.16.14-0``,  ``0.16.13-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-1``,  ``0.16.10-0``,  ``0.16.8-3``,  ``0.16.8-2``,  ``0.16.7-1``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.15.13-0``,  ``0.15.12-0``,  ``0.15.11-0``,  ``0.15.10-1``,  ``0.15.10-0``,  ``0.15.8-0``,  ``0.15.7-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.9-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.0-0``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiofiles: ``0.8.*``
   :depends aioftp: ``0.12.*``
   :depends aiohttp: ``3.8.*``
   :depends aiohttp-jinja2: 
   :depends aiohttp-security: 
   :depends aiohttp-session: 
   :depends alabaster: ``0.7.*``
   :depends anaconda-client: ``1.6.*``
   :depends appdirs: ``1.*``
   :depends argh: ``0.26.*``
   :depends backoff: ``1.6.*``
   :depends beautifulsoup4: ``4.8.*``
   :depends boa: ``0.15.*``
   :depends boltons: ``23.*``
   :depends cachetools: ``3.0.*``
   :depends celery: 
   :depends colorlog: ``4.8.*``
   :depends conda: ``23.3.*``
   :depends conda-build: ``3.24.*``
   :depends conda-forge-pinning: ``2023.05.06.13.08.41.*``
   :depends conda-verify: ``3.1.*``
   :depends diskcache: ``5.*``
   :depends docutils: 
   :depends galaxy-lib: ``>=18.9.1``
   :depends gidgethub: ``3.0.*``
   :depends git: ``2.*``
   :depends gitpython: ``>=3.0.8,3.0.*``
   :depends graphviz: 
   :depends involucro: ``1.1.*``
   :depends jinja2: ``>2.10.1,<3``
   :depends jsonschema: ``3.2.*``
   :depends libblas: ``* *openblas``
   :depends markdown: 
   :depends markupsafe: ``<2.1``
   :depends networkx: ``2.*``
   :depends numpy: ``1.19.*``
   :depends pandas: ``1.4.*``
   :depends pyaml: ``17.12.*``
   :depends pygithub: ``1.*``
   :depends pyjwt: ``>=2.4.0``
   :depends pyopenssl: ``>=22.1``
   :depends python: 
   :depends regex: ``2022.7.9.*``
   :depends requests: ``2.22.*``
   :depends ruamel_yaml: ``0.15.*``
   :depends skopeo: ``1.11.*``
   :depends sphinx: ``>=4.1``
   :depends sphinx-autodoc-typehints: 
   :depends tabulate: ``0.9.*``
   :depends yaspin: ``2.0.*``
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
        var versions = ["2.11.1","2.11.0","2.10.0","2.9.0","2.8.0"];
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