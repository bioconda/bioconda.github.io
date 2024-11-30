:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-compare'
.. highlight: bash

perl-array-compare
==================

.. conda:recipe:: perl-array-compare
   :replaces_section_title:
   :noindex:

   Perl extension for comparing arrays.

   :homepage: http://metacpan.org/pod/Array::Compare
   :license: perl_5
   :recipe: /`perl-array-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-compare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-compare/meta.yaml>`_

   


.. conda:package:: perl-array-compare

   |downloads_perl-array-compare| |docker_perl-array-compare|

   :versions:
      
      

      ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``2.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-moo: 
   :depends perl-type-tiny: 
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

      mamba install perl-array-compare

   and update with::

      mamba update perl-array-compare

  To create a new environment, run::

      mamba create --name myenvname perl-array-compare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-array-compare:<tag>

   (see `perl-array-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-array-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-array-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-compare
   :alt:   (downloads)
.. |docker_perl-array-compare| image:: https://quay.io/repository/biocontainers/perl-array-compare/status
   :target: https://quay.io/repository/biocontainers/perl-array-compare
.. _`perl-array-compare/tags`: https://quay.io/repository/biocontainers/perl-array-compare?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-compare";
        var versions = ["3.0.1","3.0.1","3.0.1","2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-compare/README.html