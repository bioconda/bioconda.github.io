:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dpeak'
.. highlight: bash

bioconductor-dpeak
==================

.. conda:recipe:: bioconductor-dpeak
   :replaces_section_title:
   :noindex:

   dPeak \(Deconvolution of Peaks in ChIP\-seq Analysis\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dpeak.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-dpeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dpeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dpeak/meta.yaml>`_

   dPeak is a statistical framework for the high resolution identification of protein\-DNA interaction sites using PET and SET ChIP\-Seq and ChIP\-exo data. It provides computationally efficient and user friendly interface to process ChIP\-seq and ChIP\-exo data\, implement exploratory analysis\, fit dPeak model\, and export list of predicted binding sites for downstream analysis.


.. conda:package:: bioconductor-dpeak

   |downloads_bioconductor-dpeak| |docker_bioconductor-dpeak|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-rcpp: 
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

      mamba install bioconductor-dpeak

   and update with::

      mamba update bioconductor-dpeak

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dpeak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dpeak:<tag>

   (see `bioconductor-dpeak/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dpeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dpeak.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dpeak
   :alt:   (downloads)
.. |docker_bioconductor-dpeak| image:: https://quay.io/repository/biocontainers/bioconductor-dpeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dpeak
.. _`bioconductor-dpeak/tags`: https://quay.io/repository/biocontainers/bioconductor-dpeak?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dpeak";
        var versions = ["1.12.0","1.10.0","1.10.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dpeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dpeak/README.html