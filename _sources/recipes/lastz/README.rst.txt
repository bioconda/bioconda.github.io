.. title:: Package Recipe 'lastz'
.. highlight: bash


lastz
=====

.. conda:recipe:: lastz
   :replaces_section_title:

   LASTZ is a program for aligning DNA sequences\, a pairwise aligner.

   :homepage: http://www.bx.psu.edu/~rsharris/lastz/
   :license: MIT
   :recipe: /`lastz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz/meta.yaml>`_
   :links: biotools: :biotools:`lastz`

   


.. conda:package:: lastz

   |downloads_lastz| |docker_lastz|

   :versions: 1.0.4, 1.0.2

   :depends: 

   :required~by: |required_by_lastz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lastz

   and update with::

      conda update lastz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lastz


.. |required_by_lastz| conda:required_by:: lastz
.. |downloads_lastz| image:: https://img.shields.io/conda/dn/bioconda/lastz.svg?style=flat
   :alt:   (downloads)
.. |docker_lastz| image:: https://quay.io/repository/biocontainers/lastz/status
   :target: https://quay.io/repository/biocontainers/lastz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lastz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lastz/README.html

