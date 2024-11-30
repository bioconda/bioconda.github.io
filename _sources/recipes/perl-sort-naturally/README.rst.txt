:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-naturally'
.. highlight: bash

perl-sort-naturally
===================

.. conda:recipe:: perl-sort-naturally
   :replaces_section_title:
   :noindex:

   sort lexically\, but sort numeral parts numerically

   :homepage: http://metacpan.org/pod/Sort-Naturally
   :license: perl_5
   :recipe: /`perl-sort-naturally <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-naturally>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-naturally/meta.yaml>`_

   


.. conda:package:: perl-sort-naturally

   |downloads_perl-sort-naturally| |docker_perl-sort-naturally|

   :versions:
      
      

      ``1.03-3``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      

   
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

      mamba install perl-sort-naturally

   and update with::

      mamba update perl-sort-naturally

  To create a new environment, run::

      mamba create --name myenvname perl-sort-naturally

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sort-naturally:<tag>

   (see `perl-sort-naturally/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sort-naturally| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-naturally.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-naturally
   :alt:   (downloads)
.. |docker_perl-sort-naturally| image:: https://quay.io/repository/biocontainers/perl-sort-naturally/status
   :target: https://quay.io/repository/biocontainers/perl-sort-naturally
.. _`perl-sort-naturally/tags`: https://quay.io/repository/biocontainers/perl-sort-naturally?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-naturally";
        var versions = ["1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-naturally/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-naturally/README.html