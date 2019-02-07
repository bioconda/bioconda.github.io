.. title:: Package Recipe 'gtfparse'
.. highlight: bash


gtfparse
========

.. conda:recipe:: gtfparse
   :replaces_section_title:

   GTF Parsing

   :homepage: https://github.com/openvax/gtfparse
   :license: APACHE / Apache 2.0
   :recipe: /`gtfparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse/meta.yaml>`_

   


.. conda:package:: gtfparse

   |downloads_gtfparse| |docker_gtfparse|

   :versions: 1.2.0, 1.0.7

   :depends: :conda:package:`numpy` >=1.7,<2.0 :conda:package:`pandas` >=0.15 :conda:package:`python`  

   :required~by: |required_by_gtfparse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gtfparse

   and update with::

      conda update gtfparse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gtfparse


.. |required_by_gtfparse| conda:required_by:: gtfparse
.. |downloads_gtfparse| image:: https://img.shields.io/conda/dn/bioconda/gtfparse.svg?style=flat
   :alt:   (downloads)
.. |docker_gtfparse| image:: https://quay.io/repository/biocontainers/gtfparse/status
   :target: https://quay.io/repository/biocontainers/gtfparse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtfparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtfparse/README.html

