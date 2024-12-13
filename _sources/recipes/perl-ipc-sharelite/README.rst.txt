:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-sharelite'
.. highlight: bash

perl-ipc-sharelite
==================

.. conda:recipe:: perl-ipc-sharelite
   :replaces_section_title:
   :noindex:

   Lightweight interface to shared memory

   :homepage: http://metacpan.org/pod/IPC::ShareLite
   :license: perl_5
   :recipe: /`perl-ipc-sharelite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-sharelite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-sharelite/meta.yaml>`_

   


.. conda:package:: perl-ipc-sharelite

   |downloads_perl-ipc-sharelite| |docker_perl-ipc-sharelite|

   :versions:
      
      

      ``0.17-7``,  ``0.17-6``,  ``0.17-5``,  ``0.17-4``,  ``0.17-3``,  ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install perl-ipc-sharelite

   and update with::

      mamba update perl-ipc-sharelite

  To create a new environment, run::

      mamba create --name myenvname perl-ipc-sharelite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ipc-sharelite:<tag>

   (see `perl-ipc-sharelite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ipc-sharelite| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-sharelite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-sharelite
   :alt:   (downloads)
.. |docker_perl-ipc-sharelite| image:: https://quay.io/repository/biocontainers/perl-ipc-sharelite/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-sharelite
.. _`perl-ipc-sharelite/tags`: https://quay.io/repository/biocontainers/perl-ipc-sharelite?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-sharelite";
        var versions = ["0.17","0.17","0.17","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-sharelite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-sharelite/README.html