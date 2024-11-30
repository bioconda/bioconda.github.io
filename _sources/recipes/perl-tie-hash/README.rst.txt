:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-hash'
.. highlight: bash

perl-tie-hash
=============

.. conda:recipe:: perl-tie-hash/1.05
   :replaces_section_title:
   :noindex:

   

   :homepage: http://metacpan.org/pod/Tie::Hash
   :license: perl_5
   :recipe: /`perl-tie-hash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash>`_/`1.05 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash/1.05>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash/1.05/meta.yaml>`_

   


.. conda:package:: perl-tie-hash

   |downloads_perl-tie-hash| |docker_perl-tie-hash|

   :versions:
      
      

      ``1.05-2``,  ``1.05-1``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-tie-hash

   and update with::

      mamba update perl-tie-hash

  To create a new environment, run::

      mamba create --name myenvname perl-tie-hash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tie-hash:<tag>

   (see `perl-tie-hash/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-hash| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-hash.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-hash
   :alt:   (downloads)
.. |docker_perl-tie-hash| image:: https://quay.io/repository/biocontainers/perl-tie-hash/status
   :target: https://quay.io/repository/biocontainers/perl-tie-hash
.. _`perl-tie-hash/tags`: https://quay.io/repository/biocontainers/perl-tie-hash?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-hash";
        var versions = ["1.05","1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-hash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-hash/README.html