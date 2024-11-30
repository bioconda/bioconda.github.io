:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'latentstrainanalysis'
.. highlight: bash

latentstrainanalysis
====================

.. conda:recipe:: latentstrainanalysis
   :replaces_section_title:
   :noindex:

   Partitioning and analysis methods for large\, complex sequence datasets

   :homepage: https://github.com/brian-cleary/LatentStrainAnalysis
   :license: MIT
   :recipe: /`latentstrainanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latentstrainanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/latentstrainanalysis/meta.yaml>`_

   LSA was developed as a pre\-assembly tool for partitioning metagenomic reads.
   It uses a hyperplane hashing function and streaming SVD in order to find
   covariance relations between k\-mers. The code\, and the process outline in
   LSFScripts in particular\, have been optimized to scale to massive data
   sets in fixed memory with a highly distributed computing environment.



.. conda:package:: latentstrainanalysis

   |downloads_latentstrainanalysis| |docker_latentstrainanalysis|

   :versions:
      
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends gensim: 
   :depends numpy: 
   :depends parallel: 
   :depends pyro4: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install latentstrainanalysis

   and update with::

      mamba update latentstrainanalysis

  To create a new environment, run::

      mamba create --name myenvname latentstrainanalysis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/latentstrainanalysis:<tag>

   (see `latentstrainanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_latentstrainanalysis| image:: https://img.shields.io/conda/dn/bioconda/latentstrainanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/latentstrainanalysis
   :alt:   (downloads)
.. |docker_latentstrainanalysis| image:: https://quay.io/repository/biocontainers/latentstrainanalysis/status
   :target: https://quay.io/repository/biocontainers/latentstrainanalysis
.. _`latentstrainanalysis/tags`: https://quay.io/repository/biocontainers/latentstrainanalysis?tab=tags


.. raw:: html

    <script>
        var package = "latentstrainanalysis";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/latentstrainanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/latentstrainanalysis/README.html