:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-parser'
.. highlight: bash

perl-pod-parser
===============

.. conda:recipe:: perl-pod-parser/1.63
   :replaces_section_title:
   :noindex:

   Modules for parsing\/translating POD format documents

   :homepage: http://metacpan.org/pod/Pod::Parser
   :license: unknown
   :recipe: /`perl-pod-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-parser>`_/`1.63 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-parser/1.63>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-parser/1.63/meta.yaml>`_

   


.. conda:package:: perl-pod-parser

   |downloads_perl-pod-parser| |docker_perl-pod-parser|

   :versions:
      
      

      ``1.63-2``,  ``1.63-1``,  ``1.63-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
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

      mamba install perl-pod-parser

   and update with::

      mamba update perl-pod-parser

  To create a new environment, run::

      mamba create --name myenvname perl-pod-parser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-pod-parser:<tag>

   (see `perl-pod-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-parser
   :alt:   (downloads)
.. |docker_perl-pod-parser| image:: https://quay.io/repository/biocontainers/perl-pod-parser/status
   :target: https://quay.io/repository/biocontainers/perl-pod-parser
.. _`perl-pod-parser/tags`: https://quay.io/repository/biocontainers/perl-pod-parser?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-parser";
        var versions = ["1.63","1.63","1.63"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-parser/README.html