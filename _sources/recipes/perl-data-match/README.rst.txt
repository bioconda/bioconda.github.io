:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-match'
.. highlight: bash

perl-data-match
===============

.. conda:recipe:: perl-data-match/0.06
   :replaces_section_title:
   :noindex:

   Complex data structure pattern matching

   :homepage: http://metacpan.org/pod/Data::Match
   :license: unknown
   :recipe: /`perl-data-match <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-match>`_/`0.06 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-match/0.06>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-match/0.06/meta.yaml>`_

   


.. conda:package:: perl-data-match

   |downloads_perl-data-match| |docker_perl-data-match|

   :versions:
      
      

      ``0.06-1``,  ``0.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-compare: 
   :depends perl-data-dumper: 
   :depends perl-string-escape: 
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

      mamba install perl-data-match

   and update with::

      mamba update perl-data-match

  To create a new environment, run::

      mamba create --name myenvname perl-data-match

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-match:<tag>

   (see `perl-data-match/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-match| image:: https://img.shields.io/conda/dn/bioconda/perl-data-match.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-match
   :alt:   (downloads)
.. |docker_perl-data-match| image:: https://quay.io/repository/biocontainers/perl-data-match/status
   :target: https://quay.io/repository/biocontainers/perl-data-match
.. _`perl-data-match/tags`: https://quay.io/repository/biocontainers/perl-data-match?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-match";
        var versions = ["0.06","0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-match/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-match/README.html