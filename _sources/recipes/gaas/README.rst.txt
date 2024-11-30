:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gaas'
.. highlight: bash

gaas
====

.. conda:recipe:: gaas
   :replaces_section_title:
   :noindex:

   Suite of tools related to Genome Assembly Annotation Service tasks at NBIS.

   :homepage: https://github.com/NBISweden/GAAS
   :license: GPL / GPLv3
   :recipe: /`gaas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gaas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gaas/meta.yaml>`_

   


.. conda:package:: gaas

   |downloads_gaas| |docker_gaas|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends libdb: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bio-eutilities: 
   :depends perl-bioperl: ``>=1.7``
   :depends perl-clone: 
   :depends perl-extutils-makemaker: 
   :depends perl-file-share: 
   :depends perl-file-sharedir-install: 
   :depends perl-graph: 
   :depends perl-lwp-simple: 
   :depends perl-sort-naturally: 
   :depends perl-statistics-r: 
   :depends r-base: ``>=3.5,<3.6.0a0``
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

      mamba install gaas

   and update with::

      mamba update gaas

  To create a new environment, run::

      mamba create --name myenvname gaas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gaas:<tag>

   (see `gaas/tags`_ for valid values for ``<tag>``)


.. |downloads_gaas| image:: https://img.shields.io/conda/dn/bioconda/gaas.svg?style=flat
   :target: https://anaconda.org/bioconda/gaas
   :alt:   (downloads)
.. |docker_gaas| image:: https://quay.io/repository/biocontainers/gaas/status
   :target: https://quay.io/repository/biocontainers/gaas
.. _`gaas/tags`: https://quay.io/repository/biocontainers/gaas?tab=tags


.. raw:: html

    <script>
        var package = "gaas";
        var versions = ["1.2.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gaas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gaas/README.html