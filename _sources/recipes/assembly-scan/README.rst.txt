.. title:: Package Recipe 'assembly-scan'
.. highlight: bash


assembly-scan
=============

.. conda:recipe:: assembly-scan
   :replaces_section_title:

   Assembly summary statistics in JSON format

   :homepage: https://github.com/rpetit3/assembly-scan
   :license: MIT
   :recipe: /`assembly-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-scan/meta.yaml>`_

   


.. conda:package:: assembly-scan

   |downloads_assembly-scan| |docker_assembly-scan|

   :versions: 0.2

   :depends: :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_assembly-scan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assembly-scan

   and update with::

      conda update assembly-scan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/assembly-scan


.. |required_by_assembly-scan| conda:required_by:: assembly-scan
.. |downloads_assembly-scan| image:: https://img.shields.io/conda/dn/bioconda/assembly-scan.svg?style=flat
   :alt:   (downloads)
.. |docker_assembly-scan| image:: https://quay.io/repository/biocontainers/assembly-scan/status
   :target: https://quay.io/repository/biocontainers/assembly-scan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assembly-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assembly-scan/README.html

