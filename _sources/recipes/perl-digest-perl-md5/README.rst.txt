:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-perl-md5'
.. highlight: bash

perl-digest-perl-md5
====================

.. conda:recipe:: perl-digest-perl-md5
   :replaces_section_title:
   :noindex:

   Perl Implementation of Rivest\'s MD5 algorithm

   :homepage: http://metacpan.org/pod/Digest-Perl-MD5
   :license: unknown
   :recipe: /`perl-digest-perl-md5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-perl-md5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-perl-md5/meta.yaml>`_

   


.. conda:package:: perl-digest-perl-md5

   |downloads_perl-digest-perl-md5| |docker_perl-digest-perl-md5|

   :versions:
      
      

      ``1.9-2``,  ``1.9-1``,  ``1.9-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-digest-perl-md5

   and update with::

      mamba update perl-digest-perl-md5

  To create a new environment, run::

      mamba create --name myenvname perl-digest-perl-md5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-digest-perl-md5:<tag>

   (see `perl-digest-perl-md5/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-perl-md5| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-perl-md5.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-perl-md5
   :alt:   (downloads)
.. |docker_perl-digest-perl-md5| image:: https://quay.io/repository/biocontainers/perl-digest-perl-md5/status
   :target: https://quay.io/repository/biocontainers/perl-digest-perl-md5
.. _`perl-digest-perl-md5/tags`: https://quay.io/repository/biocontainers/perl-digest-perl-md5?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-perl-md5";
        var versions = ["1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-perl-md5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-perl-md5/README.html