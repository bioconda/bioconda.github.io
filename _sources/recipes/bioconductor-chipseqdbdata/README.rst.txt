:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipseqdbdata'
.. highlight: bash

bioconductor-chipseqdbdata
==========================

.. conda:recipe:: bioconductor-chipseqdbdata
   :replaces_section_title:
   :noindex:

   Data for the chipseqDB Workflow

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/chipseqDBData.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-chipseqdbdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqdbdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqdbdata/meta.yaml>`_

   Sorted and indexed BAM files for ChIP\-seq libraries\, for use in the chipseqDB workflow. BAM indices are also included.


.. conda:package:: bioconductor-chipseqdbdata

   |downloads_bioconductor-chipseqdbdata| |docker_bioconductor-chipseqdbdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-chipseqdbdata

   and update with::

      mamba update bioconductor-chipseqdbdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chipseqdbdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipseqdbdata:<tag>

   (see `bioconductor-chipseqdbdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipseqdbdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseqdbdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipseqdbdata
   :alt:   (downloads)
.. |docker_bioconductor-chipseqdbdata| image:: https://quay.io/repository/biocontainers/bioconductor-chipseqdbdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseqdbdata
.. _`bioconductor-chipseqdbdata/tags`: https://quay.io/repository/biocontainers/bioconductor-chipseqdbdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chipseqdbdata";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseqdbdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseqdbdata/README.html