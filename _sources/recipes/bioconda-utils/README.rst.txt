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

         <details><summary><span class="truncated-version-list"><code>0.17.10-0</code>,  <code>0.17.9-0</code>,  <code>0.17.8-0</code>,  <code>0.17.6-0</code>,  <code>0.17.5-0</code>,  <code>0.17.4-0</code>,  <code>0.17.3-0</code>,  <code>0.17.2-0</code>,  <code>0.17.1-0</code>,  </span></summary>
      

      ``0.17.10-0``,  ``0.17.9-0``,  ``0.17.8-0``,  ``0.17.6-0``,  ``0.17.5-0``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.23-0``,  ``0.16.22-1``,  ``0.16.22-0``,  ``0.16.21-0``,  ``0.16.20-0``,  ``0.16.19-0``,  ``0.16.18-0``,  ``0.16.17-0``,  ``0.16.16-0``,  ``0.16.15-0``,  ``0.16.14-0``,  ``0.16.13-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-1``,  ``0.16.10-0``,  ``0.16.8-3``,  ``0.16.8-2``,  ``0.16.7-1``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.3-0``,  ``0.16.2-0``,  ``0.15.13-0``,  ``0.15.12-0``,  ``0.15.11-0``,  ``0.15.10-1``,  ``0.15.10-0``,  ``0.15.8-0``,  ``0.15.7-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.9-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.0-0``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiofiles: ``0.4.*``
   :depends aioftp: ``0.12.*``
   :depends aiohttp: ``3.4.*``
   :depends alabaster: ``0.7.*``
   :depends anaconda-client: ``1.6.*``
   :depends argh: ``0.26.*``
   :depends backoff: ``1.6.*``
   :depends beautifulsoup4: ``4.6.*``
   :depends boltons: ``18.*``
   :depends cachetools: ``3.0.*``
   :depends celery: 
   :depends colorlog: ``3.1.*``
   :depends conda: ``4.8.4.*``
   :depends conda-build: ``3.21.4.*``
   :depends conda-forge-pinning: ``2022.01.13.01.57.35.*``
   :depends conda-verify: ``3.1.*``
   :depends docutils: 
   :depends galaxy-lib: ``>=18.9.1``
   :depends gidgethub: ``3.0.*``
   :depends git: ``2.14.*``
   :depends gitpython: ``>=3.0.8,3.0.*``
   :depends involucro: ``1.1.*``
   :depends jinja2: ``2.10.*``
   :depends jsonschema: ``2.6.*``
   :depends libblas: ``* *openblas``
   :depends networkx: ``1.11.*``
   :depends numpy: ``1.19.*``
   :depends pandas: ``0.23.*``
   :depends pyaml: ``17.12.*``
   :depends pyjwt: ``1.7.*``
   :depends python: ``>=3.7``
   :depends regex: ``2018.08.29.*``
   :depends requests: ``2.22.*``
   :depends ruamel_yaml: ``0.15.*``
   :depends skopeo: ``0.1.35.*``
   :depends sphinx: 
   :depends sphinx-autodoc-typehints: 
   :depends tqdm: ``>=4.26``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconda-utils

   and update with::

      conda update bioconda-utils

   or use the docker container::

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
        var versions = ["0.17.10","0.17.9","0.17.8","0.17.6","0.17.5"];
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