:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi-utils'
.. highlight: bash

kipoi-utils
===========

.. conda:recipe:: kipoi-utils
   :replaces_section_title:

   kipoi\-utils\: utils used in various packages related to kipoi

   :homepage: https://github.com/kipoi/kipoi-utils
   :license: MIT / MIT
   :recipe: /`kipoi-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi-utils/meta.yaml>`_

   kipoi\-utils\: utils used in various packages related to kipoi


.. conda:package:: kipoi-utils

   |downloads_kipoi-utils| |docker_kipoi-utils|

   :versions: 0.3.6-0, 0.3.5-0, 0.3.4-0, 0.3.2-0, 0.3.0-0, 0.1.12-2, 0.1.12-1, 0.1.12-0
   
   :depends attrs: 
   :depends numpy: 
   :depends pandas: >=0.21.0
   :depends psutil: 
   :depends python: 
   :depends pyyaml: >=5.1.0
   :depends related: 
   :depends six: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoi-utils

   and update with::

      conda update kipoi-utils

   or use the docker container::

      docker pull quay.io/biocontainers/kipoi-utils:<tag>

   (see `kipoi-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoi-utils| image:: https://img.shields.io/conda/dn/bioconda/kipoi-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi-utils
   :alt:   (downloads)
.. |docker_kipoi-utils| image:: https://quay.io/repository/biocontainers/kipoi-utils/status
   :target: https://quay.io/repository/biocontainers/kipoi-utils
.. _`kipoi-utils/tags`: https://quay.io/repository/biocontainers/kipoi-utils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi-utils/README.html