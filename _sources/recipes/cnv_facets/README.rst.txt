:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnv_facets'
.. highlight: bash

cnv_facets
==========

.. conda:recipe:: cnv_facets
   :replaces_section_title:
   :noindex:

   Detect somatic copy number variants \(CNV\) in tumour\-normal samples using next generation sequencing data

   :homepage: https://github.com/dariober/cnv_facets
   :license: MIT / MIT
   :recipe: /`cnv_facets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnv_facets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnv_facets/meta.yaml>`_

   


.. conda:package:: cnv_facets

   |downloads_cnv_facets| |docker_cnv_facets|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.1-1</code>,  <code>0.16.1-0</code>,  <code>0.16.0-1</code>,  <code>0.16.0-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  <code>0.14.0-1</code>,  <code>0.13.0-1</code>,  <code>0.12.1-1</code>,  </span></summary>
      

      ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.0-1``,  ``0.13.0-1``,  ``0.12.1-1``,  ``0.12.1-0``,  ``0.12.0-0``,  ``v0.11.3-2``,  ``v0.11.3-1``,  ``v0.11.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.21,<2.0a0``
   :depends bcftools: ``>=1.9``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=12``
   :depends libgfortran: 
   :depends libgfortran5: ``>=12.4.0``
   :depends libstdcxx: ``>=12``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends r-argparse: ``>=2.1.6``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-facets: ``>=0.6.2,<1.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-jsonlite: 
   :depends samtools: ``>=1.21,<2.0a0``
   :depends snp-pileup: ``>=0.6.2,<0.7.0a0``
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

      mamba install cnv_facets

   and update with::

      mamba update cnv_facets

  To create a new environment, run::

      mamba create --name myenvname cnv_facets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnv_facets:<tag>

   (see `cnv_facets/tags`_ for valid values for ``<tag>``)


.. |downloads_cnv_facets| image:: https://img.shields.io/conda/dn/bioconda/cnv_facets.svg?style=flat
   :target: https://anaconda.org/bioconda/cnv_facets
   :alt:   (downloads)
.. |docker_cnv_facets| image:: https://quay.io/repository/biocontainers/cnv_facets/status
   :target: https://quay.io/repository/biocontainers/cnv_facets
.. _`cnv_facets/tags`: https://quay.io/repository/biocontainers/cnv_facets?tab=tags


.. raw:: html

    <script>
        var package = "cnv_facets";
        var versions = ["0.16.1","0.16.1","0.16.0","0.16.0","0.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnv_facets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnv_facets/README.html