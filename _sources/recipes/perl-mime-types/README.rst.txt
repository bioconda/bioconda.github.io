:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-types'
.. highlight: bash

perl-mime-types
===============

.. conda:recipe:: perl-mime-types
   :replaces_section_title:
   :noindex:

   Definition of MIME types

   :homepage: http://metacpan.org/pod/MIME-Types
   :license: perl_5
   :recipe: /`perl-mime-types <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-types>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-types/meta.yaml>`_

   


.. conda:package:: perl-mime-types

   |downloads_perl-mime-types| |docker_perl-mime-types|

   :versions:
      
      

      ``2.24-0``,  ``2.23-0``,  ``2.22-0``,  ``2.17-1``,  ``2.17-0``,  ``2.12-1``,  ``2.12-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-mime-types

   and update with::

      mamba update perl-mime-types

  To create a new environment, run::

      mamba create --name myenvname perl-mime-types

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mime-types:<tag>

   (see `perl-mime-types/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-types| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-types.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-types
   :alt:   (downloads)
.. |docker_perl-mime-types| image:: https://quay.io/repository/biocontainers/perl-mime-types/status
   :target: https://quay.io/repository/biocontainers/perl-mime-types
.. _`perl-mime-types/tags`: https://quay.io/repository/biocontainers/perl-mime-types?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-types";
        var versions = ["2.24","2.23","2.22","2.17","2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-types/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-types/README.html