:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-posix'
.. highlight: bash

perl-posix
==========

.. conda:recipe:: perl-posix/1.38_03
   :replaces_section_title:
   :noindex:

   

   :homepage: http://metacpan.org/pod/POSIX
   :license: perl_5
   :recipe: /`perl-posix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix>`_/`1.38_03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix/1.38_03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix/1.38_03/meta.yaml>`_

   


.. conda:package:: perl-posix

   |downloads_perl-posix| |docker_perl-posix|

   :versions:
      
      

      ``1.38_03-2``,  ``1.38_03-1``,  ``1.38_03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-posix

   and update with::

      mamba update perl-posix

  To create a new environment, run::

      mamba create --name myenvname perl-posix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-posix:<tag>

   (see `perl-posix/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-posix| image:: https://img.shields.io/conda/dn/bioconda/perl-posix.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-posix
   :alt:   (downloads)
.. |docker_perl-posix| image:: https://quay.io/repository/biocontainers/perl-posix/status
   :target: https://quay.io/repository/biocontainers/perl-posix
.. _`perl-posix/tags`: https://quay.io/repository/biocontainers/perl-posix?tab=tags


.. raw:: html

    <script>
        var package = "perl-posix";
        var versions = ["1.38_03","1.38_03","1.38_03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-posix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-posix/README.html