:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pbkdf2-tiny'
.. highlight: bash

perl-pbkdf2-tiny
================

.. conda:recipe:: perl-pbkdf2-tiny
   :replaces_section_title:
   :noindex:

   Minimalist PBKDF2 \(RFC 2898\) with HMAC\-SHA1 or HMAC\-SHA2

   :homepage: https://github.com/dagolden/PBKDF2-Tiny
   :license: apache_2_0
   :recipe: /`perl-pbkdf2-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pbkdf2-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pbkdf2-tiny/meta.yaml>`_

   


.. conda:package:: perl-pbkdf2-tiny

   |downloads_perl-pbkdf2-tiny| |docker_perl-pbkdf2-tiny|

   :versions:
      
      

      ``0.005-2``,  ``0.005-1``,  ``0.005-0``

      

   
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

      mamba install perl-pbkdf2-tiny

   and update with::

      mamba update perl-pbkdf2-tiny

  To create a new environment, run::

      mamba create --name myenvname perl-pbkdf2-tiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pbkdf2-tiny:<tag>

   (see `perl-pbkdf2-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pbkdf2-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-pbkdf2-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pbkdf2-tiny
   :alt:   (downloads)
.. |docker_perl-pbkdf2-tiny| image:: https://quay.io/repository/biocontainers/perl-pbkdf2-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-pbkdf2-tiny
.. _`perl-pbkdf2-tiny/tags`: https://quay.io/repository/biocontainers/perl-pbkdf2-tiny?tab=tags


.. raw:: html

    <script>
        var package = "perl-pbkdf2-tiny";
        var versions = ["0.005","0.005","0.005"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pbkdf2-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pbkdf2-tiny/README.html