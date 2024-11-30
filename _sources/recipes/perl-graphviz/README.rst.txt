:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphviz'
.. highlight: bash

perl-graphviz
=============

.. conda:recipe:: perl-graphviz
   :replaces_section_title:
   :noindex:

   Interface to AT\&T\'s GraphViz. Deprecated. See GraphViz2

   :homepage: http://metacpan.org/pod/GraphViz
   :license: perl_5
   :recipe: /`perl-graphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphviz/meta.yaml>`_

   


.. conda:package:: perl-graphviz

   |downloads_perl-graphviz| |docker_perl-graphviz|

   :versions:
      
      

      ``2.24-1``,  ``2.24-0``,  ``2.20-1``

      

   
   :depends graphviz: ``>=2.47.3,<3.0a0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-ipc-run: 
   :depends perl-lib: 
   :depends perl-parse-recdescent: 
   :depends perl-pod-usage: 
   :depends perl-time-hires: 
   :depends perl-xml-twig: 
   :depends perl-xml-xpath: 
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

      mamba install perl-graphviz

   and update with::

      mamba update perl-graphviz

  To create a new environment, run::

      mamba create --name myenvname perl-graphviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-graphviz:<tag>

   (see `perl-graphviz/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graphviz| image:: https://img.shields.io/conda/dn/bioconda/perl-graphviz.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graphviz
   :alt:   (downloads)
.. |docker_perl-graphviz| image:: https://quay.io/repository/biocontainers/perl-graphviz/status
   :target: https://quay.io/repository/biocontainers/perl-graphviz
.. _`perl-graphviz/tags`: https://quay.io/repository/biocontainers/perl-graphviz?tab=tags


.. raw:: html

    <script>
        var package = "perl-graphviz";
        var versions = ["2.24","2.24","2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphviz/README.html