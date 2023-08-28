:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-git-wrapper'
.. highlight: bash

perl-git-wrapper
================

.. conda:recipe:: perl-git-wrapper
   :replaces_section_title:
   :noindex:

   Wrap git\(7\) command\-line interface

   :homepage: http://genehack.github.com/Git-Wrapper/
   :license: perl_5
   :recipe: /`perl-git-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper/meta.yaml>`_

   


.. conda:package:: perl-git-wrapper

   |downloads_perl-git-wrapper| |docker_perl-git-wrapper|

   :versions:
      
      

      ``0.048-1``,  ``0.048-0``,  ``0.047-1``,  ``0.047-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-chdir: 
   :depends perl-file-temp: 
   :depends perl-ipc-cmd: 
   :depends perl-sort-versions: 
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

      mamba install perl-git-wrapper

   and update with::

      mamba update perl-git-wrapper

  To create a new environment, run::

      mamba create --name myenvname perl-git-wrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-git-wrapper:<tag>

   (see `perl-git-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-git-wrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-git-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-git-wrapper
   :alt:   (downloads)
.. |docker_perl-git-wrapper| image:: https://quay.io/repository/biocontainers/perl-git-wrapper/status
   :target: https://quay.io/repository/biocontainers/perl-git-wrapper
.. _`perl-git-wrapper/tags`: https://quay.io/repository/biocontainers/perl-git-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "perl-git-wrapper";
        var versions = ["0.048","0.048","0.047","0.047"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-git-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-git-wrapper/README.html