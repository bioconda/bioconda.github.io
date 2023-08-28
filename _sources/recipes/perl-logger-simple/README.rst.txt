:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-logger-simple'
.. highlight: bash

perl-logger-simple
==================

.. conda:recipe:: perl-logger-simple
   :replaces_section_title:
   :noindex:

   Implementation of the Simran\-Log\-Log and Simran\-Error\-Error modules

   :homepage: http://metacpan.org/pod/Logger::Simple
   :license: perl_5
   :recipe: /`perl-logger-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-logger-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-logger-simple/meta.yaml>`_

   


.. conda:package:: perl-logger-simple

   |downloads_perl-logger-simple| |docker_perl-logger-simple|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-object-insideout: 
   :depends perl-test-harness: 
   :depends perl-test-pod: 
   :depends perl-time-hires: 
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

      mamba install perl-logger-simple

   and update with::

      mamba update perl-logger-simple

  To create a new environment, run::

      mamba create --name myenvname perl-logger-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-logger-simple:<tag>

   (see `perl-logger-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-logger-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-logger-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-logger-simple
   :alt:   (downloads)
.. |docker_perl-logger-simple| image:: https://quay.io/repository/biocontainers/perl-logger-simple/status
   :target: https://quay.io/repository/biocontainers/perl-logger-simple
.. _`perl-logger-simple/tags`: https://quay.io/repository/biocontainers/perl-logger-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-logger-simple";
        var versions = ["2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-logger-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-logger-simple/README.html