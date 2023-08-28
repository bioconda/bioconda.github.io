:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motulizer'
.. highlight: bash

motulizer
=========

.. conda:recipe:: motulizer
   :replaces_section_title:
   :noindex:

   making OTUs from genomes\, and stats on them. and even core\-genomes

   :homepage: https://github.com/moritzbuck/mOTUlizer/
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`motulizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motulizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motulizer/meta.yaml>`_

   


.. conda:package:: motulizer

   |downloads_motulizer| |docker_motulizer|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1a0-1``,  ``0.2.1a0-0``

      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends fastani: 
   :depends mmseqs2: 
   :depends python: ``>=3``
   :depends python-igraph: 
   :depends tqdm: 
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

      mamba install motulizer

   and update with::

      mamba update motulizer

  To create a new environment, run::

      mamba create --name myenvname motulizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/motulizer:<tag>

   (see `motulizer/tags`_ for valid values for ``<tag>``)


.. |downloads_motulizer| image:: https://img.shields.io/conda/dn/bioconda/motulizer.svg?style=flat
   :target: https://anaconda.org/bioconda/motulizer
   :alt:   (downloads)
.. |docker_motulizer| image:: https://quay.io/repository/biocontainers/motulizer/status
   :target: https://quay.io/repository/biocontainers/motulizer
.. _`motulizer/tags`: https://quay.io/repository/biocontainers/motulizer?tab=tags


.. raw:: html

    <script>
        var package = "motulizer";
        var versions = ["0.3.2","0.3.1","0.3.1","0.3.1","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motulizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motulizer/README.html