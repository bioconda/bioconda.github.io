:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sys-info-driver-linux'
.. highlight: bash

perl-sys-info-driver-linux
==========================

.. conda:recipe:: perl-sys-info-driver-linux
   :replaces_section_title:
   :noindex:

   Linux driver for Sys\:\:Info

   :homepage: http://metacpan.org/pod/Sys::Info::Driver::Linux
   :license: perl_5
   :recipe: /`perl-sys-info-driver-linux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-driver-linux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sys-info-driver-linux/meta.yaml>`_

   


.. conda:package:: perl-sys-info-driver-linux

   |downloads_perl-sys-info-driver-linux| |docker_perl-sys-info-driver-linux|

   :versions:
      
      

      ``0.7905-1``,  ``0.7905-0``,  ``0.7904-0``,  ``0.7903-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-config-general: 
   :depends perl-sys-info-base: 
   :depends perl-unix-processors: 
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

      mamba install perl-sys-info-driver-linux

   and update with::

      mamba update perl-sys-info-driver-linux

  To create a new environment, run::

      mamba create --name myenvname perl-sys-info-driver-linux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sys-info-driver-linux:<tag>

   (see `perl-sys-info-driver-linux/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sys-info-driver-linux| image:: https://img.shields.io/conda/dn/bioconda/perl-sys-info-driver-linux.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sys-info-driver-linux
   :alt:   (downloads)
.. |docker_perl-sys-info-driver-linux| image:: https://quay.io/repository/biocontainers/perl-sys-info-driver-linux/status
   :target: https://quay.io/repository/biocontainers/perl-sys-info-driver-linux
.. _`perl-sys-info-driver-linux/tags`: https://quay.io/repository/biocontainers/perl-sys-info-driver-linux?tab=tags


.. raw:: html

    <script>
        var package = "perl-sys-info-driver-linux";
        var versions = ["0.7905","0.7905","0.7904","0.7903"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sys-info-driver-linux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sys-info-driver-linux/README.html