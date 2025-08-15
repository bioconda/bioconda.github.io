:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-run3'
.. highlight: bash

perl-ipc-run3
=============

.. conda:recipe:: perl-ipc-run3
   :replaces_section_title:
   :noindex:

   Run a subprocess with input\/ouput redirection.

   :homepage: https://metacpan.org/pod/IPC::Run3
   :license: Open-Source
   :recipe: /`perl-ipc-run3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run3/meta.yaml>`_

   


.. conda:package:: perl-ipc-run3

   |downloads_perl-ipc-run3| |docker_perl-ipc-run3|

   :versions:
      
      

      ``0.049-0``,  ``0.048-1``,  ``0.048-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-time-hires: 
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

      mamba install perl-ipc-run3

   and update with::

      mamba update perl-ipc-run3

  To create a new environment, run::

      mamba create --name myenvname perl-ipc-run3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ipc-run3:<tag>

   (see `perl-ipc-run3/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ipc-run3| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-run3.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-run3
   :alt:   (downloads)
.. |docker_perl-ipc-run3| image:: https://quay.io/repository/biocontainers/perl-ipc-run3/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-run3
.. _`perl-ipc-run3/tags`: https://quay.io/repository/biocontainers/perl-ipc-run3?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-run3";
        var versions = ["0.049","0.048","0.048"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-run3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-run3/README.html