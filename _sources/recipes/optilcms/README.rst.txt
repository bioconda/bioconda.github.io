:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optilcms'
.. highlight: bash

optilcms
========

.. conda:recipe:: optilcms
   :replaces_section_title:
   :noindex:

   Pipeline for processing LC\-MS raw data with optimized parameters.

   :homepage: https://github.com/xia-lab/OptiLCMS
   :license: MIT / MIT
   :recipe: /`optilcms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optilcms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optilcms/meta.yaml>`_

   


.. conda:package:: optilcms

   |downloads_optilcms| |docker_optilcms|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocparallel: ``>=1.8.0``
   :depends bioconductor-biocstyle: 
   :depends bioconductor-graph: 
   :depends bioconductor-massspecwavelet: 
   :depends bioconductor-msnbase: 
   :depends bioconductor-mtbls2: 
   :depends bioconductor-mzr: ``>=2.22.0``
   :depends bioconductor-rbgl: 
   :depends bioconductor-s4vectors: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cairo: 
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-entropy: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-hmisc: 
   :depends r-knitr: ``>=1.1.0``
   :depends r-lattice: 
   :depends r-maldiquant: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=1.0.9``
   :depends r-rjsonio: 
   :depends r-rmarkdown: 
   :depends r-rsm: 
   :depends r-scales: 
   :depends r-xml: 
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

      mamba install optilcms

   and update with::

      mamba update optilcms

  To create a new environment, run::

      mamba create --name myenvname optilcms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/optilcms:<tag>

   (see `optilcms/tags`_ for valid values for ``<tag>``)


.. |downloads_optilcms| image:: https://img.shields.io/conda/dn/bioconda/optilcms.svg?style=flat
   :target: https://anaconda.org/bioconda/optilcms
   :alt:   (downloads)
.. |docker_optilcms| image:: https://quay.io/repository/biocontainers/optilcms/status
   :target: https://quay.io/repository/biocontainers/optilcms
.. _`optilcms/tags`: https://quay.io/repository/biocontainers/optilcms?tab=tags


.. raw:: html

    <script>
        var package = "optilcms";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optilcms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optilcms/README.html