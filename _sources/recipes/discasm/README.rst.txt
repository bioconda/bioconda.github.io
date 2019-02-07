.. title:: Package Recipe 'discasm'
.. highlight: bash


discasm
=======

.. conda:recipe:: discasm
   :replaces_section_title:

   DISCASM aims to extract reads that map to reference genomes in a discordant fashion and optionally include reads that do not map to the genome at all\, and perform a de novo transcriptome assembly of these reads. DISCASM relies on the output from STAR \(as run via STAR\-Fusion\)\, and supports de novo transcriptome assembly using Trinity or Oases. \- https\:\/\/github.com\/DISCASM\/DISCASM\/wiki

   :homepage: https://github.com/DISCASM/DISCASM
   :license: BSD-3-Clause
   :recipe: /`discasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm/meta.yaml>`_

   


.. conda:package:: discasm

   |downloads_discasm| |docker_discasm|

   :versions: 0.1.3, 0.1.2

   :depends: :conda:package:`oases` >=0.2 :conda:package:`perl` 5.22.0* :conda:package:`pysam` >=0.10.0 :conda:package:`python` 2.7* :conda:package:`star` >=2.4 :conda:package:`trinity` >=2.4 

   :required~by: |required_by_discasm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install discasm

   and update with::

      conda update discasm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/discasm


.. |required_by_discasm| conda:required_by:: discasm
.. |downloads_discasm| image:: https://img.shields.io/conda/dn/bioconda/discasm.svg?style=flat
   :alt:   (downloads)
.. |docker_discasm| image:: https://quay.io/repository/biocontainers/discasm/status
   :target: https://quay.io/repository/biocontainers/discasm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discasm/README.html

