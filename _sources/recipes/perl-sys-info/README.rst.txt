:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info'
.. highlight: bash

perl-sys-info
=============

.. conda:recipe:: perl-sys-info
   :replaces_section_title:
   :noindex:

   Fetch information from the host system

   :homepage: http://metacpan.org/pod/Sys::Info
   :license: perl_5
   :recipe: /`perl-sys-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info/meta.yaml>`_

   


.. conda:package:: perl-sys-info

   |downloads_perl-sys-info| |docker_perl-sys-info|

   :versions:
      
      

      ``0.7811-1``,  ``0.7811-0``,  ``0.78-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-sys-info-base: 
   :depends perl-sys-info-driver-linux: 
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

      mamba install perl-sys-info

   and update with::

      mamba update perl-sys-info

  To create a new environment, run::

      mamba create --name myenvname perl-sys-info

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sys-info:<tag>

   (see `perl-sys-info/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sys-info
   :alt:   (downloads)
.. |docker_perl-sys-info| image:: https://quay.io/repository/biocontainers/perl-sys-info/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info
.. _`perl-sys-info/tags`: https://quay.io/repository/biocontainers/perl-sys-info?tab=tags


.. raw:: html

    <script>
        var package = "perl-sys-info";
        var versions = ["0.7811","0.7811","0.78"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info/README.html