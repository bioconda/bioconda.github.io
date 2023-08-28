:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-filter-simple'
.. highlight: bash

perl-filter-simple
==================

.. conda:recipe:: perl-filter-simple/0.91
   :replaces_section_title:
   :noindex:

   Simplified source filtering

   :homepage: http://metacpan.org/pod/Filter::Simple
   :license: perl_5
   :recipe: /`perl-filter-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filter-simple>`_/`0.91 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filter-simple/0.91>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filter-simple/0.91/meta.yaml>`_

   


.. conda:package:: perl-filter-simple

   |downloads_perl-filter-simple| |docker_perl-filter-simple|

   :versions:
      
      

      ``0.91-2``,  ``0.91-1``,  ``0.91-0``

      

   
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

      mamba install perl-filter-simple

   and update with::

      mamba update perl-filter-simple

  To create a new environment, run::

      mamba create --name myenvname perl-filter-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-filter-simple:<tag>

   (see `perl-filter-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-filter-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-filter-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-filter-simple
   :alt:   (downloads)
.. |docker_perl-filter-simple| image:: https://quay.io/repository/biocontainers/perl-filter-simple/status
   :target: https://quay.io/repository/biocontainers/perl-filter-simple
.. _`perl-filter-simple/tags`: https://quay.io/repository/biocontainers/perl-filter-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-filter-simple";
        var versions = ["0.91","0.91","0.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-filter-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-filter-simple/README.html