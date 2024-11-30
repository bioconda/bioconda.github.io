:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-estscan1'
.. highlight: bash

perl-estscan1
=============

.. conda:recipe:: perl-estscan1/1.3
   :replaces_section_title:
   :noindex:

   Detects coding regions in DNA sequences even if they are of low quality. ESTScan.pm contains the Perl part of the code that reads in the matrices file. The C code that does the actual computation is located in estscan.c.

   :homepage: http://estscan.sourceforge.net
   :license: open source
   :recipe: /`perl-estscan1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan1>`_/`1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan1/1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-estscan1/1.3/meta.yaml>`_

   


.. conda:package:: perl-estscan1

   |downloads_perl-estscan1| |docker_perl-estscan1|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-btlib: 
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

      mamba install perl-estscan1

   and update with::

      mamba update perl-estscan1

  To create a new environment, run::

      mamba create --name myenvname perl-estscan1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-estscan1:<tag>

   (see `perl-estscan1/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-estscan1| image:: https://img.shields.io/conda/dn/bioconda/perl-estscan1.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-estscan1
   :alt:   (downloads)
.. |docker_perl-estscan1| image:: https://quay.io/repository/biocontainers/perl-estscan1/status
   :target: https://quay.io/repository/biocontainers/perl-estscan1
.. _`perl-estscan1/tags`: https://quay.io/repository/biocontainers/perl-estscan1?tab=tags


.. raw:: html

    <script>
        var package = "perl-estscan1";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-estscan1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-estscan1/README.html