:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srax'
.. highlight: bash

srax
====

.. conda:recipe:: srax
   :replaces_section_title:
   :noindex:

   Systematic Resistome Analysis

   :homepage: https://github.com/lgpdevtools/sraX
   :documentation: https://github.com/lgpdevtools/sraX/blob/master/doc/sraX_user_manual.pdf
   
   :license: GPL-3.0-only
   :recipe: /`srax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srax/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2020.00052`

   


.. conda:package:: srax

   |downloads_srax| |docker_srax|

   :versions:
      
      

      ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4-0``

      

   
   :depends blast: ``>=2.9``
   :depends clustalo: ``>=1.2.4``
   :depends diamond: ``>=0.9.29``
   :depends mafft: ``>=7.455``
   :depends muscle: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-env-path: 
   :depends perl-file-path: 
   :depends perl-file-slurp: 
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-io-socket-ssl: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-protocol-https: 
   :depends perl-lwp-simple: 
   :depends perl-net-ssleay: 
   :depends perl-parallel-forkmanager: 
   :depends perl-text-csv: 
   :depends unzip: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install srax

   and update with::

      mamba update srax

  To create a new environment, run::

      mamba create --name myenvname srax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srax:<tag>

   (see `srax/tags`_ for valid values for ``<tag>``)


.. |downloads_srax| image:: https://img.shields.io/conda/dn/bioconda/srax.svg?style=flat
   :target: https://anaconda.org/bioconda/srax
   :alt:   (downloads)
.. |docker_srax| image:: https://quay.io/repository/biocontainers/srax/status
   :target: https://quay.io/repository/biocontainers/srax
.. _`srax/tags`: https://quay.io/repository/biocontainers/srax?tab=tags


.. raw:: html

    <script>
        var package = "srax";
        var versions = ["1.5","1.5","1.5","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srax/README.html