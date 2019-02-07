.. title:: Package Recipe 'bambamc'
.. highlight: bash


bambamc
=======

.. conda:recipe:: bambamc
   :replaces_section_title:

   lightweight C implementation of name collating BAM file input and BAM file output

   :homepage: https://github.com/gt1/bambamc
   :license: GPLv3
   :recipe: /`bambamc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bambamc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bambamc/meta.yaml>`_

   


.. conda:package:: bambamc

   |downloads_bambamc| |docker_bambamc|

   :versions: 0.0.50

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_bambamc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bambamc

   and update with::

      conda update bambamc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bambamc


.. |required_by_bambamc| conda:required_by:: bambamc
.. |downloads_bambamc| image:: https://img.shields.io/conda/dn/bioconda/bambamc.svg?style=flat
   :alt:   (downloads)
.. |docker_bambamc| image:: https://quay.io/repository/biocontainers/bambamc/status
   :target: https://quay.io/repository/biocontainers/bambamc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bambamc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bambamc/README.html

