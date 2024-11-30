:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-escape-houdini'
.. highlight: bash

perl-escape-houdini
===================

.. conda:recipe:: perl-escape-houdini/0.3.0
   :replaces_section_title:
   :noindex:

   Perl API to Houdini\, a zero\-dependency C web escaping library

   :homepage: https://github.com/yanick/Escape-Houdini
   :license: perl_5
   :recipe: /`perl-escape-houdini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini>`_/`0.3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini/0.3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini/0.3.0/meta.yaml>`_

   


.. conda:package:: perl-escape-houdini

   |downloads_perl-escape-houdini| |docker_perl-escape-houdini|

   :versions:
      
      

      ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-exporter: 
   :depends perl-module-build: ``0.4234.*``
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

      mamba install perl-escape-houdini

   and update with::

      mamba update perl-escape-houdini

  To create a new environment, run::

      mamba create --name myenvname perl-escape-houdini

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-escape-houdini:<tag>

   (see `perl-escape-houdini/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-escape-houdini| image:: https://img.shields.io/conda/dn/bioconda/perl-escape-houdini.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-escape-houdini
   :alt:   (downloads)
.. |docker_perl-escape-houdini| image:: https://quay.io/repository/biocontainers/perl-escape-houdini/status
   :target: https://quay.io/repository/biocontainers/perl-escape-houdini
.. _`perl-escape-houdini/tags`: https://quay.io/repository/biocontainers/perl-escape-houdini?tab=tags


.. raw:: html

    <script>
        var package = "perl-escape-houdini";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-escape-houdini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-escape-houdini/README.html