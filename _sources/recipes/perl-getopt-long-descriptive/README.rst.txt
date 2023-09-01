:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-getopt-long-descriptive'
.. highlight: bash

perl-getopt-long-descriptive
============================

.. conda:recipe:: perl-getopt-long-descriptive
   :replaces_section_title:
   :noindex:

   Getopt\:\:Long\, but simpler and more powerful

   :homepage: https://github.com/rjbs/Getopt-Long-Descriptive
   :license: perl_5
   :recipe: /`perl-getopt-long-descriptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long-descriptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long-descriptive/meta.yaml>`_

   


.. conda:package:: perl-getopt-long-descriptive

   |downloads_perl-getopt-long-descriptive| |docker_perl-getopt-long-descriptive|

   :versions:
      
      

      ``0.111-0``,  ``0.110-0``,  ``0.104-1``,  ``0.104-0``,  ``0.103-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-getopt-long: 
   :depends perl-params-validate: 
   :depends perl-sub-exporter: 
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

      mamba install perl-getopt-long-descriptive

   and update with::

      mamba update perl-getopt-long-descriptive

  To create a new environment, run::

      mamba create --name myenvname perl-getopt-long-descriptive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-getopt-long-descriptive:<tag>

   (see `perl-getopt-long-descriptive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-getopt-long-descriptive| image:: https://img.shields.io/conda/dn/bioconda/perl-getopt-long-descriptive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-getopt-long-descriptive
   :alt:   (downloads)
.. |docker_perl-getopt-long-descriptive| image:: https://quay.io/repository/biocontainers/perl-getopt-long-descriptive/status
   :target: https://quay.io/repository/biocontainers/perl-getopt-long-descriptive
.. _`perl-getopt-long-descriptive/tags`: https://quay.io/repository/biocontainers/perl-getopt-long-descriptive?tab=tags


.. raw:: html

    <script>
        var package = "perl-getopt-long-descriptive";
        var versions = ["0.111","0.110","0.104","0.104","0.103"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-getopt-long-descriptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-getopt-long-descriptive/README.html