:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-set'
.. highlight: bash

perl-array-set
==============

.. conda:recipe:: perl-array-set
   :replaces_section_title:
   :noindex:

   Perform set operations on arrays

   :homepage: https://metacpan.org/release/Array-Set
   :license: perl_5
   :recipe: /`perl-array-set <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-set>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-set/meta.yaml>`_

   


.. conda:package:: perl-array-set

   |downloads_perl-array-set| |docker_perl-array-set|

   :versions:
      
      

      ``0.063-0``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-exporter: ``>=5.57``
   :depends perl-storable: ``>=3.08``
   :depends perl-tie-ixhash: 
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

      mamba install perl-array-set

   and update with::

      mamba update perl-array-set

  To create a new environment, run::

      mamba create --name myenvname perl-array-set

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-array-set:<tag>

   (see `perl-array-set/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-array-set| image:: https://img.shields.io/conda/dn/bioconda/perl-array-set.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-set
   :alt:   (downloads)
.. |docker_perl-array-set| image:: https://quay.io/repository/biocontainers/perl-array-set/status
   :target: https://quay.io/repository/biocontainers/perl-array-set
.. _`perl-array-set/tags`: https://quay.io/repository/biocontainers/perl-array-set?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-set";
        var versions = ["0.063","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-set/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-set/README.html