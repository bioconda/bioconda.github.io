:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-acme-damn'
.. highlight: bash

perl-acme-damn
==============

.. conda:recipe:: perl-acme-damn
   :replaces_section_title:
   :noindex:

   \'Unbless\' Perl objects.

   :homepage: http://metacpan.org/pod/Acme::Damn
   :license: perl_5
   :recipe: /`perl-acme-damn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-acme-damn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-acme-damn/meta.yaml>`_

   


.. conda:package:: perl-acme-damn

   |downloads_perl-acme-damn| |docker_perl-acme-damn|

   :versions:
      
      

      ``0.08-7``,  ``0.08-6``,  ``0.08-5``,  ``0.08-4``,  ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-acme-damn

   and update with::

      mamba update perl-acme-damn

  To create a new environment, run::

      mamba create --name myenvname perl-acme-damn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-acme-damn:<tag>

   (see `perl-acme-damn/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-acme-damn| image:: https://img.shields.io/conda/dn/bioconda/perl-acme-damn.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-acme-damn
   :alt:   (downloads)
.. |docker_perl-acme-damn| image:: https://quay.io/repository/biocontainers/perl-acme-damn/status
   :target: https://quay.io/repository/biocontainers/perl-acme-damn
.. _`perl-acme-damn/tags`: https://quay.io/repository/biocontainers/perl-acme-damn?tab=tags


.. raw:: html

    <script>
        var package = "perl-acme-damn";
        var versions = ["0.08","0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-acme-damn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-acme-damn/README.html