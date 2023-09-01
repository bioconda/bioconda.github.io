:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-probe-perl'
.. highlight: bash

perl-probe-perl
===============

.. conda:recipe:: perl-probe-perl
   :replaces_section_title:
   :noindex:

   Information about the currently running perl

   :homepage: http://metacpan.org/pod/Probe::Perl
   :license: perl_5
   :recipe: /`perl-probe-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-probe-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-probe-perl/meta.yaml>`_

   


.. conda:package:: perl-probe-perl

   |downloads_perl-probe-perl| |docker_perl-probe-perl|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-probe-perl

   and update with::

      mamba update perl-probe-perl

  To create a new environment, run::

      mamba create --name myenvname perl-probe-perl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-probe-perl:<tag>

   (see `perl-probe-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-probe-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-probe-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-probe-perl
   :alt:   (downloads)
.. |docker_perl-probe-perl| image:: https://quay.io/repository/biocontainers/perl-probe-perl/status
   :target: https://quay.io/repository/biocontainers/perl-probe-perl
.. _`perl-probe-perl/tags`: https://quay.io/repository/biocontainers/perl-probe-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-probe-perl";
        var versions = ["0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-probe-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-probe-perl/README.html