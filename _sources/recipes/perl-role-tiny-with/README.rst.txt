:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-role-tiny-with'
.. highlight: bash

perl-role-tiny-with
===================

.. conda:recipe:: perl-role-tiny-with/2.000005
   :replaces_section_title:
   :noindex:

   Neat interface for consumers of Role\:\:Tiny roles

   :homepage: http://metacpan.org/pod/Role::Tiny::With
   :license: perl_5
   :recipe: /`perl-role-tiny-with <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-role-tiny-with>`_/`2.000005 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-role-tiny-with/2.000005>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-role-tiny-with/2.000005/meta.yaml>`_

   


.. conda:package:: perl-role-tiny-with

   |downloads_perl-role-tiny-with| |docker_perl-role-tiny-with|

   :versions:
      
      

      ``2.000005-2``,  ``2.000005-1``,  ``2.000005-0``

      

   
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

      mamba install perl-role-tiny-with

   and update with::

      mamba update perl-role-tiny-with

  To create a new environment, run::

      mamba create --name myenvname perl-role-tiny-with

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-role-tiny-with:<tag>

   (see `perl-role-tiny-with/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-role-tiny-with| image:: https://img.shields.io/conda/dn/bioconda/perl-role-tiny-with.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-role-tiny-with
   :alt:   (downloads)
.. |docker_perl-role-tiny-with| image:: https://quay.io/repository/biocontainers/perl-role-tiny-with/status
   :target: https://quay.io/repository/biocontainers/perl-role-tiny-with
.. _`perl-role-tiny-with/tags`: https://quay.io/repository/biocontainers/perl-role-tiny-with?tab=tags


.. raw:: html

    <script>
        var package = "perl-role-tiny-with";
        var versions = ["2.000005","2.000005","2.000005"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-role-tiny-with/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-role-tiny-with/README.html