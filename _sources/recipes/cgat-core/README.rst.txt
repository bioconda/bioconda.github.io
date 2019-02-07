.. title:: Package Recipe 'cgatcore'
.. highlight: bash


cgatcore
========

.. conda:recipe:: cgat-core
   :replaces_section_title:

   CGAT \: the Computational Genomics Analysis Toolkit

   :homepage: https://github.com/cgat-developers/cgat-core
   :license: MIT / MIT
   :recipe: /`cgat-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-core/meta.yaml>`_

   


.. conda:package:: cgatcore

   |downloads_cgatcore| |docker_cgatcore|

   :versions: 0.5.6, 0.5.4, 0.5.2, 0.5.1

   :depends: :conda:package:`coreutils`  :conda:package:`gevent`  :conda:package:`pandas`  :conda:package:`paramiko`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`python-drmaa`  :conda:package:`pyyaml`  :conda:package:`ruffus`  :conda:package:`setuptools`  :conda:package:`six`  :conda:package:`sqlalchemy`  :conda:package:`time`  

   :required~by: |required_by_cgatcore|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgatcore

   and update with::

      conda update cgatcore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cgatcore


.. |required_by_cgatcore| conda:required_by:: cgatcore
.. |downloads_cgatcore| image:: https://img.shields.io/conda/dn/bioconda/cgatcore.svg?style=flat
   :alt:   (downloads)
.. |docker_cgatcore| image:: https://quay.io/repository/biocontainers/cgatcore/status
   :target: https://quay.io/repository/biocontainers/cgatcore







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgatcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgatcore/README.html

