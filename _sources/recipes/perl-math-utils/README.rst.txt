:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-utils'
.. highlight: bash

perl-math-utils
===============

.. conda:recipe:: perl-math-utils
   :replaces_section_title:
   :noindex:

   Useful mathematical functions not in Perl

   :homepage: http://metacpan.org/pod/Math::Utils
   :license: perl_5
   :recipe: /`perl-math-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-utils/meta.yaml>`_

   


.. conda:package:: perl-math-utils

   |downloads_perl-math-utils| |docker_perl-math-utils|

   :versions:
      
      

      ``1.14-0``,  ``1.13-1``,  ``1.13-0``

      

   
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

      mamba install perl-math-utils

   and update with::

      mamba update perl-math-utils

  To create a new environment, run::

      mamba create --name myenvname perl-math-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-utils:<tag>

   (see `perl-math-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-utils| image:: https://img.shields.io/conda/dn/bioconda/perl-math-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-utils
   :alt:   (downloads)
.. |docker_perl-math-utils| image:: https://quay.io/repository/biocontainers/perl-math-utils/status
   :target: https://quay.io/repository/biocontainers/perl-math-utils
.. _`perl-math-utils/tags`: https://quay.io/repository/biocontainers/perl-math-utils?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-utils";
        var versions = ["1.14","1.13","1.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-utils/README.html