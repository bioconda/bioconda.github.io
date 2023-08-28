:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-interactive'
.. highlight: bash

perl-io-interactive
===================

.. conda:recipe:: perl-io-interactive
   :replaces_section_title:
   :noindex:

   Utilities for interactive I\/O

   :homepage: https://github.com/briandfoy/io-interactive
   :license: perl_5
   :recipe: /`perl-io-interactive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-interactive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-interactive/meta.yaml>`_

   


.. conda:package:: perl-io-interactive

   |downloads_perl-io-interactive| |docker_perl-io-interactive|

   :versions:
      
      

      ``1.023-0``,  ``1.022-1``,  ``1.022-0``,  ``1.021-2``,  ``1.021-1``

      

   
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

      mamba install perl-io-interactive

   and update with::

      mamba update perl-io-interactive

  To create a new environment, run::

      mamba create --name myenvname perl-io-interactive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-interactive:<tag>

   (see `perl-io-interactive/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-interactive| image:: https://img.shields.io/conda/dn/bioconda/perl-io-interactive.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-interactive
   :alt:   (downloads)
.. |docker_perl-io-interactive| image:: https://quay.io/repository/biocontainers/perl-io-interactive/status
   :target: https://quay.io/repository/biocontainers/perl-io-interactive
.. _`perl-io-interactive/tags`: https://quay.io/repository/biocontainers/perl-io-interactive?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-interactive";
        var versions = ["1.023","1.022","1.022","1.021","1.021"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-interactive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-interactive/README.html