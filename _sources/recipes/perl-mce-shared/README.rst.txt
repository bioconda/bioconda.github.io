:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mce-shared'
.. highlight: bash

perl-mce-shared
===============

.. conda:recipe:: perl-mce-shared
   :replaces_section_title:
   :noindex:

   MCE extension for sharing data supporting threads and processes

   :homepage: https://github.com/marioroy/mce-shared
   :license: perl_5
   :recipe: /`perl-mce-shared <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared/meta.yaml>`_

   


.. conda:package:: perl-mce-shared

   |downloads_perl-mce-shared| |docker_perl-mce-shared|

   :versions:
      
      

      ``1.840-1``,  ``1.840-0``,  ``1.839-0``,  ``1.838-0``,  ``1.836-1``,  ``1.836-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-mce: ``>=1.836``
   :depends perl-socket: 
   :depends perl-storable: 
   :depends perl-time-hires: 
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

      mamba install perl-mce-shared

   and update with::

      mamba update perl-mce-shared

  To create a new environment, run::

      mamba create --name myenvname perl-mce-shared

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mce-shared:<tag>

   (see `perl-mce-shared/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mce-shared| image:: https://img.shields.io/conda/dn/bioconda/perl-mce-shared.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mce-shared
   :alt:   (downloads)
.. |docker_perl-mce-shared| image:: https://quay.io/repository/biocontainers/perl-mce-shared/status
   :target: https://quay.io/repository/biocontainers/perl-mce-shared
.. _`perl-mce-shared/tags`: https://quay.io/repository/biocontainers/perl-mce-shared?tab=tags


.. raw:: html

    <script>
        var package = "perl-mce-shared";
        var versions = ["1.840","1.840","1.839","1.838","1.836"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce-shared/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce-shared/README.html