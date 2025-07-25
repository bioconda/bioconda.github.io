:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gdgraph'
.. highlight: bash

perl-gdgraph
============

.. conda:recipe:: perl-gdgraph
   :replaces_section_title:
   :noindex:

   Produces charts with GD.

   :homepage: https://metacpan.org/pod/GDGraph
   :license: perl_5
   :recipe: /`perl-gdgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph/meta.yaml>`_

   


.. conda:package:: perl-gdgraph

   |downloads_perl-gdgraph| |docker_perl-gdgraph|

   :versions:
      
      

      ``1.56-0``,  ``1.54-1``,  ``1.54-0``,  ``1.49-4``,  ``1.49-3``,  ``1.49-2``,  ``1.49-1``,  ``1.49-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gd: 
   :depends perl-gdtextutil: 
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

      mamba install perl-gdgraph

   and update with::

      mamba update perl-gdgraph

  To create a new environment, run::

      mamba create --name myenvname perl-gdgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-gdgraph:<tag>

   (see `perl-gdgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gdgraph| image:: https://img.shields.io/conda/dn/bioconda/perl-gdgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gdgraph
   :alt:   (downloads)
.. |docker_perl-gdgraph| image:: https://quay.io/repository/biocontainers/perl-gdgraph/status
   :target: https://quay.io/repository/biocontainers/perl-gdgraph
.. _`perl-gdgraph/tags`: https://quay.io/repository/biocontainers/perl-gdgraph?tab=tags


.. raw:: html

    <script>
        var package = "perl-gdgraph";
        var versions = ["1.56","1.54","1.54","1.49","1.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdgraph/README.html