:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-stringprep'
.. highlight: bash

perl-unicode-stringprep
=======================

.. conda:recipe:: perl-unicode-stringprep
   :replaces_section_title:
   :noindex:

   Preparation of Internationalized Strings \(RFC 3454\)

   :homepage: http://metacpan.org/pod/Unicode-Stringprep
   :license: perl_5
   :recipe: /`perl-unicode-stringprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-stringprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-stringprep/meta.yaml>`_

   


.. conda:package:: perl-unicode-stringprep

   |downloads_perl-unicode-stringprep| |docker_perl-unicode-stringprep|

   :versions:
      
      

      ``1.105-3``,  ``1.105-2``,  ``1.105-1``,  ``1.105-0``

      

   
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

      mamba install perl-unicode-stringprep

   and update with::

      mamba update perl-unicode-stringprep

  To create a new environment, run::

      mamba create --name myenvname perl-unicode-stringprep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-stringprep:<tag>

   (see `perl-unicode-stringprep/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-stringprep| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-stringprep.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-stringprep
   :alt:   (downloads)
.. |docker_perl-unicode-stringprep| image:: https://quay.io/repository/biocontainers/perl-unicode-stringprep/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-stringprep
.. _`perl-unicode-stringprep/tags`: https://quay.io/repository/biocontainers/perl-unicode-stringprep?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-stringprep";
        var versions = ["1.105","1.105","1.105","1.105"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-stringprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-stringprep/README.html