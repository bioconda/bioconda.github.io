:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-format'
.. highlight: bash

perl-text-format
================

.. conda:recipe:: perl-text-format
   :replaces_section_title:
   :noindex:

   Format text.

   :homepage: http://www.shlomifish.org/open-source/projects/Text-Format
   :license: Perl_5
   :recipe: /`perl-text-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-format>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-format/meta.yaml>`_

   


.. conda:package:: perl-text-format

   |downloads_perl-text-format| |docker_perl-text-format|

   :versions:
      
      

      ``0.63-0``,  ``0.62-0``,  ``0.59-3``,  ``0.59-2``,  ``0.59-1``,  ``0.59-0``

      

   
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

      mamba install perl-text-format

   and update with::

      mamba update perl-text-format

  To create a new environment, run::

      mamba create --name myenvname perl-text-format

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-format:<tag>

   (see `perl-text-format/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-format| image:: https://img.shields.io/conda/dn/bioconda/perl-text-format.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-format
   :alt:   (downloads)
.. |docker_perl-text-format| image:: https://quay.io/repository/biocontainers/perl-text-format/status
   :target: https://quay.io/repository/biocontainers/perl-text-format
.. _`perl-text-format/tags`: https://quay.io/repository/biocontainers/perl-text-format?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-format";
        var versions = ["0.63","0.62","0.59","0.59","0.59"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-format/README.html