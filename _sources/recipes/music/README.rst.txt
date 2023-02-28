:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'music'
.. highlight: bash

music
=====

.. conda:recipe:: music
   :replaces_section_title:
   :noindex:

   MUltiScale enrIchment Calling for ChIP\-Seq Datasets

   :homepage: http://music.gersteinlab.org
   :license: academic
   :recipe: /`music <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music/meta.yaml>`_

   


.. conda:package:: music

   |downloads_music| |docker_music|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install music

   and update with::

      conda update music

   or use the docker container::

      docker pull quay.io/biocontainers/music:<tag>

   (see `music/tags`_ for valid values for ``<tag>``)


.. |downloads_music| image:: https://img.shields.io/conda/dn/bioconda/music.svg?style=flat
   :target: https://anaconda.org/bioconda/music
   :alt:   (downloads)
.. |docker_music| image:: https://quay.io/repository/biocontainers/music/status
   :target: https://quay.io/repository/biocontainers/music
.. _`music/tags`: https://quay.io/repository/biocontainers/music?tab=tags


.. raw:: html

    <script>
        var package = "music";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/music/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/music/README.html