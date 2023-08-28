:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-load'
.. highlight: bash

perl-module-load
================

.. conda:recipe:: perl-module-load/0.32
   :replaces_section_title:
   :noindex:

   Load modules in a DWIM style

   :homepage: http://metacpan.org/pod/Module::Load
   :license: perl_5
   :recipe: /`perl-module-load <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load>`_/`0.32 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load/0.32>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load/0.32/meta.yaml>`_

   


.. conda:package:: perl-module-load

   |downloads_perl-module-load| |docker_perl-module-load|

   :versions:
      
      

      ``0.34-0``,  ``0.32-1``,  ``0.32-0``

      

   
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

      mamba install perl-module-load

   and update with::

      mamba update perl-module-load

  To create a new environment, run::

      mamba create --name myenvname perl-module-load

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-load:<tag>

   (see `perl-module-load/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-load| image:: https://img.shields.io/conda/dn/bioconda/perl-module-load.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-load
   :alt:   (downloads)
.. |docker_perl-module-load| image:: https://quay.io/repository/biocontainers/perl-module-load/status
   :target: https://quay.io/repository/biocontainers/perl-module-load
.. _`perl-module-load/tags`: https://quay.io/repository/biocontainers/perl-module-load?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-load";
        var versions = ["0.34","0.32","0.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-load/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-load/README.html