:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-utilities'
.. highlight: bash

perl-data-utilities
===================

.. conda:recipe:: perl-data-utilities/0.04
   :replaces_section_title:
   :noindex:

   recursively compare Perl datatypes

   :homepage: http://metacpan.org/pod/Data-Utilities
   :license: unknown
   :recipe: /`perl-data-utilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-utilities>`_/`0.04 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-utilities/0.04>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-utilities/0.04/meta.yaml>`_

   


.. conda:package:: perl-data-utilities

   |downloads_perl-data-utilities| |docker_perl-data-utilities|

   :versions:
      
      

      ``0.04-2``,  ``0.04-1``,  ``0.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-clone: 
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

      mamba install perl-data-utilities

   and update with::

      mamba update perl-data-utilities

  To create a new environment, run::

      mamba create --name myenvname perl-data-utilities

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-utilities:<tag>

   (see `perl-data-utilities/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-utilities| image:: https://img.shields.io/conda/dn/bioconda/perl-data-utilities.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-utilities
   :alt:   (downloads)
.. |docker_perl-data-utilities| image:: https://quay.io/repository/biocontainers/perl-data-utilities/status
   :target: https://quay.io/repository/biocontainers/perl-data-utilities
.. _`perl-data-utilities/tags`: https://quay.io/repository/biocontainers/perl-data-utilities?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-utilities";
        var versions = ["0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-utilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-utilities/README.html