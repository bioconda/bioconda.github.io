:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-hmac'
.. highlight: bash

perl-digest-hmac
================

.. conda:recipe:: perl-digest-hmac
   :replaces_section_title:
   :noindex:

   Keyed\-Hashing for Message Authentication

   :homepage: http://metacpan.org/pod/Digest-HMAC
   :license: perl_5
   :recipe: /`perl-digest-hmac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-hmac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-hmac/meta.yaml>`_

   


.. conda:package:: perl-digest-hmac

   |downloads_perl-digest-hmac| |docker_perl-digest-hmac|

   :versions:
      
      

      ``1.04-0``,  ``1.03-4``,  ``1.03-3``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      

   
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

      mamba install perl-digest-hmac

   and update with::

      mamba update perl-digest-hmac

  To create a new environment, run::

      mamba create --name myenvname perl-digest-hmac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-digest-hmac:<tag>

   (see `perl-digest-hmac/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-hmac| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-hmac.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-hmac
   :alt:   (downloads)
.. |docker_perl-digest-hmac| image:: https://quay.io/repository/biocontainers/perl-digest-hmac/status
   :target: https://quay.io/repository/biocontainers/perl-digest-hmac
.. _`perl-digest-hmac/tags`: https://quay.io/repository/biocontainers/perl-digest-hmac?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-hmac";
        var versions = ["1.04","1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-hmac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-hmac/README.html