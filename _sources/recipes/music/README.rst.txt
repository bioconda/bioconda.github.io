.. title:: Package Recipe 'music'
.. highlight: bash


music
=====

.. conda:recipe:: music
   :replaces_section_title:

   MUltiScale enrIchment Calling for ChIP\-Seq Datasets

   :homepage: http://music.gersteinlab.org
   :license: academic
   :recipe: /`music <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music/meta.yaml>`_

   


.. conda:package:: music

   |downloads_music| |docker_music|

   :versions: 1.0.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_music|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install music

   and update with::

      conda update music

   or use the docker container::

      docker pull quay.io/repository/biocontainers/music


.. |required_by_music| conda:required_by:: music
.. |downloads_music| image:: https://img.shields.io/conda/dn/bioconda/music.svg?style=flat
   :alt:   (downloads)
.. |docker_music| image:: https://quay.io/repository/biocontainers/music/status
   :target: https://quay.io/repository/biocontainers/music







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/music/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/music/README.html

