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

   :versions: 0.6.5, 0.6.3, 0.6.0, 0.5.7, 0.3.6

   :depends: :conda:package:`colorlog`  :conda:package:`cookiecutter`  :conda:package:`future`  :conda:package:`git-lfs`  :conda:package:`h5py`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python`  :conda:package:`pyyaml`  :conda:package:`tqdm`  :conda:package:`urllib3` >=1.21.1,<1.23 

   :required~by: |required_by_kipoi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoi

   and update with::

      conda update kipoi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kipoi


.. |required_by_kipoi| conda:required_by:: kipoi
.. |downloads_kipoi| image:: https://img.shields.io/conda/dn/bioconda/kipoi.svg?style=flat
   :alt:   (downloads)
.. |docker_kipoi| image:: https://quay.io/repository/biocontainers/kipoi/status
   :target: https://quay.io/repository/biocontainers/kipoi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi/README.html

