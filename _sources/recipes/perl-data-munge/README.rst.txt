:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-munge'
.. highlight: bash

perl-data-munge
===============

.. conda:recipe:: perl-data-munge
   :replaces_section_title:
   :noindex:

   various utility functions

   :homepage: http://metacpan.org/pod/Data::Munge
   :license: perl_5
   :recipe: /`perl-data-munge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-munge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-munge/meta.yaml>`_

   


.. conda:package:: perl-data-munge

   |downloads_perl-data-munge| |docker_perl-data-munge|

   :versions:
      
      

      ``0.097-1``,  ``0.097-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-exporter: 
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

      mamba install perl-data-munge

   and update with::

      mamba update perl-data-munge

  To create a new environment, run::

      mamba create --name myenvname perl-data-munge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-munge:<tag>

   (see `perl-data-munge/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-munge| image:: https://img.shields.io/conda/dn/bioconda/perl-data-munge.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-munge
   :alt:   (downloads)
.. |docker_perl-data-munge| image:: https://quay.io/repository/biocontainers/perl-data-munge/status
   :target: https://quay.io/repository/biocontainers/perl-data-munge
.. _`perl-data-munge/tags`: https://quay.io/repository/biocontainers/perl-data-munge?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-munge";
        var versions = ["0.097","0.097"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-munge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-munge/README.html