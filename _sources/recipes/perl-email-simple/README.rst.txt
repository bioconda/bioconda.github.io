:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-email-simple'
.. highlight: bash

perl-email-simple
=================

.. conda:recipe:: perl-email-simple
   :replaces_section_title:
   :noindex:

   simple parsing of RFC2822 message format and headers

   :homepage: https://github.com/rjbs/Email-Simple
   :license: perl_5
   :recipe: /`perl-email-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-email-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-email-simple/meta.yaml>`_

   


.. conda:package:: perl-email-simple

   |downloads_perl-email-simple| |docker_perl-email-simple|

   :versions:
      
      

      ``2.218-0``,  ``2.216-1``,  ``2.216-0``

      

   
   :depends perl-carp: 
   :depends perl-email-date-format: 
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

      mamba install perl-email-simple

   and update with::

      mamba update perl-email-simple

  To create a new environment, run::

      mamba create --name myenvname perl-email-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-email-simple:<tag>

   (see `perl-email-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-email-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-email-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-email-simple
   :alt:   (downloads)
.. |docker_perl-email-simple| image:: https://quay.io/repository/biocontainers/perl-email-simple/status
   :target: https://quay.io/repository/biocontainers/perl-email-simple
.. _`perl-email-simple/tags`: https://quay.io/repository/biocontainers/perl-email-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-email-simple";
        var versions = ["2.218","2.216","2.216"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-email-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-email-simple/README.html