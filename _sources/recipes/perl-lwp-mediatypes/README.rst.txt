:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lwp-mediatypes'
.. highlight: bash

perl-lwp-mediatypes
===================

.. conda:recipe:: perl-lwp-mediatypes
   :replaces_section_title:
   :noindex:

   guess media type for a file or a URL

   :homepage: http://metacpan.org/pod/LWP::MediaTypes
   :license: perl_5
   :recipe: /`perl-lwp-mediatypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-mediatypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-mediatypes/meta.yaml>`_

   


.. conda:package:: perl-lwp-mediatypes

   |downloads_perl-lwp-mediatypes| |docker_perl-lwp-mediatypes|

   :versions:
      
      

      ``6.04-1``,  ``6.04-0``,  ``6.02-3``,  ``6.02-2``,  ``6.02-1``,  ``6.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
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

      mamba install perl-lwp-mediatypes

   and update with::

      mamba update perl-lwp-mediatypes

  To create a new environment, run::

      mamba create --name myenvname perl-lwp-mediatypes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-lwp-mediatypes:<tag>

   (see `perl-lwp-mediatypes/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lwp-mediatypes| image:: https://img.shields.io/conda/dn/bioconda/perl-lwp-mediatypes.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lwp-mediatypes
   :alt:   (downloads)
.. |docker_perl-lwp-mediatypes| image:: https://quay.io/repository/biocontainers/perl-lwp-mediatypes/status
   :target: https://quay.io/repository/biocontainers/perl-lwp-mediatypes
.. _`perl-lwp-mediatypes/tags`: https://quay.io/repository/biocontainers/perl-lwp-mediatypes?tab=tags


.. raw:: html

    <script>
        var package = "perl-lwp-mediatypes";
        var versions = ["6.04","6.04","6.02","6.02","6.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lwp-mediatypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lwp-mediatypes/README.html