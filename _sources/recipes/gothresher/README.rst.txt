:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gothresher'
.. highlight: bash

gothresher
==========

.. conda:recipe:: gothresher
   :replaces_section_title:
   :noindex:

   GOThresher\: a program to remove annotation biases from protein function annotation datasets

   :homepage: https://github.com/FriedbergLab/GOThresher
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gothresher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gothresher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gothresher/meta.yaml>`_

   GOThresher removes annotation bias from GAF files based on GO term information content\, GO evidence\, annotation source\, number of proteins annotated from a given source\, and date. GOThresher accepts one or more GAF files as input. The motivation for GOThresher lies in the observation that protein function annotations are biased due to high throughput experimental studies. Removing such annotation biases can help present a more balanced picture of protein annotations for a given organism or set of proteins.


.. conda:package:: gothresher

   |downloads_gothresher| |docker_gothresher|

   :versions:
      
      

      ``1.0.29-0``,  ``1.0.28-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.24-0``,  ``1.0.21-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends python: 
   :depends xlsxwriter: 
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

      mamba install gothresher

   and update with::

      mamba update gothresher

  To create a new environment, run::

      mamba create --name myenvname gothresher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gothresher:<tag>

   (see `gothresher/tags`_ for valid values for ``<tag>``)


.. |downloads_gothresher| image:: https://img.shields.io/conda/dn/bioconda/gothresher.svg?style=flat
   :target: https://anaconda.org/bioconda/gothresher
   :alt:   (downloads)
.. |docker_gothresher| image:: https://quay.io/repository/biocontainers/gothresher/status
   :target: https://quay.io/repository/biocontainers/gothresher
.. _`gothresher/tags`: https://quay.io/repository/biocontainers/gothresher?tab=tags


.. raw:: html

    <script>
        var package = "gothresher";
        var versions = ["1.0.29","1.0.28","1.0.27","1.0.26","1.0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gothresher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gothresher/README.html