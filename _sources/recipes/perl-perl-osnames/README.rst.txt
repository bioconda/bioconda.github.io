:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-osnames'
.. highlight: bash

perl-perl-osnames
=================

.. conda:recipe:: perl-perl-osnames
   :replaces_section_title:
   :noindex:

   List possible \$\^O \(\$OSNAME\) values\, with description

   :homepage: https://metacpan.org/release/Perl-osnames
   :license: perl_5
   :recipe: /`perl-perl-osnames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-osnames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-osnames/meta.yaml>`_

   


.. conda:package:: perl-perl-osnames

   |downloads_perl-perl-osnames| |docker_perl-perl-osnames|

   :versions:
      
      

      ``0.122-0``,  ``0.11-3``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: ``>=5.57``
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

      mamba install perl-perl-osnames

   and update with::

      mamba update perl-perl-osnames

  To create a new environment, run::

      mamba create --name myenvname perl-perl-osnames

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-perl-osnames:<tag>

   (see `perl-perl-osnames/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl-osnames| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-osnames.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl-osnames
   :alt:   (downloads)
.. |docker_perl-perl-osnames| image:: https://quay.io/repository/biocontainers/perl-perl-osnames/status
   :target: https://quay.io/repository/biocontainers/perl-perl-osnames
.. _`perl-perl-osnames/tags`: https://quay.io/repository/biocontainers/perl-perl-osnames?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl-osnames";
        var versions = ["0.122","0.11","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-osnames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-osnames/README.html