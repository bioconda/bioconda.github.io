:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parse-recdescent'
.. highlight: bash

perl-parse-recdescent
=====================

.. conda:recipe:: perl-parse-recdescent
   :replaces_section_title:
   :noindex:

   Generate Recursive\-Descent Parsers

   :homepage: http://metacpan.org/pod/Parse-RecDescent
   :license: unknown
   :recipe: /`perl-parse-recdescent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parse-recdescent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parse-recdescent/meta.yaml>`_

   


.. conda:package:: perl-parse-recdescent

   |downloads_perl-parse-recdescent| |docker_perl-parse-recdescent|

   :versions:
      
      

      ``1.967015-1``,  ``1.967015-0``,  ``1.967013-1``,  ``1.967013-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-parse-recdescent

   and update with::

      mamba update perl-parse-recdescent

  To create a new environment, run::

      mamba create --name myenvname perl-parse-recdescent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-parse-recdescent:<tag>

   (see `perl-parse-recdescent/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parse-recdescent| image:: https://img.shields.io/conda/dn/bioconda/perl-parse-recdescent.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parse-recdescent
   :alt:   (downloads)
.. |docker_perl-parse-recdescent| image:: https://quay.io/repository/biocontainers/perl-parse-recdescent/status
   :target: https://quay.io/repository/biocontainers/perl-parse-recdescent
.. _`perl-parse-recdescent/tags`: https://quay.io/repository/biocontainers/perl-parse-recdescent?tab=tags


.. raw:: html

    <script>
        var package = "perl-parse-recdescent";
        var versions = ["1.967015","1.967015","1.967013","1.967013"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parse-recdescent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parse-recdescent/README.html