:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marvel'
.. highlight: bash

marvel
======

.. conda:recipe:: marvel
   :replaces_section_title:
   :noindex:

   MARVEL\: Metagenomic Analyses and Retrieval of Viral Elements 

   :homepage: http://github.com/quadram-institute-bioscience/marvel/
   :license: GPL3
   :recipe: /`marvel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marvel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marvel/meta.yaml>`_

   


.. conda:package:: marvel

   |downloads_marvel| |docker_marvel|

   :versions:
      
      

      ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends prokka: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install marvel

   and update with::

      mamba update marvel

  To create a new environment, run::

      mamba create --name myenvname marvel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/marvel:<tag>

   (see `marvel/tags`_ for valid values for ``<tag>``)


.. |downloads_marvel| image:: https://img.shields.io/conda/dn/bioconda/marvel.svg?style=flat
   :target: https://anaconda.org/bioconda/marvel
   :alt:   (downloads)
.. |docker_marvel| image:: https://quay.io/repository/biocontainers/marvel/status
   :target: https://quay.io/repository/biocontainers/marvel
.. _`marvel/tags`: https://quay.io/repository/biocontainers/marvel?tab=tags


.. raw:: html

    <script>
        var package = "marvel";
        var versions = ["0.2","0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marvel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marvel/README.html