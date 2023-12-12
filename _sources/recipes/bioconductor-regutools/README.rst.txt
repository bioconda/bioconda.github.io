:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regutools'
.. highlight: bash

bioconductor-regutools
======================

.. conda:recipe:: bioconductor-regutools
   :replaces_section_title:
   :noindex:

   regutools\: an R package for data extraction from RegulonDB

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/regutools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regutools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regutools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regutools/meta.yaml>`_

   RegulonDB has collected\, harmonized and centralized data from hundreds of experiments for nearly two decades and is considered a point of reference for transcriptional regulation in Escherichia coli K12. Here\, we present the regutools R package to facilitate programmatic access to RegulonDB data in computational biology. regutools provides researchers with the possibility of writing reproducible workflows with automated queries to RegulonDB. The regutools package serves as a bridge between RegulonDB data and the Bioconductor ecosystem by reusing the data structures and statistical methods powered by other Bioconductor packages. We demonstrate the integration of regutools with Bioconductor by analyzing transcription factor DNA binding sites and transcriptional regulatory networks from RegulonDB. We anticipate that regutools will serve as a useful building block in our progress to further our understanding of gene regulatory networks.


.. conda:package:: bioconductor-regutools

   |downloads_bioconductor-regutools| |docker_bioconductor-regutools|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rcy3: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-regutools

   and update with::

      mamba update bioconductor-regutools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regutools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regutools:<tag>

   (see `bioconductor-regutools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regutools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regutools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regutools
   :alt:   (downloads)
.. |docker_bioconductor-regutools| image:: https://quay.io/repository/biocontainers/bioconductor-regutools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regutools
.. _`bioconductor-regutools/tags`: https://quay.io/repository/biocontainers/bioconductor-regutools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regutools";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regutools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regutools/README.html