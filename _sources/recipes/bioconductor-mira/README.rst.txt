:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mira'
.. highlight: bash

bioconductor-mira
=================

.. conda:recipe:: bioconductor-mira
   :replaces_section_title:
   :noindex:

   Methylation\-Based Inference of Regulatory Activity

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MIRA.html
   :license: GPL-3
   :recipe: /`bioconductor-mira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mira/meta.yaml>`_

   DNA methylation contains information about the regulatory state of the cell. MIRA aggregates genome\-scale DNA methylation data into a DNA methylation profile for a given region set with shared biological annotation. Using this profile\, MIRA infers and scores the collective regulatory activity for the region set. MIRA facilitates regulatory analysis in situations where classical regulatory assays would be difficult and allows public sources of region sets to be leveraged for novel insight into the regulatory state of DNA methylation datasets.


.. conda:package:: bioconductor-mira

   |downloads_bioconductor-mira| |docker_bioconductor-mira|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-bsseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-mira

   and update with::

      mamba update bioconductor-mira

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mira

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mira:<tag>

   (see `bioconductor-mira/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mira| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mira.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mira
   :alt:   (downloads)
.. |docker_bioconductor-mira| image:: https://quay.io/repository/biocontainers/bioconductor-mira/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mira
.. _`bioconductor-mira/tags`: https://quay.io/repository/biocontainers/bioconductor-mira?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mira";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mira/README.html