:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-list'
.. highlight: bash

perl-module-list
================

.. conda:recipe:: perl-module-list
   :replaces_section_title:
   :noindex:

   module \`directory\' listing

   :homepage: http://metacpan.org/pod/Module::List
   :license: perl_5
   :recipe: /`perl-module-list <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-list>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-list/meta.yaml>`_

   


.. conda:package:: perl-module-list

   |downloads_perl-module-list| |docker_perl-module-list|

   :versions:
      
      

      ``0.004-1``,  ``0.004-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-parent: 
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

      mamba install perl-module-list

   and update with::

      mamba update perl-module-list

  To create a new environment, run::

      mamba create --name myenvname perl-module-list

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-list:<tag>

   (see `perl-module-list/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-list| image:: https://img.shields.io/conda/dn/bioconda/perl-module-list.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-list
   :alt:   (downloads)
.. |docker_perl-module-list| image:: https://quay.io/repository/biocontainers/perl-module-list/status
   :target: https://quay.io/repository/biocontainers/perl-module-list
.. _`perl-module-list/tags`: https://quay.io/repository/biocontainers/perl-module-list?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-list";
        var versions = ["0.004","0.004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-list/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-list/README.html