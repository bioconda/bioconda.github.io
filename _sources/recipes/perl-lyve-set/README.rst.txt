:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lyve-set'
.. highlight: bash

perl-lyve-set
=============

.. conda:recipe:: perl-lyve-set
   :replaces_section_title:
   :noindex:

   Perl libraries required for Lyve\-SET.

   :homepage: https://github.com/lskatz/lyve-SET
   :license: MIT / MIT
   :recipe: /`perl-lyve-set <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lyve-set>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lyve-set/meta.yaml>`_

   


.. conda:package:: perl-lyve-set

   |downloads_perl-lyve-set| |docker_perl-lyve-set|

   :versions:
      
      

      ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: 
   :depends perl-exporter: 
   :depends perl-number-range: 
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

      mamba install perl-lyve-set

   and update with::

      mamba update perl-lyve-set

  To create a new environment, run::

      mamba create --name myenvname perl-lyve-set

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-lyve-set:<tag>

   (see `perl-lyve-set/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lyve-set| image:: https://img.shields.io/conda/dn/bioconda/perl-lyve-set.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lyve-set
   :alt:   (downloads)
.. |docker_perl-lyve-set| image:: https://quay.io/repository/biocontainers/perl-lyve-set/status
   :target: https://quay.io/repository/biocontainers/perl-lyve-set
.. _`perl-lyve-set/tags`: https://quay.io/repository/biocontainers/perl-lyve-set?tab=tags


.. raw:: html

    <script>
        var package = "perl-lyve-set";
        var versions = ["2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lyve-set/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lyve-set/README.html