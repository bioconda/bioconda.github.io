:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribowaltz'
.. highlight: bash

ribowaltz
=========

.. conda:recipe:: ribowaltz
   :replaces_section_title:
   :noindex:

   Calculation of optimal P\-site offsets\, diagnostic analysis and visual inspection of ribosome profiling data.

   :homepage: https://github.com/LabTranslationalArchitectomics/riboWaltz
   :license: MIT / MIT
   :recipe: /`ribowaltz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribowaltz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribowaltz/meta.yaml>`_

   


.. conda:package:: ribowaltz

   |downloads_ribowaltz| |docker_ribowaltz|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
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

      mamba install ribowaltz

   and update with::

      mamba update ribowaltz

  To create a new environment, run::

      mamba create --name myenvname ribowaltz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribowaltz:<tag>

   (see `ribowaltz/tags`_ for valid values for ``<tag>``)


.. |downloads_ribowaltz| image:: https://img.shields.io/conda/dn/bioconda/ribowaltz.svg?style=flat
   :target: https://anaconda.org/bioconda/ribowaltz
   :alt:   (downloads)
.. |docker_ribowaltz| image:: https://quay.io/repository/biocontainers/ribowaltz/status
   :target: https://quay.io/repository/biocontainers/ribowaltz
.. _`ribowaltz/tags`: https://quay.io/repository/biocontainers/ribowaltz?tab=tags


.. raw:: html

    <script>
        var package = "ribowaltz";
        var versions = ["2.0","2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribowaltz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribowaltz/README.html