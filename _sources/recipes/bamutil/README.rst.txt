.. title:: Package Recipe 'bamutil'
.. highlight: bash


bamutil
=======

.. conda:recipe:: bamutil
   :replaces_section_title:

   Programs that perform operations on SAM\/BAM files\, all built into a single executable\, bam.

   :homepage: http://genome.sph.umich.edu/wiki/BamUtil
   :license: GPLv3
   :recipe: /`bamutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamutil/meta.yaml>`_
   :links: biotools: :biotools:`Bamutil`

   


.. conda:package:: bamutil

   |downloads_bamutil| |docker_bamutil|

   :versions: 1.0.14

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_bamutil|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamutil

   and update with::

      conda update bamutil

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bamutil


.. |required_by_bamutil| conda:required_by:: bamutil
.. |downloads_bamutil| image:: https://img.shields.io/conda/dn/bioconda/bamutil.svg?style=flat
   :alt:   (downloads)
.. |docker_bamutil| image:: https://quay.io/repository/biocontainers/bamutil/status
   :target: https://quay.io/repository/biocontainers/bamutil







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamutil/README.html

