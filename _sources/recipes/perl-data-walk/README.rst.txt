:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-walk'
.. highlight: bash

perl-data-walk
==============

.. conda:recipe:: perl-data-walk/2.01
   :replaces_section_title:
   :noindex:

   Traverse Perl data structures.

   :homepage: http://metacpan.org/pod/Data::Walk
   :license: open_source
   :recipe: /`perl-data-walk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-walk>`_/`2.01 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-walk/2.01>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-walk/2.01/meta.yaml>`_

   


.. conda:package:: perl-data-walk

   |downloads_perl-data-walk| |docker_perl-data-walk|

   :versions:
      
      

      ``2.01-2``,  ``2.01-1``,  ``2.01-0``

      

   
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

      mamba install perl-data-walk

   and update with::

      mamba update perl-data-walk

  To create a new environment, run::

      mamba create --name myenvname perl-data-walk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-walk:<tag>

   (see `perl-data-walk/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-walk| image:: https://img.shields.io/conda/dn/bioconda/perl-data-walk.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-walk
   :alt:   (downloads)
.. |docker_perl-data-walk| image:: https://quay.io/repository/biocontainers/perl-data-walk/status
   :target: https://quay.io/repository/biocontainers/perl-data-walk
.. _`perl-data-walk/tags`: https://quay.io/repository/biocontainers/perl-data-walk?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-walk";
        var versions = ["2.01","2.01","2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-walk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-walk/README.html