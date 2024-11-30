:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matchmsextras'
.. highlight: bash

matchmsextras
=============

.. conda:recipe:: matchmsextras
   :replaces_section_title:
   :noindex:

   Additional network analysis functions for matchms

   :homepage: https://github.com/matchms/matchmsextras
   :license: Apache-2.0
   :recipe: /`matchmsextras <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchmsextras>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchmsextras/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1371/journal.pcbi.1008724`, doi: :doi:`https://doi.org/10.21105/joss.02411`

   


.. conda:package:: matchmsextras

   |downloads_matchmsextras| |docker_matchmsextras|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-0``

      

   
   :depends matchms: ``>=0.11.0``
   :depends networkx: 
   :depends pandas: 
   :depends pubchempy: 
   :depends python: ``>=3.7``
   :depends python-louvain: 
   :depends spec2vec: 
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

      mamba install matchmsextras

   and update with::

      mamba update matchmsextras

  To create a new environment, run::

      mamba create --name myenvname matchmsextras

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/matchmsextras:<tag>

   (see `matchmsextras/tags`_ for valid values for ``<tag>``)


.. |downloads_matchmsextras| image:: https://img.shields.io/conda/dn/bioconda/matchmsextras.svg?style=flat
   :target: https://anaconda.org/bioconda/matchmsextras
   :alt:   (downloads)
.. |docker_matchmsextras| image:: https://quay.io/repository/biocontainers/matchmsextras/status
   :target: https://quay.io/repository/biocontainers/matchmsextras
.. _`matchmsextras/tags`: https://quay.io/repository/biocontainers/matchmsextras?tab=tags


.. raw:: html

    <script>
        var package = "matchmsextras";
        var versions = ["0.4.2","0.4.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matchmsextras/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matchmsextras/README.html