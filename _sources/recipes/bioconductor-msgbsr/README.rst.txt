:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msgbsr'
.. highlight: bash

bioconductor-msgbsr
===================

.. conda:recipe:: bioconductor-msgbsr
   :replaces_section_title:
   :noindex:

   msgbsR\: methylation sensitive genotyping by sequencing \(MS\-GBS\) R functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/msgbsR.html
   :license: GPL-2
   :recipe: /`bioconductor-msgbsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msgbsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msgbsr/meta.yaml>`_

   Pipeline for the anaysis of a MS\-GBS experiment.


.. conda:package:: bioconductor-msgbsr

   |downloads_bioconductor-msgbsr| |docker_bioconductor-msgbsr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-easyrnaseq: ``>=2.42.0,<2.43.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-ggbio: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-r.utils: 
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

      mamba install bioconductor-msgbsr

   and update with::

      mamba update bioconductor-msgbsr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msgbsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msgbsr:<tag>

   (see `bioconductor-msgbsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msgbsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msgbsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msgbsr
   :alt:   (downloads)
.. |docker_bioconductor-msgbsr| image:: https://quay.io/repository/biocontainers/bioconductor-msgbsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msgbsr
.. _`bioconductor-msgbsr/tags`: https://quay.io/repository/biocontainers/bioconductor-msgbsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msgbsr";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msgbsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msgbsr/README.html