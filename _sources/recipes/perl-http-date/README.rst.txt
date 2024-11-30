:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-date'
.. highlight: bash

perl-http-date
==============

.. conda:recipe:: perl-http-date
   :replaces_section_title:
   :noindex:

   date conversion routines

   :homepage: http://metacpan.org/pod/HTTP::Date
   :license: perl_5
   :recipe: /`perl-http-date <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-date>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-date/meta.yaml>`_

   


.. conda:package:: perl-http-date

   |downloads_perl-http-date| |docker_perl-http-date|

   :versions:
      
      

      ``6.06-0``,  ``6.05-0``,  ``6.02-4``,  ``6.02-3``,  ``6.02-2``,  ``6.02-1``,  ``6.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: 
   :depends perl-time-local: ``>=1.28``
   :depends perl-timedate: 
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

      mamba install perl-http-date

   and update with::

      mamba update perl-http-date

  To create a new environment, run::

      mamba create --name myenvname perl-http-date

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-date:<tag>

   (see `perl-http-date/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-date| image:: https://img.shields.io/conda/dn/bioconda/perl-http-date.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-date
   :alt:   (downloads)
.. |docker_perl-http-date| image:: https://quay.io/repository/biocontainers/perl-http-date/status
   :target: https://quay.io/repository/biocontainers/perl-http-date
.. _`perl-http-date/tags`: https://quay.io/repository/biocontainers/perl-http-date?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-date";
        var versions = ["6.06","6.05","6.02","6.02","6.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-date/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-date/README.html