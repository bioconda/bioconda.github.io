:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-accessor'
.. highlight: bash

perl-class-accessor
===================

.. conda:recipe:: perl-class-accessor
   :replaces_section_title:
   :noindex:

   Automated accessor generation

   :homepage: http://metacpan.org/pod/Class::Accessor
   :license: perl_5
   :recipe: /`perl-class-accessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-accessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-accessor/meta.yaml>`_

   


.. conda:package:: perl-class-accessor

   |downloads_perl-class-accessor| |docker_perl-class-accessor|

   :versions:
      
      

      ``0.51-1``,  ``0.51-0``,  ``0.34-1``,  ``0.34-0``

      

   
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

      mamba install perl-class-accessor

   and update with::

      mamba update perl-class-accessor

  To create a new environment, run::

      mamba create --name myenvname perl-class-accessor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-class-accessor:<tag>

   (see `perl-class-accessor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-accessor| image:: https://img.shields.io/conda/dn/bioconda/perl-class-accessor.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-accessor
   :alt:   (downloads)
.. |docker_perl-class-accessor| image:: https://quay.io/repository/biocontainers/perl-class-accessor/status
   :target: https://quay.io/repository/biocontainers/perl-class-accessor
.. _`perl-class-accessor/tags`: https://quay.io/repository/biocontainers/perl-class-accessor?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-accessor";
        var versions = ["0.51","0.51","0.34","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-accessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-accessor/README.html