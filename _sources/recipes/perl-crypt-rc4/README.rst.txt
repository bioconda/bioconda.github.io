:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-rc4'
.. highlight: bash

perl-crypt-rc4
==============

.. conda:recipe:: perl-crypt-rc4
   :replaces_section_title:
   :noindex:

   Perl implementation of the RC4 encryption algorithm

   :homepage: http://metacpan.org/pod/Crypt-RC4
   :license: unknown
   :recipe: /`perl-crypt-rc4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-rc4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-rc4/meta.yaml>`_

   


.. conda:package:: perl-crypt-rc4

   |downloads_perl-crypt-rc4| |docker_perl-crypt-rc4|

   :versions:
      
      

      ``2.02-2``,  ``2.02-1``,  ``2.02-0``

      

   
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

      mamba install perl-crypt-rc4

   and update with::

      mamba update perl-crypt-rc4

  To create a new environment, run::

      mamba create --name myenvname perl-crypt-rc4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-crypt-rc4:<tag>

   (see `perl-crypt-rc4/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-crypt-rc4| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-rc4.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-rc4
   :alt:   (downloads)
.. |docker_perl-crypt-rc4| image:: https://quay.io/repository/biocontainers/perl-crypt-rc4/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-rc4
.. _`perl-crypt-rc4/tags`: https://quay.io/repository/biocontainers/perl-crypt-rc4?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-rc4";
        var versions = ["2.02","2.02","2.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-rc4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-rc4/README.html