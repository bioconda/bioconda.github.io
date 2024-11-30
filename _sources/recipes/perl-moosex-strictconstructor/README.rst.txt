:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-strictconstructor'
.. highlight: bash

perl-moosex-strictconstructor
=============================

.. conda:recipe:: perl-moosex-strictconstructor/0.21
   :replaces_section_title:
   :noindex:

   Make your object constructors blow up on unknown attributes

   :homepage: http://metacpan.org/release/MooseX::StrictConstructor
   :license: artistic_2
   :recipe: /`perl-moosex-strictconstructor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-strictconstructor>`_/`0.21 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-strictconstructor/0.21>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-strictconstructor/0.21/meta.yaml>`_

   


.. conda:package:: perl-moosex-strictconstructor

   |downloads_perl-moosex-strictconstructor| |docker_perl-moosex-strictconstructor|

   :versions:
      
      

      ``0.21-1``,  ``0.21-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
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

      mamba install perl-moosex-strictconstructor

   and update with::

      mamba update perl-moosex-strictconstructor

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-strictconstructor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-strictconstructor:<tag>

   (see `perl-moosex-strictconstructor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-strictconstructor| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-strictconstructor.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-strictconstructor
   :alt:   (downloads)
.. |docker_perl-moosex-strictconstructor| image:: https://quay.io/repository/biocontainers/perl-moosex-strictconstructor/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-strictconstructor
.. _`perl-moosex-strictconstructor/tags`: https://quay.io/repository/biocontainers/perl-moosex-strictconstructor?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-strictconstructor";
        var versions = ["0.21","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-strictconstructor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-strictconstructor/README.html