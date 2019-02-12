:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi'
.. highlight: bash

kipoi
=====

.. conda:recipe:: kipoi
   :replaces_section_title:

   Kipoi\: model zoo for genomics

   :homepage: https://github.com/kipoi/kipoi
   :license: MIT / MIT
   :recipe: /`kipoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi/meta.yaml>`_

   Kipoi\: model zoo for genomics. http\:\/\/kipoi.org\/


.. conda:package:: kipoi

   |downloads_kipoi| |docker_kipoi|

   :versions: 0.6.5-0, 0.6.3-0, 0.6.0-0, 0.5.7-0, 0.3.6-1, 0.3.6-0
   
   :depends colorlog: 
   
   :depends cookiecutter: 
   
   :depends future: 
   
   :depends git-lfs: 
   
   :depends h5py: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: 
   
   :depends pyyaml: 
   
   :depends tqdm: 
   
   :depends urllib3: >=1.21.1,<1.23
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoi

   and update with::

      conda update kipoi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kipoi:<tag>

   (see `kipoi/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoi| image:: https://img.shields.io/conda/dn/bioconda/kipoi.svg?style=flat
   :alt:   (downloads)
.. |docker_kipoi| image:: https://quay.io/repository/biocontainers/kipoi/status
   :target: https://quay.io/repository/biocontainers/kipoi
.. _`kipoi/tags`: https://quay.io/repository/biocontainers/kipoi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi/README.html