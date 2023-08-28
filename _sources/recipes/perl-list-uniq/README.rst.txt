:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-uniq'
.. highlight: bash

perl-list-uniq
==============

.. conda:recipe:: perl-list-uniq
   :replaces_section_title:
   :noindex:

   extract the unique elements of a list

   :homepage: http://metacpan.org/pod/List::Uniq
   :license: perl_5
   :recipe: /`perl-list-uniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-uniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-uniq/meta.yaml>`_

   


.. conda:package:: perl-list-uniq

   |downloads_perl-list-uniq| |docker_perl-list-uniq|

   :versions:
      
      

      ``0.23-0``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``

      

   
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

      mamba install perl-list-uniq

   and update with::

      mamba update perl-list-uniq

  To create a new environment, run::

      mamba create --name myenvname perl-list-uniq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-list-uniq:<tag>

   (see `perl-list-uniq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-uniq| image:: https://img.shields.io/conda/dn/bioconda/perl-list-uniq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-uniq
   :alt:   (downloads)
.. |docker_perl-list-uniq| image:: https://quay.io/repository/biocontainers/perl-list-uniq/status
   :target: https://quay.io/repository/biocontainers/perl-list-uniq
.. _`perl-list-uniq/tags`: https://quay.io/repository/biocontainers/perl-list-uniq?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-uniq";
        var versions = ["0.23","0.20","0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-uniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-uniq/README.html