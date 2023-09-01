:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-compare'
.. highlight: bash

perl-data-compare
=================

.. conda:recipe:: perl-data-compare/1.25
   :replaces_section_title:
   :noindex:

   compare perl data structures

   :homepage: http://metacpan.org/pod/Data::Compare
   :license: unknown
   :recipe: /`perl-data-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare>`_/`1.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare/1.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare/1.25/meta.yaml>`_

   


.. conda:package:: perl-data-compare

   |downloads_perl-data-compare| |docker_perl-data-compare|

   :versions:
      
      

      ``1.25-1``,  ``1.25-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-find-rule: 
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

      mamba install perl-data-compare

   and update with::

      mamba update perl-data-compare

  To create a new environment, run::

      mamba create --name myenvname perl-data-compare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-compare:<tag>

   (see `perl-data-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-data-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-compare
   :alt:   (downloads)
.. |docker_perl-data-compare| image:: https://quay.io/repository/biocontainers/perl-data-compare/status
   :target: https://quay.io/repository/biocontainers/perl-data-compare
.. _`perl-data-compare/tags`: https://quay.io/repository/biocontainers/perl-data-compare?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-compare";
        var versions = ["1.25","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-compare/README.html