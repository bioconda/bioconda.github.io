:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bifet'
.. highlight: bash

bioconductor-bifet
==================

.. conda:recipe:: bioconductor-bifet
   :replaces_section_title:
   :noindex:

   Bias\-free Footprint Enrichment Test

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiFET.html
   :license: GPL-3
   :recipe: /`bioconductor-bifet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bifet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bifet/meta.yaml>`_

   BiFET identifies TFs whose footprints are over\-represented in target regions compared to background regions after correcting for the bias arising from the imbalance in read counts and GC contents between the target and background regions. For a given TF k\, BiFET tests the null hypothesis that the target regions have the same probability of having footprints for the TF k as the background regions while correcting for the read count and GC content bias. For this\, we use the number of target regions with footprints for TF k\, t\_k as a test statistic and calculate the p\-value as the probability of observing t\_k or more target regions with footprints under the null hypothesis.


.. conda:package:: bioconductor-bifet

   |downloads_bioconductor-bifet| |docker_bioconductor-bifet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-poibin: 
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

      mamba install bioconductor-bifet

   and update with::

      mamba update bioconductor-bifet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bifet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bifet:<tag>

   (see `bioconductor-bifet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bifet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bifet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bifet
   :alt:   (downloads)
.. |docker_bioconductor-bifet| image:: https://quay.io/repository/biocontainers/bioconductor-bifet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bifet
.. _`bioconductor-bifet/tags`: https://quay.io/repository/biocontainers/bioconductor-bifet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bifet";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bifet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bifet/README.html