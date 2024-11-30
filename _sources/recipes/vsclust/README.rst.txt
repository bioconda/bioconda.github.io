:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsclust'
.. highlight: bash

vsclust
=======

.. conda:recipe:: vsclust
   :replaces_section_title:
   :noindex:

   Interactive tool for statistical testing\, data browsing and interactive visualization of quantitative omics data

   :homepage: https://bitbucket.org/veitveit/vsclust/src/master/
   :license: GPL / GPL (>=2)
   :recipe: /`vsclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsclust/meta.yaml>`_
   :links: biotools: :biotools:`vsclust`, doi: :doi:`10.1093/bioinformatics/bty224`

   VSClust is a web service \(shiny app\) and command\-line tool for statistical testing\, clustering and interactive visualization of quantitative omics data. Its variance\-sensitive clustering algorithm improves identification of co\-regulated features in noisy data with replicates



.. conda:package:: vsclust

   |downloads_vsclust| |docker_vsclust|

   :versions:
      
      

      ``0.91-0``,  ``0.87-0``

      

   
   :depends bioconductor-clusterprofiler: ``4.2.0.*``
   :depends bioconductor-limma: 
   :depends bioconductor-mfuzz: 
   :depends bioconductor-qvalue: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-matrixstats: 
   :depends r-parallelly: 
   :depends r-readxl: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-yaml: 
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

      mamba install vsclust

   and update with::

      mamba update vsclust

  To create a new environment, run::

      mamba create --name myenvname vsclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vsclust:<tag>

   (see `vsclust/tags`_ for valid values for ``<tag>``)


.. |downloads_vsclust| image:: https://img.shields.io/conda/dn/bioconda/vsclust.svg?style=flat
   :target: https://anaconda.org/bioconda/vsclust
   :alt:   (downloads)
.. |docker_vsclust| image:: https://quay.io/repository/biocontainers/vsclust/status
   :target: https://quay.io/repository/biocontainers/vsclust
.. _`vsclust/tags`: https://quay.io/repository/biocontainers/vsclust?tab=tags


.. raw:: html

    <script>
        var package = "vsclust";
        var versions = ["0.91","0.87"];
    </script>





Notes
-----
The shiny app can be run with the run\_app.sh command. Alternative\, a command\-line version is available\: runVSClust.R



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsclust/README.html