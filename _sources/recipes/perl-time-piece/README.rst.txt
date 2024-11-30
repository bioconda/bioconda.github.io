:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-time-piece'
.. highlight: bash

perl-time-piece
===============

.. conda:recipe:: perl-time-piece/1.27
   :replaces_section_title:
   :noindex:

   Object Oriented time objects

   :homepage: http://metacpan.org/pod/Time::Piece
   :license: perl_5
   :recipe: /`perl-time-piece <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-piece>`_/`1.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-piece/1.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-piece/1.27/meta.yaml>`_

   


.. conda:package:: perl-time-piece

   |downloads_perl-time-piece| |docker_perl-time-piece|

   :versions:
      
      

      ``1.27-2``,  ``1.27-1``,  ``1.27-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-time-piece

   and update with::

      mamba update perl-time-piece

  To create a new environment, run::

      mamba create --name myenvname perl-time-piece

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-time-piece:<tag>

   (see `perl-time-piece/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-time-piece| image:: https://img.shields.io/conda/dn/bioconda/perl-time-piece.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-time-piece
   :alt:   (downloads)
.. |docker_perl-time-piece| image:: https://quay.io/repository/biocontainers/perl-time-piece/status
   :target: https://quay.io/repository/biocontainers/perl-time-piece
.. _`perl-time-piece/tags`: https://quay.io/repository/biocontainers/perl-time-piece?tab=tags


.. raw:: html

    <script>
        var package = "perl-time-piece";
        var versions = ["1.27","1.27","1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-piece/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-piece/README.html