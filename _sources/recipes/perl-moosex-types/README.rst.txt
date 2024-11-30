:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-types'
.. highlight: bash

perl-moosex-types
=================

.. conda:recipe:: perl-moosex-types
   :replaces_section_title:
   :noindex:

   Organise your Moose types in libraries

   :homepage: https://github.com/moose/MooseX-Types
   :license: perl_5
   :recipe: /`perl-moosex-types <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types/meta.yaml>`_

   


.. conda:package:: perl-moosex-types

   |downloads_perl-moosex-types| |docker_perl-moosex-types|

   :versions:
      
      

      ``0.50-2``,  ``0.50-1``,  ``0.50-0``,  ``0.46-2``,  ``0.46-1``,  ``0.46-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-carp-clan: 
   :depends perl-class-load: 
   :depends perl-devel-globaldestruction: 
   :depends perl-devel-overloadinfo: 
   :depends perl-devel-stacktrace: 
   :depends perl-eval-closure: 
   :depends perl-exporter: 
   :depends perl-module-runtime: 
   :depends perl-moose: 
   :depends perl-mro-compat: 
   :depends perl-namespace-autoclean: 
   :depends perl-package-deprecationmanager: 
   :depends perl-sub-exporter: 
   :depends perl-sub-exporter-formethods: 
   :depends perl-sub-install: 
   :depends perl-sub-name: 
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

      mamba install perl-moosex-types

   and update with::

      mamba update perl-moosex-types

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-types

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-types:<tag>

   (see `perl-moosex-types/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-types| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-types.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-types
   :alt:   (downloads)
.. |docker_perl-moosex-types| image:: https://quay.io/repository/biocontainers/perl-moosex-types/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-types
.. _`perl-moosex-types/tags`: https://quay.io/repository/biocontainers/perl-moosex-types?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-types";
        var versions = ["0.50","0.50","0.50","0.46","0.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-types/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-types/README.html