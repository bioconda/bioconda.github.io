:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-integer'
.. highlight: bash

perl-integer
============

.. conda:recipe:: perl-integer/1.01
   :replaces_section_title:
   :noindex:

   Perl pragma to use integer arithmetic instead of floating point

   :homepage: http://metacpan.org/pod/integer
   :license: perl_5
   :recipe: /`perl-integer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-integer>`_/`1.01 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-integer/1.01>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-integer/1.01/meta.yaml>`_

   


.. conda:package:: perl-integer

   |downloads_perl-integer| |docker_perl-integer|

   :versions:
      
      

      ``1.01-2``,  ``1.01-1``,  ``1.01-0``

      

   
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

      mamba install perl-integer

   and update with::

      mamba update perl-integer

  To create a new environment, run::

      mamba create --name myenvname perl-integer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-integer:<tag>

   (see `perl-integer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-integer| image:: https://img.shields.io/conda/dn/bioconda/perl-integer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-integer
   :alt:   (downloads)
.. |docker_perl-integer| image:: https://quay.io/repository/biocontainers/perl-integer/status
   :target: https://quay.io/repository/biocontainers/perl-integer
.. _`perl-integer/tags`: https://quay.io/repository/biocontainers/perl-integer?tab=tags


.. raw:: html

    <script>
        var package = "perl-integer";
        var versions = ["1.01","1.01","1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-integer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-integer/README.html