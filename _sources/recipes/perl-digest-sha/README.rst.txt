:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-sha'
.. highlight: bash

perl-digest-sha
===============

.. conda:recipe:: perl-digest-sha/5.88
   :replaces_section_title:
   :noindex:

   Perl extension for SHA\-1\/224\/256\/384\/512

   :homepage: http://metacpan.org/pod/Digest::SHA
   :license: perl_5
   :recipe: /`perl-digest-sha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha>`_/`5.88 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88/meta.yaml>`_

   


.. conda:package:: perl-digest-sha

   |downloads_perl-digest-sha| |docker_perl-digest-sha|

   :versions:
      
      

      ``5.88-2``,  ``5.88-1``,  ``5.88-0``

      

   
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

      mamba install perl-digest-sha

   and update with::

      mamba update perl-digest-sha

  To create a new environment, run::

      mamba create --name myenvname perl-digest-sha

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-digest-sha:<tag>

   (see `perl-digest-sha/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-sha| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-sha.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-sha
   :alt:   (downloads)
.. |docker_perl-digest-sha| image:: https://quay.io/repository/biocontainers/perl-digest-sha/status
   :target: https://quay.io/repository/biocontainers/perl-digest-sha
.. _`perl-digest-sha/tags`: https://quay.io/repository/biocontainers/perl-digest-sha?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-sha";
        var versions = ["5.88","5.88","5.88"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-sha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-sha/README.html