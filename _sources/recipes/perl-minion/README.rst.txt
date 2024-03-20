:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-minion'
.. highlight: bash

perl-minion
===========

.. conda:recipe:: perl-minion
   :replaces_section_title:
   :noindex:

   Job queue

   :homepage: https://mojolicious.org
   :license: Artistic-2.0
   :recipe: /`perl-minion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion/meta.yaml>`_

   


.. conda:package:: perl-minion

   |downloads_perl-minion| |docker_perl-minion|

   :versions:
      
      

      ``10.29-0``,  ``10.28-0``,  ``10.27-0``,  ``10.26-0``,  ``10.25-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-mojo-pg: 
   :depends perl-mojolicious: 
   :depends perl-yaml-libyaml: 
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

      mamba install perl-minion

   and update with::

      mamba update perl-minion

  To create a new environment, run::

      mamba create --name myenvname perl-minion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-minion:<tag>

   (see `perl-minion/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-minion| image:: https://img.shields.io/conda/dn/bioconda/perl-minion.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-minion
   :alt:   (downloads)
.. |docker_perl-minion| image:: https://quay.io/repository/biocontainers/perl-minion/status
   :target: https://quay.io/repository/biocontainers/perl-minion
.. _`perl-minion/tags`: https://quay.io/repository/biocontainers/perl-minion?tab=tags


.. raw:: html

    <script>
        var package = "perl-minion";
        var versions = ["10.29","10.28","10.27","10.26","10.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-minion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-minion/README.html