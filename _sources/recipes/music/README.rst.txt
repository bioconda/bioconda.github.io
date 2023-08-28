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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install music

   and update with::

      mamba update music

  To create a new environment, run::

      mamba create --name myenvname music

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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