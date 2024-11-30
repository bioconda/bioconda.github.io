:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phantompeakqualtools'
.. highlight: bash

phantompeakqualtools
====================

.. conda:recipe:: phantompeakqualtools
   :replaces_section_title:
   :noindex:

   This package computes informative enrichment and quality measures for ChIP\-seq\/DNase\-seq\/FAIRE\-seq\/MNase\-seq data. It can also be used to obtain robust estimates of the predominant fragment length or characteristic tag shift values in these assays.

   :homepage: https://github.com/kundajelab/phantompeakqualtools
   :license: BSD-3-Clause
   :recipe: /`phantompeakqualtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantompeakqualtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantompeakqualtools/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.136184.111`, doi: :doi:`10.1038/nbt.1508`

   


.. conda:package:: phantompeakqualtools

   |downloads_phantompeakqualtools| |docker_phantompeakqualtools|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1.1-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bioconductor-rsamtools: 
   :depends boost: 
   :depends gawk: 
   :depends r-base: ``>=3.1``
   :depends r-bitops: 
   :depends r-catools: 
   :depends r-snow: 
   :depends r-snowfall: 
   :depends r-spp: ``>=1.13``
   :depends samtools: 
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

      mamba install phantompeakqualtools

   and update with::

      mamba update phantompeakqualtools

  To create a new environment, run::

      mamba create --name myenvname phantompeakqualtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phantompeakqualtools:<tag>

   (see `phantompeakqualtools/tags`_ for valid values for ``<tag>``)


.. |downloads_phantompeakqualtools| image:: https://img.shields.io/conda/dn/bioconda/phantompeakqualtools.svg?style=flat
   :target: https://anaconda.org/bioconda/phantompeakqualtools
   :alt:   (downloads)
.. |docker_phantompeakqualtools| image:: https://quay.io/repository/biocontainers/phantompeakqualtools/status
   :target: https://quay.io/repository/biocontainers/phantompeakqualtools
.. _`phantompeakqualtools/tags`: https://quay.io/repository/biocontainers/phantompeakqualtools?tab=tags


.. raw:: html

    <script>
        var package = "phantompeakqualtools";
        var versions = ["1.2.2","1.2.2","1.2.1.1","1.2.1","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phantompeakqualtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phantompeakqualtools/README.html