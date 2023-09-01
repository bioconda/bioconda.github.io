:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-number-range'
.. highlight: bash

perl-number-range
=================

.. conda:recipe:: perl-number-range
   :replaces_section_title:
   :noindex:

   Perl extension defining ranges of numbers and testing if a number is found in the range

   :homepage: http://metacpan.org/pod/Number::Range
   :license: perl_5
   :recipe: /`perl-number-range <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-range>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-number-range/meta.yaml>`_

   


.. conda:package:: perl-number-range

   |downloads_perl-number-range| |docker_perl-number-range|

   :versions:
      
      

      ``0.12-2``,  ``0.12-1``,  ``0.12-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
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

      mamba install perl-number-range

   and update with::

      mamba update perl-number-range

  To create a new environment, run::

      mamba create --name myenvname perl-number-range

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-number-range:<tag>

   (see `perl-number-range/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-number-range| image:: https://img.shields.io/conda/dn/bioconda/perl-number-range.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-number-range
   :alt:   (downloads)
.. |docker_perl-number-range| image:: https://quay.io/repository/biocontainers/perl-number-range/status
   :target: https://quay.io/repository/biocontainers/perl-number-range
.. _`perl-number-range/tags`: https://quay.io/repository/biocontainers/perl-number-range?tab=tags


.. raw:: html

    <script>
        var package = "perl-number-range";
        var versions = ["0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-number-range/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-number-range/README.html