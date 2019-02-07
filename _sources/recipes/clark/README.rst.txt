.. title:: Package Recipe 'clark'
.. highlight: bash


clark
=====

.. conda:recipe:: clark
   :replaces_section_title:

   Fast\, accurate and versatile k\-mer based classification system

   :homepage: http://clark.cs.ucr.edu/
   :license: GPL3
   :recipe: /`clark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clark/meta.yaml>`_
   :links: biotools: :biotools:`clark`, doi: :doi:`10.1186/s12864-015-1419-2`

   


.. conda:package:: clark

   |downloads_clark| |docker_clark|

   :versions: 1.2.5, 1.2.3.1, 1.2.3, 1.2.2_b

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_clark|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clark

   and update with::

      conda update clark

   or use the docker container::

      docker pull quay.io/repository/biocontainers/clark


.. |required_by_clark| conda:required_by:: clark
.. |downloads_clark| image:: https://img.shields.io/conda/dn/bioconda/clark.svg?style=flat
   :alt:   (downloads)
.. |docker_clark| image:: https://quay.io/repository/biocontainers/clark/status
   :target: https://quay.io/repository/biocontainers/clark







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clark/README.html

