:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-validator'
.. highlight: bash

perl-json-validator
===================

.. conda:recipe:: perl-json-validator
   :replaces_section_title:
   :noindex:

   Validate data against a JSON schema

   :homepage: https://github.com/jhthorsen/json-validator
   :license: artistic_2
   :recipe: /`perl-json-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-validator/meta.yaml>`_

   


.. conda:package:: perl-json-validator

   |downloads_perl-json-validator| |docker_perl-json-validator|

   :versions:
      
      

      ``5.15-0``,  ``5.14-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-mojolicious: 
   :depends perl-yaml-pp: 
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

      mamba install perl-json-validator

   and update with::

      mamba update perl-json-validator

  To create a new environment, run::

      mamba create --name myenvname perl-json-validator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-json-validator:<tag>

   (see `perl-json-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-validator| image:: https://img.shields.io/conda/dn/bioconda/perl-json-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-validator
   :alt:   (downloads)
.. |docker_perl-json-validator| image:: https://quay.io/repository/biocontainers/perl-json-validator/status
   :target: https://quay.io/repository/biocontainers/perl-json-validator
.. _`perl-json-validator/tags`: https://quay.io/repository/biocontainers/perl-json-validator?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-validator";
        var versions = ["5.15","5.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-validator/README.html