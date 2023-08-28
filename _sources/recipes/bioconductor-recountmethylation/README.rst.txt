:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recountmethylation'
.. highlight: bash

bioconductor-recountmethylation
===============================

.. conda:recipe:: bioconductor-recountmethylation
   :replaces_section_title:
   :noindex:

   Access and analyze public DNA methylation array data compilations

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/recountmethylation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recountmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation/meta.yaml>`_

   Resources for cross\-study analyses of public DNAm array data from NCBI GEO repo\, produced using Illumina\'s Infinium HumanMethylation450K \(HM450K\) and MethylationEPIC \(EPIC\) platforms. Provided functions enable download\, summary\, and filtering of large compilation files. Vignettes detail background about file formats\, example analyses\, and more. Note the disclaimer on package load and consult the main manuscripts for further info.


.. conda:package:: bioconductor-recountmethylation

   |downloads_bioconductor-recountmethylation| |docker_bioconductor-recountmethylation|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-reticulate: 
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

      mamba install bioconductor-recountmethylation

   and update with::

      mamba update bioconductor-recountmethylation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-recountmethylation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-recountmethylation:<tag>

   (see `bioconductor-recountmethylation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recountmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recountmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recountmethylation
   :alt:   (downloads)
.. |docker_bioconductor-recountmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-recountmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recountmethylation
.. _`bioconductor-recountmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-recountmethylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-recountmethylation";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html