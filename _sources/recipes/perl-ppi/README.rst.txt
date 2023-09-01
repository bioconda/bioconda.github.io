:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ppi'
.. highlight: bash

perl-ppi
========

.. conda:recipe:: perl-ppi/1.236
   :replaces_section_title:
   :noindex:

   Parse\, Analyze and Manipulate Perl \(without perl\)

   :homepage: https://github.com/adamkennedy/PPI
   :license: perl_5
   :recipe: /`perl-ppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi>`_/`1.236 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ppi/1.236/meta.yaml>`_

   


.. conda:package:: perl-ppi

   |downloads_perl-ppi| |docker_perl-ppi|

   :versions:
      
      

      ``1.236-3``,  ``1.236-2``,  ``1.236-1``,  ``1.236-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-xsaccessor: 
   :depends perl-clone: 
   :depends perl-digest-md5: 
   :depends perl-file-remove: 
   :depends perl-file-spec: 
   :depends perl-hook-lexwrap: 
   :depends perl-io-string: 
   :depends perl-list-moreutils: 
   :depends perl-params-util: 
   :depends perl-task-weaken: 
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

      mamba install perl-ppi

   and update with::

      mamba update perl-ppi

  To create a new environment, run::

      mamba create --name myenvname perl-ppi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ppi:<tag>

   (see `perl-ppi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ppi| image:: https://img.shields.io/conda/dn/bioconda/perl-ppi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ppi
   :alt:   (downloads)
.. |docker_perl-ppi| image:: https://quay.io/repository/biocontainers/perl-ppi/status
   :target: https://quay.io/repository/biocontainers/perl-ppi
.. _`perl-ppi/tags`: https://quay.io/repository/biocontainers/perl-ppi?tab=tags


.. raw:: html

    <script>
        var package = "perl-ppi";
        var versions = ["1.236","1.236","1.236","1.236"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ppi/README.html