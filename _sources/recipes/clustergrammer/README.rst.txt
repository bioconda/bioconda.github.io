.. title:: Package Recipe 'clustergrammer'
.. highlight: bash


clustergrammer
==============

.. conda:recipe:: clustergrammer
   :replaces_section_title:

   A python module for the Clustergrammer visualization project

   :homepage: https://github.com/MaayanLab/clustergrammer-py
   :license: MIT / MIT license
   :recipe: /`clustergrammer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustergrammer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustergrammer/meta.yaml>`_

   


.. conda:package:: clustergrammer

   |downloads_clustergrammer| |docker_clustergrammer|

   :versions: 1.13.5

   :depends: :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`scikit-learn`  

   :required~by: |required_by_clustergrammer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clustergrammer

   and update with::

      conda update clustergrammer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/clustergrammer


.. |required_by_clustergrammer| conda:required_by:: clustergrammer
.. |downloads_clustergrammer| image:: https://img.shields.io/conda/dn/bioconda/clustergrammer.svg?style=flat
   :alt:   (downloads)
.. |docker_clustergrammer| image:: https://quay.io/repository/biocontainers/clustergrammer/status
   :target: https://quay.io/repository/biocontainers/clustergrammer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustergrammer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustergrammer/README.html

