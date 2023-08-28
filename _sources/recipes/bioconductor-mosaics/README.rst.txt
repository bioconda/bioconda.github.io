:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosaics'
.. highlight: bash

bioconductor-mosaics
====================

.. conda:recipe:: bioconductor-mosaics
   :replaces_section_title:
   :noindex:

   MOSAiCS \(MOdel\-based one and two Sample Analysis and Inference for ChIP\-Seq\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mosaics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mosaics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosaics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosaics/meta.yaml>`_
   :links: biotools: :biotools:`mosaics`, doi: :doi:`10.1198/jasa.2011.ap09706`

   This package provides functions for fitting MOSAiCS and MOSAiCS\-HMM\, a statistical framework to analyze one\-sample or two\-sample ChIP\-seq data of transcription factor binding and histone modification.


.. conda:package:: bioconductor-mosaics

   |downloads_bioconductor-mosaics| |docker_bioconductor-mosaics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-2</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.36.0-0``,  ``2.32.0-2``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl: ``>=5.6.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mosaics

   and update with::

      mamba update bioconductor-mosaics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mosaics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosaics:<tag>

   (see `bioconductor-mosaics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosaics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosaics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosaics
   :alt:   (downloads)
.. |docker_bioconductor-mosaics| image:: https://quay.io/repository/biocontainers/bioconductor-mosaics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosaics
.. _`bioconductor-mosaics/tags`: https://quay.io/repository/biocontainers/bioconductor-mosaics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosaics";
        var versions = ["2.38.0","2.36.0","2.32.0","2.32.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosaics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosaics/README.html