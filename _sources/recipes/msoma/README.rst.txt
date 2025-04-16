:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msoma'
.. highlight: bash

msoma
=====

.. conda:recipe:: msoma
   :replaces_section_title:
   :noindex:

   mSOMA\: Somatic Mutation Detection using a betabinomial null model

   :homepage: https://github.com/AkeyLab/mSOMA
   :documentation: https://akeylab.github.io/mSOMA/
   
   :license: MIT / MIT
   :recipe: /`msoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msoma/meta.yaml>`_

   


.. conda:package:: msoma

   |downloads_msoma| |docker_msoma|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bamutil: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-qvalue: 
   :depends bioconductor-survcomp: 
   :depends click: ``>=8.0``
   :depends importlib_resources: ``>=5.4``
   :depends numpy: ``>=1.19``
   :depends pandas: ``>=1.1``
   :depends pysam: ``>=0.19``
   :depends python: ``>=3.7.1``
   :depends r-argparse: 
   :depends r-base: 
   :depends r-bbmle: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-r.utils: 
   :depends r-tidyverse: 
   :depends r-vgam: 
   :depends samtools: 
   :depends scipy: ``>=1.5``
   :depends statsmodels: ``>=0.12``
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

      mamba install msoma

   and update with::

      mamba update msoma

  To create a new environment, run::

      mamba create --name myenvname msoma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msoma:<tag>

   (see `msoma/tags`_ for valid values for ``<tag>``)


.. |downloads_msoma| image:: https://img.shields.io/conda/dn/bioconda/msoma.svg?style=flat
   :target: https://anaconda.org/bioconda/msoma
   :alt:   (downloads)
.. |docker_msoma| image:: https://quay.io/repository/biocontainers/msoma/status
   :target: https://quay.io/repository/biocontainers/msoma
.. _`msoma/tags`: https://quay.io/repository/biocontainers/msoma?tab=tags


.. raw:: html

    <script>
        var package = "msoma";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msoma/README.html