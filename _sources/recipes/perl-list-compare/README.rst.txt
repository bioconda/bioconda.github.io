:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-compare'
.. highlight: bash

perl-list-compare
=================

.. conda:recipe:: perl-list-compare/0.53
   :replaces_section_title:
   :noindex:

   Compare elements of two or more lists

   :homepage: http://thenceforward.net/perl/modules/List-Compare/
   :license: perl_5
   :recipe: /`perl-list-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-compare>`_/`0.53 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-compare/0.53>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-compare/0.53/meta.yaml>`_

   


.. conda:package:: perl-list-compare

   |downloads_perl-list-compare| |docker_perl-list-compare|

   :versions:
      
      

      ``0.53-2``,  ``0.53-1``,  ``0.53-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-list-compare

   and update with::

      mamba update perl-list-compare

  To create a new environment, run::

      mamba create --name myenvname perl-list-compare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-list-compare:<tag>

   (see `perl-list-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-list-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-compare
   :alt:   (downloads)
.. |docker_perl-list-compare| image:: https://quay.io/repository/biocontainers/perl-list-compare/status
   :target: https://quay.io/repository/biocontainers/perl-list-compare
.. _`perl-list-compare/tags`: https://quay.io/repository/biocontainers/perl-list-compare?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-compare";
        var versions = ["0.53","0.53","0.53"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-compare/README.html