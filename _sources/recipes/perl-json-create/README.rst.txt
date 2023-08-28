:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json-create'
.. highlight: bash

perl-json-create
================

.. conda:recipe:: perl-json-create
   :replaces_section_title:
   :noindex:

   fast\, minimal\, UTF\-8\-only serialization of data to JSON

   :homepage: http://metacpan.org/pod/JSON::Create
   :license: perl_5
   :recipe: /`perl-json-create <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-create>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-create/meta.yaml>`_

   


.. conda:package:: perl-json-create

   |downloads_perl-json-create| |docker_perl-json-create|

   :versions:
      
      

      ``0.35-2``,  ``0.35-1``,  ``0.35-0``,  ``0.24-3``,  ``0.24-2``,  ``0.24-1``,  ``0.24-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-json-parse: ``>=0.60``
   :depends perl-unicode-utf8: ``>=0.62``
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

      mamba install perl-json-create

   and update with::

      mamba update perl-json-create

  To create a new environment, run::

      mamba create --name myenvname perl-json-create

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-json-create:<tag>

   (see `perl-json-create/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-json-create| image:: https://img.shields.io/conda/dn/bioconda/perl-json-create.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json-create
   :alt:   (downloads)
.. |docker_perl-json-create| image:: https://quay.io/repository/biocontainers/perl-json-create/status
   :target: https://quay.io/repository/biocontainers/perl-json-create
.. _`perl-json-create/tags`: https://quay.io/repository/biocontainers/perl-json-create?tab=tags


.. raw:: html

    <script>
        var package = "perl-json-create";
        var versions = ["0.35","0.35","0.35","0.24","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-create/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-create/README.html