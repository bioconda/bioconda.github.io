:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validatevcf'
.. highlight: bash

biopet-validatevcf
==================

.. conda:recipe:: biopet-validatevcf
   :replaces_section_title:

   ValidateVcf validates a VCF file against a reference genomes.

   :homepage: https://github.com/biopet/validatevcf
   :license: MIT
   :recipe: /`biopet-validatevcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatevcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatevcf/meta.yaml>`_

   ValidateVcf validates a VCF file against a reference genomes. It checks if the positions
   present in the VCF are also present on the reference genoome.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatevcf


.. conda:package:: biopet-validatevcf

   |downloads_biopet-validatevcf| |docker_biopet-validatevcf|

   :versions: 0.1-0
   
   :depends openjdk: >=8,<9
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-validatevcf

   and update with::

      conda update biopet-validatevcf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biopet-validatevcf:<tag>

   (see `biopet-validatevcf/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-validatevcf| image:: https://img.shields.io/conda/dn/bioconda/biopet-validatevcf.svg?style=flat
   :alt:   (downloads)
.. |docker_biopet-validatevcf| image:: https://quay.io/repository/biocontainers/biopet-validatevcf/status
   :target: https://quay.io/repository/biocontainers/biopet-validatevcf
.. _`biopet-validatevcf/tags`: https://quay.io/repository/biocontainers/biopet-validatevcf?tab=tags






Notes
-----
biopet\-validatevcf is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatevcf\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatevcf \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validatevcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validatevcf/README.html