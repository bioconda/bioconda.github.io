:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-predicate'
.. highlight: bash

perl-data-predicate
===================

.. conda:recipe:: perl-data-predicate
   :replaces_section_title:
   :noindex:

   Predicates are a way of composing logic so it eventually reports a true\/false for a given value

   :homepage: http://metacpan.org/pod/Data::Predicate
   :license: BSD
   :recipe: /`perl-data-predicate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-predicate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-predicate/meta.yaml>`_

   


.. conda:package:: perl-data-predicate

   |downloads_perl-data-predicate| |docker_perl-data-predicate|

   :versions:
      
      

      ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-readonly: 
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

      mamba install perl-data-predicate

   and update with::

      mamba update perl-data-predicate

  To create a new environment, run::

      mamba create --name myenvname perl-data-predicate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-predicate:<tag>

   (see `perl-data-predicate/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-predicate| image:: https://img.shields.io/conda/dn/bioconda/perl-data-predicate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-predicate
   :alt:   (downloads)
.. |docker_perl-data-predicate| image:: https://quay.io/repository/biocontainers/perl-data-predicate/status
   :target: https://quay.io/repository/biocontainers/perl-data-predicate
.. _`perl-data-predicate/tags`: https://quay.io/repository/biocontainers/perl-data-predicate?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-predicate";
        var versions = ["2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-predicate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-predicate/README.html