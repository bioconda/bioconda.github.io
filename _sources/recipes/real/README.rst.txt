.. title:: Package Recipe 'real'
.. highlight: bash


real
====

.. conda:recipe:: real
   :replaces_section_title:

   REad ALigner for Next\-Generation sequencing reads.

   :homepage: https://nms.kcl.ac.uk/informatics/projects/real/?id=man
   :license: file
   :recipe: /`real <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/real>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/real/meta.yaml>`_
   :links: biotools: :biotools:`real`, doi: :doi:`10.1145/1854776.1854801`

   


.. conda:package:: real

   |downloads_real| |docker_real|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_real|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install real

   and update with::

      conda update real

   or use the docker container::

      docker pull quay.io/repository/biocontainers/real


.. |required_by_real| conda:required_by:: real
.. |downloads_real| image:: https://img.shields.io/conda/dn/bioconda/real.svg?style=flat
   :alt:   (downloads)
.. |docker_real| image:: https://quay.io/repository/biocontainers/real/status
   :target: https://quay.io/repository/biocontainers/real







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/real/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/real/README.html

