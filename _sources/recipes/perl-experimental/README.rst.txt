:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-experimental'
.. highlight: bash

perl-experimental
=================

.. conda:recipe:: perl-experimental
   :replaces_section_title:
   :noindex:

   Experimental features made easy

   :homepage: http://metacpan.org/pod/experimental
   :license: perl_5
   :recipe: /`perl-experimental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-experimental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-experimental/meta.yaml>`_

   


.. conda:package:: perl-experimental

   |downloads_perl-experimental| |docker_perl-experimental|

   :versions:
      
      

      ``0.029-0``,  ``0.028-0``,  ``0.027-0``,  ``0.020-1``,  ``0.020-0``

      

   
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

      mamba install perl-experimental

   and update with::

      mamba update perl-experimental

  To create a new environment, run::

      mamba create --name myenvname perl-experimental

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-experimental:<tag>

   (see `perl-experimental/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-experimental| image:: https://img.shields.io/conda/dn/bioconda/perl-experimental.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-experimental
   :alt:   (downloads)
.. |docker_perl-experimental| image:: https://quay.io/repository/biocontainers/perl-experimental/status
   :target: https://quay.io/repository/biocontainers/perl-experimental
.. _`perl-experimental/tags`: https://quay.io/repository/biocontainers/perl-experimental?tab=tags


.. raw:: html

    <script>
        var package = "perl-experimental";
        var versions = ["0.029","0.028","0.027","0.020","0.020"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-experimental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-experimental/README.html