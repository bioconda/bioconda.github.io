:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cpan-meta'
.. highlight: bash

perl-cpan-meta
==============

.. conda:recipe:: perl-cpan-meta
   :replaces_section_title:
   :noindex:

   the distribution metadata for a CPAN dist

   :homepage: https://github.com/dagolden/cpan-meta
   :license: perl_5
   :recipe: /`perl-cpan-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cpan-meta/meta.yaml>`_

   


.. conda:package:: perl-cpan-meta

   |downloads_perl-cpan-meta| |docker_perl-cpan-meta|

   :versions:
      
      

      ``2.150010-1``,  ``2.150010-0``,  ``2.120921-1``,  ``2.120921-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-cpan-meta-requirements: 
   :depends perl-cpan-meta-yaml: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :depends perl-json-pp: 
   :depends perl-version: 
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

      mamba install perl-cpan-meta

   and update with::

      mamba update perl-cpan-meta

  To create a new environment, run::

      mamba create --name myenvname perl-cpan-meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cpan-meta:<tag>

   (see `perl-cpan-meta/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cpan-meta| image:: https://img.shields.io/conda/dn/bioconda/perl-cpan-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cpan-meta
   :alt:   (downloads)
.. |docker_perl-cpan-meta| image:: https://quay.io/repository/biocontainers/perl-cpan-meta/status
   :target: https://quay.io/repository/biocontainers/perl-cpan-meta
.. _`perl-cpan-meta/tags`: https://quay.io/repository/biocontainers/perl-cpan-meta?tab=tags


.. raw:: html

    <script>
        var package = "perl-cpan-meta";
        var versions = ["2.150010","2.150010","2.120921","2.120921"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cpan-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cpan-meta/README.html