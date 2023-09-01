:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-filesys-df'
.. highlight: bash

perl-filesys-df
===============

.. conda:recipe:: perl-filesys-df
   :replaces_section_title:
   :noindex:

   Perl extension for filesystem disk space information.

   :homepage: http://metacpan.org/pod/Filesys-Df
   :license: unknown
   :recipe: /`perl-filesys-df <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filesys-df>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filesys-df/meta.yaml>`_

   


.. conda:package:: perl-filesys-df

   |downloads_perl-filesys-df| |docker_perl-filesys-df|

   :versions:
      
      

      ``0.92-7``,  ``0.92-6``,  ``0.92-5``,  ``0.92-4``,  ``0.92-3``,  ``0.92-2``,  ``0.92-1``,  ``0.92-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-filesys-df

   and update with::

      mamba update perl-filesys-df

  To create a new environment, run::

      mamba create --name myenvname perl-filesys-df

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-filesys-df:<tag>

   (see `perl-filesys-df/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-filesys-df| image:: https://img.shields.io/conda/dn/bioconda/perl-filesys-df.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-filesys-df
   :alt:   (downloads)
.. |docker_perl-filesys-df| image:: https://quay.io/repository/biocontainers/perl-filesys-df/status
   :target: https://quay.io/repository/biocontainers/perl-filesys-df
.. _`perl-filesys-df/tags`: https://quay.io/repository/biocontainers/perl-filesys-df?tab=tags


.. raw:: html

    <script>
        var package = "perl-filesys-df";
        var versions = ["0.92","0.92","0.92","0.92","0.92"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-filesys-df/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-filesys-df/README.html