:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-role-withoverloading'
.. highlight: bash

perl-moosex-role-withoverloading
================================

.. conda:recipe:: perl-moosex-role-withoverloading
   :replaces_section_title:
   :noindex:

   \(DEPRECATED\) Roles which support overloading

   :homepage: https://github.com/moose/MooseX-Role-WithOverloading
   :license: perl_5
   :recipe: /`perl-moosex-role-withoverloading <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-withoverloading>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-withoverloading/meta.yaml>`_

   


.. conda:package:: perl-moosex-role-withoverloading

   |downloads_perl-moosex-role-withoverloading| |docker_perl-moosex-role-withoverloading|

   :versions:
      
      

      ``0.17-6``,  ``0.17-5``,  ``0.17-4``,  ``0.17-3``,  ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends libcxx: ``>=18``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-aliased: 
   :depends perl-class-load: ``0.25.*``
   :depends perl-devel-globaldestruction: ``0.14.*``
   :depends perl-devel-overloadinfo: ``0.007.*``
   :depends perl-eval-closure: ``0.14.*``
   :depends perl-moose: ``2.2207.*``
   :depends perl-mro-compat: ``0.15.*``
   :depends perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends perl-namespace-clean: ``0.27.*``
   :depends perl-package-deprecationmanager: ``0.18.*``
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

      mamba install perl-moosex-role-withoverloading

   and update with::

      mamba update perl-moosex-role-withoverloading

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-role-withoverloading

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-role-withoverloading:<tag>

   (see `perl-moosex-role-withoverloading/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-role-withoverloading| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-role-withoverloading.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-role-withoverloading
   :alt:   (downloads)
.. |docker_perl-moosex-role-withoverloading| image:: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading
.. _`perl-moosex-role-withoverloading/tags`: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-role-withoverloading";
        var versions = ["0.17","0.17","0.17","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-role-withoverloading/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-role-withoverloading/README.html