:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-padwalker'
.. highlight: bash

perl-padwalker
==============

.. conda:recipe:: perl-padwalker
   :replaces_section_title:
   :noindex:

   play with other peoples\' lexical variables

   :homepage: http://metacpan.org/pod/PadWalker
   :license: unknown
   :recipe: /`perl-padwalker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-padwalker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-padwalker/meta.yaml>`_

   


.. conda:package:: perl-padwalker

   |downloads_perl-padwalker| |docker_perl-padwalker|

   :versions:
      
      

      ``2.5-4``,  ``2.5-3``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-padwalker

   and update with::

      mamba update perl-padwalker

  To create a new environment, run::

      mamba create --name myenvname perl-padwalker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-padwalker:<tag>

   (see `perl-padwalker/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-padwalker| image:: https://img.shields.io/conda/dn/bioconda/perl-padwalker.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-padwalker
   :alt:   (downloads)
.. |docker_perl-padwalker| image:: https://quay.io/repository/biocontainers/perl-padwalker/status
   :target: https://quay.io/repository/biocontainers/perl-padwalker
.. _`perl-padwalker/tags`: https://quay.io/repository/biocontainers/perl-padwalker?tab=tags


.. raw:: html

    <script>
        var package = "perl-padwalker";
        var versions = ["2.5","2.5","2.5","2.5","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-padwalker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-padwalker/README.html