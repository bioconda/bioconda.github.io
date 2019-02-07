.. title:: Package Recipe 'sis'
.. highlight: bash


sis
===

.. conda:recipe:: sis
   :replaces_section_title:

   A tool that uses mummer to scaffold small genomes.

   :homepage: http://marte.ic.unicamp.br:8747/
   :license: GPLv2+
   :recipe: /`sis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sis/meta.yaml>`_

   


.. conda:package:: sis

   |downloads_sis| |docker_sis|

   :versions: 0.1.2, 0.1.0

   :depends: :conda:package:`mummer`  :conda:package:`perl` 5.22.0* :conda:package:`python` 3.5* 

   :required~by: |required_by_sis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sis

   and update with::

      conda update sis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sis


.. |required_by_sis| conda:required_by:: sis
.. |downloads_sis| image:: https://img.shields.io/conda/dn/bioconda/sis.svg?style=flat
   :alt:   (downloads)
.. |docker_sis| image:: https://quay.io/repository/biocontainers/sis/status
   :target: https://quay.io/repository/biocontainers/sis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sis/README.html

