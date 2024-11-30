:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-sha1'
.. highlight: bash

perl-digest-sha1
================

.. conda:recipe:: perl-digest-sha1
   :replaces_section_title:
   :noindex:

   Perl interface to the SHA\-1 algorithm

   :homepage: http://metacpan.org/pod/Digest::SHA1
   :license: perl_5
   :recipe: /`perl-digest-sha1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha1/meta.yaml>`_

   


.. conda:package:: perl-digest-sha1

   |downloads_perl-digest-sha1| |docker_perl-digest-sha1|

   :versions:
      
      

      ``2.13-7``,  ``2.13-6``,  ``2.13-5``,  ``2.13-4``,  ``2.13-3``,  ``2.13-2``,  ``2.13-1``,  ``2.13-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-digest-sha1

   and update with::

      mamba update perl-digest-sha1

  To create a new environment, run::

      mamba create --name myenvname perl-digest-sha1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-digest-sha1:<tag>

   (see `perl-digest-sha1/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-sha1| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-sha1.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-sha1
   :alt:   (downloads)
.. |docker_perl-digest-sha1| image:: https://quay.io/repository/biocontainers/perl-digest-sha1/status
   :target: https://quay.io/repository/biocontainers/perl-digest-sha1
.. _`perl-digest-sha1/tags`: https://quay.io/repository/biocontainers/perl-digest-sha1?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-sha1";
        var versions = ["2.13","2.13","2.13","2.13","2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-sha1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-sha1/README.html