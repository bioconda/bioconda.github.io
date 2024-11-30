:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-prefork'
.. highlight: bash

perl-prefork
============

.. conda:recipe:: perl-prefork/1.05
   :replaces_section_title:
   :noindex:

   Optimized module loading for forking or non\-forking processes

   :homepage: https://github.com/karenetheridge/prefork
   :license: perl_5
   :recipe: /`perl-prefork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork>`_/`1.05 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork/1.05>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-prefork/1.05/meta.yaml>`_

   


.. conda:package:: perl-prefork

   |downloads_perl-prefork| |docker_perl-prefork|

   :versions:
      
      

      ``1.05-1``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
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

      mamba install perl-prefork

   and update with::

      mamba update perl-prefork

  To create a new environment, run::

      mamba create --name myenvname perl-prefork

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-prefork:<tag>

   (see `perl-prefork/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-prefork| image:: https://img.shields.io/conda/dn/bioconda/perl-prefork.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-prefork
   :alt:   (downloads)
.. |docker_perl-prefork| image:: https://quay.io/repository/biocontainers/perl-prefork/status
   :target: https://quay.io/repository/biocontainers/perl-prefork
.. _`perl-prefork/tags`: https://quay.io/repository/biocontainers/perl-prefork?tab=tags


.. raw:: html

    <script>
        var package = "perl-prefork";
        var versions = ["1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-prefork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-prefork/README.html