:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusseeker'
.. highlight: bash

bioconductor-consensusseeker
============================

.. conda:recipe:: bioconductor-consensusseeker
   :replaces_section_title:
   :noindex:

   Detection of consensus regions inside a group of experiences using genomic positions and genomic ranges

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/consensusSeekeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-consensusseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusseeker/meta.yaml>`_
   :links: biotools: :biotools:`consensusseeker`, doi: :doi:`10.1515/sagmb-2014-0098`

   This package compares genomic positions and genomic ranges from multiple experiments to extract common regions. The size of the analyzed region is adjustable as well as the number of experiences in which a feature must be present in a potential region to tag this region as a consensus region.


.. conda:package:: bioconductor-consensusseeker

   |downloads_bioconductor-consensusseeker| |docker_bioconductor-consensusseeker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-stringr: 
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

      mamba install bioconductor-consensusseeker

   and update with::

      mamba update bioconductor-consensusseeker

  To create a new environment, run::

      mamba create --name myenvname bioconductor-consensusseeker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensusseeker:<tag>

   (see `bioconductor-consensusseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensusseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusseeker
   :alt:   (downloads)
.. |docker_bioconductor-consensusseeker| image:: https://quay.io/repository/biocontainers/bioconductor-consensusseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusseeker
.. _`bioconductor-consensusseeker/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusseeker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-consensusseeker";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusseeker/README.html