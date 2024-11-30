:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-lock'
.. highlight: bash

perl-data-lock
==============

.. conda:recipe:: perl-data-lock/1.03
   :replaces_section_title:
   :noindex:

   makes variables \(im\)\?mutable

   :homepage: http://metacpan.org/pod/Data::Lock
   :license: unknown
   :recipe: /`perl-data-lock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-lock>`_/`1.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-lock/1.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-lock/1.03/meta.yaml>`_

   


.. conda:package:: perl-data-lock

   |downloads_perl-data-lock| |docker_perl-data-lock|

   :versions:
      
      

      ``1.03-1``,  ``1.03-0``

      

   
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

      mamba install perl-data-lock

   and update with::

      mamba update perl-data-lock

  To create a new environment, run::

      mamba create --name myenvname perl-data-lock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-lock:<tag>

   (see `perl-data-lock/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-lock| image:: https://img.shields.io/conda/dn/bioconda/perl-data-lock.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-lock
   :alt:   (downloads)
.. |docker_perl-data-lock| image:: https://quay.io/repository/biocontainers/perl-data-lock/status
   :target: https://quay.io/repository/biocontainers/perl-data-lock
.. _`perl-data-lock/tags`: https://quay.io/repository/biocontainers/perl-data-lock?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-lock";
        var versions = ["1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-lock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-lock/README.html