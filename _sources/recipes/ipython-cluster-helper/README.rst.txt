.. title:: Package Recipe 'ipython-cluster-helper'
.. highlight: bash


ipython-cluster-helper
======================

.. conda:recipe:: ipython-cluster-helper
   :replaces_section_title:

   Tool to easily start up an IPython cluster on different schedulers

   :homepage: https://github.com/roryk/ipython-cluster-helper
   :license: MIT
   :recipe: /`ipython-cluster-helper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipython-cluster-helper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipython-cluster-helper/meta.yaml>`_

   


.. conda:package:: ipython-cluster-helper

   |downloads_ipython-cluster-helper| |docker_ipython-cluster-helper|

   :versions: 0.6.2, 0.6.1, 0.6.0, 0.5.9, 0.5.8, 0.5.7, 0.5.6, 0.5.5, 0.5.4, 0.5.3, 0.5.2, 0.5.1, 0.5.0

   :depends: :conda:package:`ipyparallel` >=6.0.2 :conda:package:`netifaces`  :conda:package:`python`  :conda:package:`pyzmq`  :conda:package:`zeromq`  

   :required~by: |required_by_ipython-cluster-helper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ipython-cluster-helper

   and update with::

      conda update ipython-cluster-helper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ipython-cluster-helper


.. |required_by_ipython-cluster-helper| conda:required_by:: ipython-cluster-helper
.. |downloads_ipython-cluster-helper| image:: https://img.shields.io/conda/dn/bioconda/ipython-cluster-helper.svg?style=flat
   :alt:   (downloads)
.. |docker_ipython-cluster-helper| image:: https://quay.io/repository/biocontainers/ipython-cluster-helper/status
   :target: https://quay.io/repository/biocontainers/ipython-cluster-helper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipython-cluster-helper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipython-cluster-helper/README.html

