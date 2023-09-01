:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-app-role-log4perl'
.. highlight: bash

perl-moosex-app-role-log4perl
=============================

.. conda:recipe:: perl-moosex-app-role-log4perl
   :replaces_section_title:
   :noindex:

   Add basic Log\:\:Log4perl logging to a MooseX\:\:App application as a role.

   :homepage: https://metacpan.org/pod/MooseX::App::Role::Log4perl
   :license: perl_5
   :recipe: /`perl-moosex-app-role-log4perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app-role-log4perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app-role-log4perl/meta.yaml>`_

   


.. conda:package:: perl-moosex-app-role-log4perl

   |downloads_perl-moosex-app-role-log4perl| |docker_perl-moosex-app-role-log4perl|

   :versions:
      
      

      ``0.03-2``,  ``0.03-1``,  ``0.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-log-log4perl: 
   :depends perl-moosex-app: 
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

      mamba install perl-moosex-app-role-log4perl

   and update with::

      mamba update perl-moosex-app-role-log4perl

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-app-role-log4perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-app-role-log4perl:<tag>

   (see `perl-moosex-app-role-log4perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-app-role-log4perl| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-app-role-log4perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-app-role-log4perl
   :alt:   (downloads)
.. |docker_perl-moosex-app-role-log4perl| image:: https://quay.io/repository/biocontainers/perl-moosex-app-role-log4perl/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-app-role-log4perl
.. _`perl-moosex-app-role-log4perl/tags`: https://quay.io/repository/biocontainers/perl-moosex-app-role-log4perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-app-role-log4perl";
        var versions = ["0.03","0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-app-role-log4perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-app-role-log4perl/README.html