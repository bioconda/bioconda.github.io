.. title:: Package Recipe 'pycluster'
.. highlight: bash


pycluster
=========

.. conda:recipe:: pycluster
   :replaces_section_title:

   Clustering module for Python

   :homepage: http://bonsai.hgc.jp/~mdehoon/software/cluster/software.htm#pycluster
   :license: MIT
   :recipe: /`pycluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycluster/meta.yaml>`_

   


.. conda:package:: pycluster

   |downloads_pycluster| |docker_pycluster|

   :versions: 1.54, 1.52

   :depends: :conda:package:`numpy`  :conda:package:`python` 2.7* 

   :required~by: |required_by_pycluster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pycluster

   and update with::

      conda update pycluster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pycluster


.. |required_by_pycluster| conda:required_by:: pycluster
.. |downloads_pycluster| image:: https://img.shields.io/conda/dn/bioconda/pycluster.svg?style=flat
   :alt:   (downloads)
.. |docker_pycluster| image:: https://quay.io/repository/biocontainers/pycluster/status
   :target: https://quay.io/repository/biocontainers/pycluster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycluster/README.html

