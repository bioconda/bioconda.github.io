.. title:: Package Recipe 'avro-python3'
.. highlight: bash


avro-python3
============

.. conda:recipe:: avro-python3
   :replaces_section_title:

   Avro is a serialization and RPC framework.

   :homepage: http://avro.apache.org/
   :license: Apache License 2.0
   :recipe: /`avro-python3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python3/meta.yaml>`_

   


.. conda:package:: avro-python3

   |downloads_avro-python3| |docker_avro-python3|

   :versions: 1.8.2, 1.8.1, 1.8.0

   :depends: :conda:package:`python` 3.5* 

   :required~by: |required_by_avro-python3|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install avro-python3

   and update with::

      conda update avro-python3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/avro-python3


.. |required_by_avro-python3| conda:required_by:: avro-python3
.. |downloads_avro-python3| image:: https://img.shields.io/conda/dn/bioconda/avro-python3.svg?style=flat
   :alt:   (downloads)
.. |docker_avro-python3| image:: https://quay.io/repository/biocontainers/avro-python3/status
   :target: https://quay.io/repository/biocontainers/avro-python3







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-python3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-python3/README.html

