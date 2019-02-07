.. title:: Package Recipe 'fisher'
.. highlight: bash


fisher
======

.. conda:recipe:: fisher
   :replaces_section_title:

   Fast Fisher\'s Exact Test

   :homepage: http://github.com/brentp/fishers_exact_test
   :license: BSD License
   :recipe: /`fisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fisher/meta.yaml>`_

   


.. conda:package:: fisher

   |downloads_fisher| |docker_fisher|

   :versions: 0.1.4

   :depends: :conda:package:`numpy`  :conda:package:`python` 2.7* 

   :required~by: |required_by_fisher|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fisher

   and update with::

      conda update fisher

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fisher


.. |required_by_fisher| conda:required_by:: fisher
.. |downloads_fisher| image:: https://img.shields.io/conda/dn/bioconda/fisher.svg?style=flat
   :alt:   (downloads)
.. |docker_fisher| image:: https://quay.io/repository/biocontainers/fisher/status
   :target: https://quay.io/repository/biocontainers/fisher







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fisher/README.html

