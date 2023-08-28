:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasflow'
.. highlight: bash

plasflow
========

.. conda:recipe:: plasflow
   :replaces_section_title:
   :noindex:

   PlasFlow \- predicting plasmid sequences in metagenomic data

   :homepage: https://github.com/smaegol/PlasFlow
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`plasflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasflow/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkx1321`

   


.. conda:package:: plasflow

   |downloads_plasflow| |docker_plasflow|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5,<3.6.0a0``
   :depends rpy2: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: 
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

      mamba install plasflow

   and update with::

      mamba update plasflow

  To create a new environment, run::

      mamba create --name myenvname plasflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasflow:<tag>

   (see `plasflow/tags`_ for valid values for ``<tag>``)


.. |downloads_plasflow| image:: https://img.shields.io/conda/dn/bioconda/plasflow.svg?style=flat
   :target: https://anaconda.org/bioconda/plasflow
   :alt:   (downloads)
.. |docker_plasflow| image:: https://quay.io/repository/biocontainers/plasflow/status
   :target: https://quay.io/repository/biocontainers/plasflow
.. _`plasflow/tags`: https://quay.io/repository/biocontainers/plasflow?tab=tags


.. raw:: html

    <script>
        var package = "plasflow";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasflow/README.html