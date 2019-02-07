.. title:: Package Recipe 'biopet'
.. highlight: bash


biopet
======

.. conda:recipe:: biopet
   :replaces_section_title:

   Biopet \(Bio Pipeline Execution Toolkit\) is the main pipeline development framework of the LUMC Sequencing Analysis Support Core team.

   :homepage: https://github.com/biopet/biopet
   :license: https://github.com/biopet/biopet/blob/develop/biopet-core/src/main/resources/nl/lumc/sasc/biopet/License.txt
   :recipe: /`biopet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet/meta.yaml>`_

   


.. conda:package:: biopet

   |downloads_biopet| |docker_biopet|

   :versions: 0.9.0, 0.8.0, 0.7.0

   :depends: :conda:package:`openjdk`  :conda:package:`python` 2.7* 

   :required~by: |required_by_biopet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet

   and update with::

      conda update biopet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biopet


.. |required_by_biopet| conda:required_by:: biopet
.. |downloads_biopet| image:: https://img.shields.io/conda/dn/bioconda/biopet.svg?style=flat
   :alt:   (downloads)
.. |docker_biopet| image:: https://quay.io/repository/biocontainers/biopet/status
   :target: https://quay.io/repository/biocontainers/biopet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet/README.html

