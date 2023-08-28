:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-csv_xs'
.. highlight: bash

perl-text-csv_xs
================

.. conda:recipe:: perl-text-csv_xs
   :replaces_section_title:
   :noindex:

   Text\:\:CSV\_XS \- comma\-separated values manipulation routines

   :homepage: https://metacpan.org/pod/Text::CSV_XS
   :license: perl_5
   :recipe: /`perl-text-csv_xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-csv_xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-csv_xs/meta.yaml>`_

   


.. conda:package:: perl-text-csv_xs

   |downloads_perl-text-csv_xs| |docker_perl-text-csv_xs|

   :versions:
      
      

      ``1.48-0``,  ``1.47-2``,  ``1.47-1``,  ``1.47-0``,  ``1.46-0``,  ``1.40-1``,  ``1.40-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-test-harness: 
   :depends perl-text-csv: 
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

      mamba install perl-text-csv_xs

   and update with::

      mamba update perl-text-csv_xs

  To create a new environment, run::

      mamba create --name myenvname perl-text-csv_xs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-csv_xs:<tag>

   (see `perl-text-csv_xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-csv_xs| image:: https://img.shields.io/conda/dn/bioconda/perl-text-csv_xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-csv_xs
   :alt:   (downloads)
.. |docker_perl-text-csv_xs| image:: https://quay.io/repository/biocontainers/perl-text-csv_xs/status
   :target: https://quay.io/repository/biocontainers/perl-text-csv_xs
.. _`perl-text-csv_xs/tags`: https://quay.io/repository/biocontainers/perl-text-csv_xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-csv_xs";
        var versions = ["1.48","1.47","1.47","1.47","1.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-csv_xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-csv_xs/README.html