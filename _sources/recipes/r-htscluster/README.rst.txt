:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-htscluster'
.. highlight: bash

r-htscluster
============

.. conda:recipe:: r-htscluster
   :replaces_section_title:
   :noindex:

   A Poisson mixture model is implemented to cluster genes from high\- throughput transcriptome sequencing \(RNA\-seq\) data. Parameter estimation is performed using either the EM or CEM algorithm\, and the slope heuristics are used for model selection \(i.e.\, to choose the number of clusters\).

   :homepage: https://CRAN.R-project.org/package=HTSCluster
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-htscluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htscluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htscluster/meta.yaml>`_

   


.. conda:package:: r-htscluster

   |downloads_r-htscluster| |docker_r-htscluster|

   :versions:
      
      

      ``2.0.11-0``,  ``2.0.10-2``,  ``2.0.10-1``,  ``2.0.10-0``,  ``2.0.8-5``,  ``2.0.8-4``,  ``2.0.8-3``,  ``2.0.8-1``,  ``2.0.8-0``

      

   
   :depends bioconductor-edger: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-capushe: 
   :depends r-plotrix: 
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

      mamba install r-htscluster

   and update with::

      mamba update r-htscluster

  To create a new environment, run::

      mamba create --name myenvname r-htscluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-htscluster:<tag>

   (see `r-htscluster/tags`_ for valid values for ``<tag>``)


.. |downloads_r-htscluster| image:: https://img.shields.io/conda/dn/bioconda/r-htscluster.svg?style=flat
   :target: https://anaconda.org/bioconda/r-htscluster
   :alt:   (downloads)
.. |docker_r-htscluster| image:: https://quay.io/repository/biocontainers/r-htscluster/status
   :target: https://quay.io/repository/biocontainers/r-htscluster
.. _`r-htscluster/tags`: https://quay.io/repository/biocontainers/r-htscluster?tab=tags


.. raw:: html

    <script>
        var package = "r-htscluster";
        var versions = ["2.0.11","2.0.10","2.0.10","2.0.10","2.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-htscluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-htscluster/README.html