:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-merge-kallisto'
.. highlight: bash

r-merge-kallisto
================

.. conda:recipe:: r-merge-kallisto
   :replaces_section_title:
   :noindex:

   merge\_kallisto

   :homepage: https://github.com/zavolanlab/merge_kallisto
   :license: APACHE / Apache License 2.0
   :recipe: /`r-merge-kallisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-merge-kallisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-merge-kallisto/meta.yaml>`_

   


.. conda:package:: r-merge-kallisto

   |downloads_r-merge-kallisto| |docker_r-merge-kallisto|

   :versions:
      
      

      ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      

   
   :depends bioconductor-rhdf5: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-tximport: 
   :depends coreutils: 
   :depends r-base: 
   :depends r-optparse: 
   :depends r-rcpp: 
   :depends rsync: 
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

      mamba install r-merge-kallisto

   and update with::

      mamba update r-merge-kallisto

  To create a new environment, run::

      mamba create --name myenvname r-merge-kallisto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-merge-kallisto:<tag>

   (see `r-merge-kallisto/tags`_ for valid values for ``<tag>``)


.. |downloads_r-merge-kallisto| image:: https://img.shields.io/conda/dn/bioconda/r-merge-kallisto.svg?style=flat
   :target: https://anaconda.org/bioconda/r-merge-kallisto
   :alt:   (downloads)
.. |docker_r-merge-kallisto| image:: https://quay.io/repository/biocontainers/r-merge-kallisto/status
   :target: https://quay.io/repository/biocontainers/r-merge-kallisto
.. _`r-merge-kallisto/tags`: https://quay.io/repository/biocontainers/r-merge-kallisto?tab=tags


.. raw:: html

    <script>
        var package = "r-merge-kallisto";
        var versions = ["0.6","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-merge-kallisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-merge-kallisto/README.html