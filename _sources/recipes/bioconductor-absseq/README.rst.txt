:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-absseq'
.. highlight: bash

bioconductor-absseq
===================

.. conda:recipe:: bioconductor-absseq
   :replaces_section_title:
   :noindex:

   ABSSeq\: a new RNA\-Seq analysis method based on modelling absolute expression differences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ABSSeq.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-absseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-absseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-absseq/meta.yaml>`_
   :links: biotools: :biotools:`absseq`

   Inferring differential expression genes by absolute counts difference between two groups\, utilizing Negative binomial distribution and moderating fold\-change according to heterogeneity of dispersion across expression level.


.. conda:package:: bioconductor-absseq

   |downloads_bioconductor-absseq| |docker_bioconductor-absseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-0``,  ``1.22.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-locfit: 
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

      mamba install bioconductor-absseq

   and update with::

      mamba update bioconductor-absseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-absseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-absseq:<tag>

   (see `bioconductor-absseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-absseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-absseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-absseq
   :alt:   (downloads)
.. |docker_bioconductor-absseq| image:: https://quay.io/repository/biocontainers/bioconductor-absseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-absseq
.. _`bioconductor-absseq/tags`: https://quay.io/repository/biocontainers/bioconductor-absseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-absseq";
        var versions = ["1.56.0","1.54.0","1.52.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-absseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-absseq/README.html