:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-role-parameterized'
.. highlight: bash

perl-moosex-role-parameterized
==============================

.. conda:recipe:: perl-moosex-role-parameterized
   :replaces_section_title:
   :noindex:

   Moose roles with composition parameters

   :homepage: https://github.com/moose/MooseX-Role-Parameterized
   :license: perl_5
   :recipe: /`perl-moosex-role-parameterized <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-parameterized>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-parameterized/meta.yaml>`_

   


.. conda:package:: perl-moosex-role-parameterized

   |downloads_perl-moosex-role-parameterized| |docker_perl-moosex-role-parameterized|

   :versions:
      
      

      ``1.11-0``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-module-runtime: 
   :depends perl-moose: ``>=2.0300``
   :depends perl-namespace-autoclean: 
   :depends perl-namespace-clean: 
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

      mamba install perl-moosex-role-parameterized

   and update with::

      mamba update perl-moosex-role-parameterized

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-role-parameterized

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-role-parameterized:<tag>

   (see `perl-moosex-role-parameterized/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-role-parameterized| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-role-parameterized.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-role-parameterized
   :alt:   (downloads)
.. |docker_perl-moosex-role-parameterized| image:: https://quay.io/repository/biocontainers/perl-moosex-role-parameterized/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-role-parameterized
.. _`perl-moosex-role-parameterized/tags`: https://quay.io/repository/biocontainers/perl-moosex-role-parameterized?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-role-parameterized";
        var versions = ["1.11","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-role-parameterized/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-role-parameterized/README.html