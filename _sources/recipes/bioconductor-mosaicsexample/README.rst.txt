:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosaicsexample'
.. highlight: bash

bioconductor-mosaicsexample
===========================

.. conda:recipe:: bioconductor-mosaicsexample
   :replaces_section_title:
   :noindex:

   Example data for the mosaics package\, which implements MOSAiCS and MOSAiCS\-HMM\, a statistical framework to analyze one\-sample or two\-sample ChIP\-seq data for transcription factor binding and histone modification

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/mosaicsExample.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mosaicsexample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosaicsexample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosaicsexample/meta.yaml>`_

   Data for the mosaics package\, consisting of \(1\) chromosome 22 ChIP and control sample data from a ChIP\-seq experiment of STAT1 binding and H3K4me3 modification in MCF7 cell line from ENCODE database \(HG19\) and \(2\) chromosome 21 ChIP and control sample data from a ChIP\-seq experiment of STAT1 binding\, with mappability\, GC content\, and sequence ambiguity scores of human genome HG18.


.. conda:package:: bioconductor-mosaicsexample

   |downloads_bioconductor-mosaicsexample| |docker_bioconductor-mosaicsexample|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
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

      mamba install bioconductor-mosaicsexample

   and update with::

      mamba update bioconductor-mosaicsexample

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mosaicsexample

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosaicsexample:<tag>

   (see `bioconductor-mosaicsexample/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosaicsexample| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosaicsexample.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosaicsexample
   :alt:   (downloads)
.. |docker_bioconductor-mosaicsexample| image:: https://quay.io/repository/biocontainers/bioconductor-mosaicsexample/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosaicsexample
.. _`bioconductor-mosaicsexample/tags`: https://quay.io/repository/biocontainers/bioconductor-mosaicsexample?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosaicsexample";
        var versions = ["1.40.0","1.38.0","1.35.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosaicsexample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosaicsexample/README.html