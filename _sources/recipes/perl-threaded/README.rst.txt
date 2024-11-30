:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-threaded'
.. highlight: bash

perl-threaded
=============

.. conda:recipe:: perl-threaded
   :replaces_section_title:
   :noindex:

   The Perl language.

   :homepage: http://www.perl.org/
   :license: Perl
   :recipe: /`perl-threaded <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-threaded>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-threaded/meta.yaml>`_

   


.. conda:package:: perl-threaded

   |downloads_perl-threaded| |docker_perl-threaded|

   :versions:
      
      

      ``5.32.1-1``,  ``5.26.0-0``,  ``5.22.0-13``,  ``5.22.0-12``,  ``5.22.0-11``,  ``5.22.0-10``,  ``5.22.0-9``,  ``5.22.0-8``

      

   
   :depends perl: 
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

      mamba install perl-threaded

   and update with::

      mamba update perl-threaded

  To create a new environment, run::

      mamba create --name myenvname perl-threaded

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-threaded:<tag>

   (see `perl-threaded/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-threaded| image:: https://img.shields.io/conda/dn/bioconda/perl-threaded.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-threaded
   :alt:   (downloads)
.. |docker_perl-threaded| image:: https://quay.io/repository/biocontainers/perl-threaded/status
   :target: https://quay.io/repository/biocontainers/perl-threaded
.. _`perl-threaded/tags`: https://quay.io/repository/biocontainers/perl-threaded?tab=tags


.. raw:: html

    <script>
        var package = "perl-threaded";
        var versions = ["5.32.1","5.26.0","5.22.0","5.22.0","5.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-threaded/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-threaded/README.html