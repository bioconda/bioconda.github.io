:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hpcblast'
.. highlight: bash

hpcblast
========

.. conda:recipe:: hpcblast
   :replaces_section_title:
   :noindex:

   A wrapper for NCBI\-BLAST\+ suite which provides a simple and efficient method to accelerate the blast search

   :homepage: https://github.com/yodeng/hpc-blast
   :license: MIT / MIT
   :recipe: /`hpcblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpcblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpcblast/meta.yaml>`_

   hpcblast provides a simple and efficient method for running the NCBI\-BLAST\+ suite program in localhost or the HPC environment \(Sun Grid Engine\). It splits the input sequence file and run all chunked tasks in parallel to accelerate the blast search speed. When there are many sequences in the input file for blast comparison and the running speed is slow\, using hpcblast can significantly improve the performance. All of this can be easy done only by adding the hpc\-blast command at the head of your blast command line.


.. conda:package:: hpcblast

   |downloads_hpcblast| |docker_hpcblast|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends blast: 
   :depends pip: 
   :depends python: ``>=3.5``
   :depends runjob: ``>=2.10.5``
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

      mamba install hpcblast

   and update with::

      mamba update hpcblast

  To create a new environment, run::

      mamba create --name myenvname hpcblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hpcblast:<tag>

   (see `hpcblast/tags`_ for valid values for ``<tag>``)


.. |downloads_hpcblast| image:: https://img.shields.io/conda/dn/bioconda/hpcblast.svg?style=flat
   :target: https://anaconda.org/bioconda/hpcblast
   :alt:   (downloads)
.. |docker_hpcblast| image:: https://quay.io/repository/biocontainers/hpcblast/status
   :target: https://quay.io/repository/biocontainers/hpcblast
.. _`hpcblast/tags`: https://quay.io/repository/biocontainers/hpcblast?tab=tags


.. raw:: html

    <script>
        var package = "hpcblast";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hpcblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hpcblast/README.html