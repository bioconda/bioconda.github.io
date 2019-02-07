.. title:: Package Recipe 'lorma'
.. highlight: bash


lorma
=====

.. conda:recipe:: lorma
   :replaces_section_title:

   LoRMA is a tool for correcting sequencing errors in long reads.

   :homepage: https://www.cs.helsinki.fi/u/lmsalmel/LoRMA/
   :license: GNU Affero General Public License v3.0
   :recipe: /`lorma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorma/meta.yaml>`_

   


.. conda:package:: lorma

   |downloads_lorma| |docker_lorma|

   :versions: 0.4

   :depends: :conda:package:`libgcc`  :conda:package:`lordec`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_lorma|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lorma

   and update with::

      conda update lorma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lorma


.. |required_by_lorma| conda:required_by:: lorma
.. |downloads_lorma| image:: https://img.shields.io/conda/dn/bioconda/lorma.svg?style=flat
   :alt:   (downloads)
.. |docker_lorma| image:: https://quay.io/repository/biocontainers/lorma/status
   :target: https://quay.io/repository/biocontainers/lorma







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorma/README.html

