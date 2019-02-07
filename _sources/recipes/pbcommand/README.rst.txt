.. title:: Package Recipe 'pbcommand'
.. highlight: bash


pbcommand
=========

.. conda:recipe:: pbcommand
   :replaces_section_title:

   Library and Tools for interfacing with PacBio pbsmrtpipe workflow engine

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand/meta.yaml>`_

   


.. conda:package:: pbcommand

   |downloads_pbcommand| |docker_pbcommand|

   :versions: 1.1.1, 0.3.29, 0.2.17

   :depends: :conda:package:`avro-python2`  :conda:package:`iso8601`  :conda:package:`numpy` >=1.15 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pytz`  :conda:package:`requests`  

   :required~by: |required_by_pbcommand|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbcommand

   and update with::

      conda update pbcommand

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbcommand


.. |required_by_pbcommand| conda:required_by:: pbcommand
.. |downloads_pbcommand| image:: https://img.shields.io/conda/dn/bioconda/pbcommand.svg?style=flat
   :alt:   (downloads)
.. |docker_pbcommand| image:: https://quay.io/repository/biocontainers/pbcommand/status
   :target: https://quay.io/repository/biocontainers/pbcommand







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcommand/README.html

