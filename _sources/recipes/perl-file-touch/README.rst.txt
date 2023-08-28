:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-touch'
.. highlight: bash

perl-file-touch
===============

.. conda:recipe:: perl-file-touch
   :replaces_section_title:
   :noindex:

   update file access and modification times\, optionally creating files if needed

   :homepage: https://github.com/neilb/File-Touch
   :license: perl_5
   :recipe: /`perl-file-touch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-touch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-touch/meta.yaml>`_

   


.. conda:package:: perl-file-touch

   |downloads_perl-file-touch| |docker_perl-file-touch|

   :versions:
      
      

      ``0.12-0``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
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

      mamba install perl-file-touch

   and update with::

      mamba update perl-file-touch

  To create a new environment, run::

      mamba create --name myenvname perl-file-touch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-touch:<tag>

   (see `perl-file-touch/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-touch| image:: https://img.shields.io/conda/dn/bioconda/perl-file-touch.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-touch
   :alt:   (downloads)
.. |docker_perl-file-touch| image:: https://quay.io/repository/biocontainers/perl-file-touch/status
   :target: https://quay.io/repository/biocontainers/perl-file-touch
.. _`perl-file-touch/tags`: https://quay.io/repository/biocontainers/perl-file-touch?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-touch";
        var versions = ["0.12","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-touch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-touch/README.html