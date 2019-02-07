.. title:: Package Recipe 'bioconda-utils'
.. highlight: bash


bioconda-utils
==============

.. conda:recipe:: bioconda-utils
   :replaces_section_title:

   Utilities for building and managing bioconda recipes.

   :homepage: http://bioconda.github.io/build-system.html
   :developer docs: https://github.com/bioconda/bioconda-utils
   :license: MIT / MIT
   :recipe: /`bioconda-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-utils/meta.yaml>`_

   


.. conda:package:: bioconda-utils

   |downloads_bioconda-utils| |docker_bioconda-utils|

   :versions: 0.15.7, 0.15.3, 0.15.2, 0.15.1, 0.14.9, 0.14.3, 0.14.2, 0.12.3, 0.12.0, 0.11.4, 0.11.3, 0.11.2, 0.11.1

   :depends: :conda:package:`aiofiles` 0.4.* :conda:package:`aiohttp` 3.4.* :conda:package:`alabaster` 0.7.* :conda:package:`anaconda-client` 1.6.* :conda:package:`argh` 0.26.* :conda:package:`backoff` 1.6.* :conda:package:`beautifulsoup4` 4.6.* :conda:package:`colorlog` 3.1.* :conda:package:`conda` 4.5.11.* :conda:package:`conda-build`  :conda:package:`docutils`  :conda:package:`galaxy-lib` 17.9.* :conda:package:`gidgethub` 3.0.* :conda:package:`gitpython` 2.1.* :conda:package:`involucro` 1.1.* :conda:package:`jinja2` 2.10.* :conda:package:`jsonschema` 2.6.* :conda:package:`networkx` 1.11.* :conda:package:`numpy` 1.15.* :conda:package:`pandas` 0.23.* :conda:package:`pyaml` 17.12.* :conda:package:`pydotplus` 2.0.* :conda:package:`pygithub` 1.34.* :conda:package:`python` >=3 :conda:package:`regex` 2018.08.29.* :conda:package:`requests` 2.20.* :conda:package:`ruamel_yaml` 0.15.* :conda:package:`six` 1.11.* :conda:package:`sphinx`  :conda:package:`sphinx_rtd_theme`  :conda:package:`tqdm` >=4.26 

   :required~by: |required_by_bioconda-utils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconda-utils

   and update with::

      conda update bioconda-utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconda-utils


.. |required_by_bioconda-utils| conda:required_by:: bioconda-utils
.. |downloads_bioconda-utils| image:: https://img.shields.io/conda/dn/bioconda/bioconda-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconda-utils| image:: https://quay.io/repository/biocontainers/bioconda-utils/status
   :target: https://quay.io/repository/biocontainers/bioconda-utils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda-utils/README.html

