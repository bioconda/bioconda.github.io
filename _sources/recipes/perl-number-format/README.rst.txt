:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-format'
.. highlight: bash

perl-number-format
==================

.. conda:recipe:: perl-number-format
   :replaces_section_title:
   :noindex:

   Perl extension for formatting numbers

   :homepage: http://metacpan.org/pod/Number::Format
   :license: perl_5
   :recipe: /`perl-number-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-format>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-format/meta.yaml>`_

   


.. conda:package:: perl-number-format

   |downloads_perl-number-format| |docker_perl-number-format|

   :versions:
      
      

      ``1.76-0``,  ``1.75-4``,  ``1.75-3``,  ``1.75-2``,  ``1.75-1``,  ``1.75-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
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

      mamba install perl-number-format

   and update with::

      mamba update perl-number-format

  To create a new environment, run::

      mamba create --name myenvname perl-number-format

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-number-format:<tag>

   (see `perl-number-format/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-format| image:: https://img.shields.io/conda/dn/bioconda/perl-number-format.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-number-format
   :alt:   (downloads)
.. |docker_perl-number-format| image:: https://quay.io/repository/biocontainers/perl-number-format/status
   :target: https://quay.io/repository/biocontainers/perl-number-format
.. _`perl-number-format/tags`: https://quay.io/repository/biocontainers/perl-number-format?tab=tags


.. raw:: html

    <script>
        var package = "perl-number-format";
        var versions = ["1.76","1.75","1.75","1.75","1.75"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-format/README.html