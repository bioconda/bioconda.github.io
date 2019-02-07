.. title:: Package Recipe 'snakeparse'
.. highlight: bash


snakeparse
==========

.. conda:recipe:: snakeparse
   :replaces_section_title:

   Making Snakemake workflows into full\-fledged command line tools since 1999.

   :homepage: https://github.com/nh13/snakeparse
   :license: MIT
   :recipe: /`snakeparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeparse/meta.yaml>`_

   


.. conda:package:: snakeparse

   |downloads_snakeparse| |docker_snakeparse|

   :versions: 0.1.0, 0.0.1

   :depends: :conda:package:`pyhocon` >=0.3.38 :conda:package:`python` 3.6* :conda:package:`pyyaml` >=3.12 

   :required~by: |required_by_snakeparse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakeparse

   and update with::

      conda update snakeparse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snakeparse


.. |required_by_snakeparse| conda:required_by:: snakeparse
.. |downloads_snakeparse| image:: https://img.shields.io/conda/dn/bioconda/snakeparse.svg?style=flat
   :alt:   (downloads)
.. |docker_snakeparse| image:: https://quay.io/repository/biocontainers/snakeparse/status
   :target: https://quay.io/repository/biocontainers/snakeparse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakeparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakeparse/README.html

