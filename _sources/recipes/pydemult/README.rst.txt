.. title:: Package Recipe 'pydemult'
.. highlight: bash


pydemult
========

.. conda:recipe:: pydemult
   :replaces_section_title:

   Streamed and parallel demultiplexing of fastq files in python

   :homepage: https://github.com/jenzopr/pydemult
   :license: MIT / MIT
   :recipe: /`pydemult <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydemult>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydemult/meta.yaml>`_

   


.. conda:package:: pydemult

   |downloads_pydemult| |docker_pydemult|

   :versions: 0.4.1

   :depends: :conda:package:`mputil`  :conda:package:`pandas`  :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_pydemult|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydemult

   and update with::

      conda update pydemult

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pydemult


.. |required_by_pydemult| conda:required_by:: pydemult
.. |downloads_pydemult| image:: https://img.shields.io/conda/dn/bioconda/pydemult.svg?style=flat
   :alt:   (downloads)
.. |docker_pydemult| image:: https://quay.io/repository/biocontainers/pydemult/status
   :target: https://quay.io/repository/biocontainers/pydemult







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydemult/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydemult/README.html

