:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basicstarrseq'
.. highlight: bash

bioconductor-basicstarrseq
==========================

.. conda:recipe:: bioconductor-basicstarrseq
   :replaces_section_title:
   :noindex:

   Basic peak calling on STARR\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BasicSTARRseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basicstarrseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq/meta.yaml>`_

   Basic peak calling on STARR\-seq data based on a method introduced in \"Genome\-Wide Quantitative Enhancer Activity Maps Identified by STARR\-seq\" Arnold et al. Science. 2013 Mar 1\;339\(6123\)\:1074\-7. doi\: 10.1126\/science. 1232542. Epub 2013 Jan 17.


.. conda:package:: bioconductor-basicstarrseq

   |downloads_bioconductor-basicstarrseq| |docker_bioconductor-basicstarrseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-basicstarrseq

   and update with::

      mamba update bioconductor-basicstarrseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-basicstarrseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basicstarrseq:<tag>

   (see `bioconductor-basicstarrseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basicstarrseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basicstarrseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basicstarrseq
   :alt:   (downloads)
.. |docker_bioconductor-basicstarrseq| image:: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq
.. _`bioconductor-basicstarrseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basicstarrseq";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html