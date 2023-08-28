:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gdgraph-histogram'
.. highlight: bash

perl-gdgraph-histogram
======================

.. conda:recipe:: perl-gdgraph-histogram
   :replaces_section_title:
   :noindex:

   Histogram plotting module for Perl5

   :homepage: http://metacpan.org/pod/GDGraph-histogram
   :license: unknown
   :recipe: /`perl-gdgraph-histogram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph-histogram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph-histogram/meta.yaml>`_

   


.. conda:package:: perl-gdgraph-histogram

   |downloads_perl-gdgraph-histogram| |docker_perl-gdgraph-histogram|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgd: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gdgraph: 
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

      mamba install perl-gdgraph-histogram

   and update with::

      mamba update perl-gdgraph-histogram

  To create a new environment, run::

      mamba create --name myenvname perl-gdgraph-histogram

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-gdgraph-histogram:<tag>

   (see `perl-gdgraph-histogram/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gdgraph-histogram| image:: https://img.shields.io/conda/dn/bioconda/perl-gdgraph-histogram.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gdgraph-histogram
   :alt:   (downloads)
.. |docker_perl-gdgraph-histogram| image:: https://quay.io/repository/biocontainers/perl-gdgraph-histogram/status
   :target: https://quay.io/repository/biocontainers/perl-gdgraph-histogram
.. _`perl-gdgraph-histogram/tags`: https://quay.io/repository/biocontainers/perl-gdgraph-histogram?tab=tags


.. raw:: html

    <script>
        var package = "perl-gdgraph-histogram";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdgraph-histogram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdgraph-histogram/README.html