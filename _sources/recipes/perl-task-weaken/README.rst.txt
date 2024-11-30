:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-task-weaken'
.. highlight: bash

perl-task-weaken
================

.. conda:recipe:: perl-task-weaken
   :replaces_section_title:
   :noindex:

   Ensure that a platform has weaken support

   :homepage: http://metacpan.org/pod/Task-Weaken
   :license: perl_5
   :recipe: /`perl-task-weaken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-task-weaken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-task-weaken/meta.yaml>`_

   


.. conda:package:: perl-task-weaken

   |downloads_perl-task-weaken| |docker_perl-task-weaken|

   :versions:
      
      

      ``1.06-1``,  ``1.06-0``,  ``1.04-1``,  ``1.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-task-weaken

   and update with::

      mamba update perl-task-weaken

  To create a new environment, run::

      mamba create --name myenvname perl-task-weaken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-task-weaken:<tag>

   (see `perl-task-weaken/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-task-weaken| image:: https://img.shields.io/conda/dn/bioconda/perl-task-weaken.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-task-weaken
   :alt:   (downloads)
.. |docker_perl-task-weaken| image:: https://quay.io/repository/biocontainers/perl-task-weaken/status
   :target: https://quay.io/repository/biocontainers/perl-task-weaken
.. _`perl-task-weaken/tags`: https://quay.io/repository/biocontainers/perl-task-weaken?tab=tags


.. raw:: html

    <script>
        var package = "perl-task-weaken";
        var versions = ["1.06","1.06","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-task-weaken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-task-weaken/README.html