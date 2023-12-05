:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgenomes'
.. highlight: bash

r-acidgenomes
=============

.. conda:recipe:: r-acidgenomes
   :replaces_section_title:
   :noindex:

   Toolkit for downloading and processing genome annotations.

   :homepage: https://r.acidgenomics.com/packages/acidgenomes/
   :developer docs: https://github.com/acidgenomics/r-acidgenomes
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgenomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenomes/meta.yaml>`_

   


.. conda:package:: r-acidgenomes

   |downloads_r-acidgenomes| |docker_r-acidgenomes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.8-1</code>,  <code>0.4.8-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.3.0-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-2``,  ``0.2.12-1``,  ``0.2.12-0``,  ``0.2.11-2``,  ``0.2.11-0``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0``
   :depends bioconductor-annotationhub: ``>=3.8.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0``
   :depends bioconductor-biomart: ``>=2.56.0``
   :depends bioconductor-ensembldb: ``>=2.24.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0``
   :depends bioconductor-genomicranges: ``>=1.52.0``
   :depends bioconductor-iranges: ``>=2.34.0``
   :depends bioconductor-s4vectors: ``>=0.38.0``
   :depends r-acidbase: ``>=0.7.0``
   :depends r-acidcli: ``>=0.3.0``
   :depends r-acidgenerics: ``>=0.7.1``
   :depends r-acidplyr: ``>=0.5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.7.0``
   :depends r-pipette: ``>=0.14.0``
   :depends r-rvest: ``>=1.0.3``
   :depends r-syntactic: ``>=0.7.0``
   :depends r-withr: ``>=2.5.0``
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

      mamba install r-acidgenomes

   and update with::

      mamba update r-acidgenomes

  To create a new environment, run::

      mamba create --name myenvname r-acidgenomes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidgenomes:<tag>

   (see `r-acidgenomes/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidgenomes| image:: https://img.shields.io/conda/dn/bioconda/r-acidgenomes.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgenomes
   :alt:   (downloads)
.. |docker_r-acidgenomes| image:: https://quay.io/repository/biocontainers/r-acidgenomes/status
   :target: https://quay.io/repository/biocontainers/r-acidgenomes
.. _`r-acidgenomes/tags`: https://quay.io/repository/biocontainers/r-acidgenomes?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgenomes";
        var versions = ["0.7.0","0.6.1","0.6.0","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgenomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgenomes/README.html