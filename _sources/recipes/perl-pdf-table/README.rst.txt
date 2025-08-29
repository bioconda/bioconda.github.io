:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pdf-table'
.. highlight: bash

perl-pdf-table
==============

.. conda:recipe:: perl-pdf-table
   :replaces_section_title:
   :noindex:

   A utility class for building table layouts in a PDF\:\:API2 object.

   :homepage: https://metacpan.org/pod/PDF::Table
   :license: Perl_5
   :recipe: /`perl-pdf-table <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-table>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-table/meta.yaml>`_

   


.. conda:package:: perl-pdf-table

   |downloads_perl-pdf-table| |docker_perl-pdf-table|

   :versions:
      
      

      ``1.007-0``,  ``1.005-0``,  ``1.004-0``,  ``1.003-0``,  ``1.002-0``,  ``0.11.0-1``,  ``0.11.0-0``

      

   
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

      mamba install perl-pdf-table

   and update with::

      mamba update perl-pdf-table

  To create a new environment, run::

      mamba create --name myenvname perl-pdf-table

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pdf-table:<tag>

   (see `perl-pdf-table/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pdf-table| image:: https://img.shields.io/conda/dn/bioconda/perl-pdf-table.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pdf-table
   :alt:   (downloads)
.. |docker_perl-pdf-table| image:: https://quay.io/repository/biocontainers/perl-pdf-table/status
   :target: https://quay.io/repository/biocontainers/perl-pdf-table
.. _`perl-pdf-table/tags`: https://quay.io/repository/biocontainers/perl-pdf-table?tab=tags


.. raw:: html

    <script>
        var package = "perl-pdf-table";
        var versions = ["1.007","1.005","1.004","1.003","1.002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pdf-table/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pdf-table/README.html