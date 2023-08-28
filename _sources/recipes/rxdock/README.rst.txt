:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rxdock'
.. highlight: bash

rxdock
======

.. conda:recipe:: rxdock
   :replaces_section_title:
   :noindex:

   RxDock is a fork of rDock \(GitLab\)\, a fast\, versatile and open\-source program for docking ligands to proteins and nucleic acids.

   :homepage: https://www.rxdock.org
   :developer docs: https://gitlab.com/rxdock/rxdock/
   :license: LGPL-3.0
   :recipe: /`rxdock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rxdock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rxdock/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`rxdock_rbdock`

   


.. conda:package:: rxdock

   |downloads_rxdock| |docker_rxdock|

   :versions:
      
      

      ``2013.1.1_148c5bd1-1``,  ``2013.1.1_148c5bd1-0``,  ``2013.1.0_b93747f3-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends numpy: 
   :depends openbabel: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends python: 
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

      mamba install rxdock

   and update with::

      mamba update rxdock

  To create a new environment, run::

      mamba create --name myenvname rxdock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rxdock:<tag>

   (see `rxdock/tags`_ for valid values for ``<tag>``)


.. |downloads_rxdock| image:: https://img.shields.io/conda/dn/bioconda/rxdock.svg?style=flat
   :target: https://anaconda.org/bioconda/rxdock
   :alt:   (downloads)
.. |docker_rxdock| image:: https://quay.io/repository/biocontainers/rxdock/status
   :target: https://quay.io/repository/biocontainers/rxdock
.. _`rxdock/tags`: https://quay.io/repository/biocontainers/rxdock?tab=tags


.. raw:: html

    <script>
        var package = "rxdock";
        var versions = ["2013.1.1_148c5bd1","2013.1.1_148c5bd1","2013.1.0_b93747f3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rxdock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rxdock/README.html