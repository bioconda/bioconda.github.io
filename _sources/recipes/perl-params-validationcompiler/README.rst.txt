:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-validationcompiler'
.. highlight: bash

perl-params-validationcompiler
==============================

.. conda:recipe:: perl-params-validationcompiler
   :replaces_section_title:
   :noindex:

   Build an optimized subroutine parameter validator once\, use it forever

   :homepage: http://metacpan.org/release/Params-ValidationCompiler
   :license: artistic_2
   :recipe: /`perl-params-validationcompiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validationcompiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-validationcompiler/meta.yaml>`_

   


.. conda:package:: perl-params-validationcompiler

   |downloads_perl-params-validationcompiler| |docker_perl-params-validationcompiler|

   :versions:
      
      

      ``0.31-0``,  ``0.30-0``,  ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-b: 
   :depends perl-eval-closure: 
   :depends perl-exception-class: 
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

      mamba install perl-params-validationcompiler

   and update with::

      mamba update perl-params-validationcompiler

  To create a new environment, run::

      mamba create --name myenvname perl-params-validationcompiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-params-validationcompiler:<tag>

   (see `perl-params-validationcompiler/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-params-validationcompiler| image:: https://img.shields.io/conda/dn/bioconda/perl-params-validationcompiler.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-params-validationcompiler
   :alt:   (downloads)
.. |docker_perl-params-validationcompiler| image:: https://quay.io/repository/biocontainers/perl-params-validationcompiler/status
   :target: https://quay.io/repository/biocontainers/perl-params-validationcompiler
.. _`perl-params-validationcompiler/tags`: https://quay.io/repository/biocontainers/perl-params-validationcompiler?tab=tags


.. raw:: html

    <script>
        var package = "perl-params-validationcompiler";
        var versions = ["0.31","0.30","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-validationcompiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-validationcompiler/README.html