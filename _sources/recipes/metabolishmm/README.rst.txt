:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabolishmm'
.. highlight: bash

metabolishmm
============

.. conda:recipe:: metabolishmm
   :replaces_section_title:
   :noindex:

   Constructing phylogenies and performing functional annotations with HMM markers.

   :homepage: https://github.com/elizabethmcd/metabolisHMM
   :documentation: https://github.com/elizabethmcd/metabolisHMM/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metabolishmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolishmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolishmm/meta.yaml>`_

   


.. conda:package:: metabolishmm

   |downloads_metabolishmm| |docker_metabolishmm|

   :versions:
      
      

      ``2.22-0``

      

   
   :depends biopython: ``<1.81``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends seaborn-base: 
   :depends setuptools: 
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

      mamba install metabolishmm

   and update with::

      mamba update metabolishmm

  To create a new environment, run::

      mamba create --name myenvname metabolishmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metabolishmm:<tag>

   (see `metabolishmm/tags`_ for valid values for ``<tag>``)


.. |downloads_metabolishmm| image:: https://img.shields.io/conda/dn/bioconda/metabolishmm.svg?style=flat
   :target: https://anaconda.org/bioconda/metabolishmm
   :alt:   (downloads)
.. |docker_metabolishmm| image:: https://quay.io/repository/biocontainers/metabolishmm/status
   :target: https://quay.io/repository/biocontainers/metabolishmm
.. _`metabolishmm/tags`: https://quay.io/repository/biocontainers/metabolishmm?tab=tags


.. raw:: html

    <script>
        var package = "metabolishmm";
        var versions = ["2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabolishmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabolishmm/README.html