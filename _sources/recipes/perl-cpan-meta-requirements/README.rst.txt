:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cpan-meta-requirements'
.. highlight: bash

perl-cpan-meta-requirements
===========================

.. conda:recipe:: perl-cpan-meta-requirements
   :replaces_section_title:
   :noindex:

   a set of version requirements for a CPAN dist

   :homepage: https://github.com/Perl-Toolchain-Gang/CPAN-Meta-Requirements
   :license: perl_5
   :recipe: /`perl-cpan-meta-requirements <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-requirements>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta-requirements/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta-requirements

   |downloads_perl-cpan-meta-requirements| |docker_perl-cpan-meta-requirements|

   :versions:
      
      

      ``2.143-0``,  ``2.142-0``,  ``2.140-1``,  ``2.140-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-version: 
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

      mamba install perl-cpan-meta-requirements

   and update with::

      mamba update perl-cpan-meta-requirements

  To create a new environment, run::

      mamba create --name myenvname perl-cpan-meta-requirements

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cpan-meta-requirements:<tag>

   (see `perl-cpan-meta-requirements/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cpan-meta-requirements| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta-requirements.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cpan-meta-requirements
   :alt:   (downloads)
.. |docker_perl-cpan-meta-requirements| image:: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements
.. _`perl-cpan-meta-requirements/tags`: https://quay.io/repository/biocontainers/perl-cpan-meta-requirements?tab=tags


.. raw:: html

    <script>
        var package = "perl-cpan-meta-requirements";
        var versions = ["2.143","2.142","2.140","2.140"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta-requirements/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta-requirements/README.html