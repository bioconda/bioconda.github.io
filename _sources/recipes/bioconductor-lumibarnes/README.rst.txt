:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumibarnes'
.. highlight: bash

bioconductor-lumibarnes
=======================

.. conda:recipe:: bioconductor-lumibarnes
   :replaces_section_title:
   :noindex:

   Barnes Benchmark Illumina Tissues Titration Data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/lumiBarnes.html
   :license: LGPL
   :recipe: /`bioconductor-lumibarnes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumibarnes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumibarnes/meta.yaml>`_

   The Barnes benchmark dataset can be used to evaluate the algorithms for Illumina microarrays. It measured a titration series of two human tissues\, blood and placenta\, and includes six samples with the titration ratio of blood and placenta as 100\:0\, 95\:5\, 75\:25\, 50\:50\, 25\:75 and 0\:100. The samples were hybridized on HumanRef\-8 BeadChip \(Illumina\, Inc\) in duplicate. The data is loaded as an LumiBatch Object \(see documents in the lumi package\).


.. conda:package:: bioconductor-lumibarnes

   |downloads_bioconductor-lumibarnes| |docker_bioconductor-lumibarnes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-lumi: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-lumibarnes

   and update with::

      mamba update bioconductor-lumibarnes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumibarnes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumibarnes:<tag>

   (see `bioconductor-lumibarnes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumibarnes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumibarnes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumibarnes
   :alt:   (downloads)
.. |docker_bioconductor-lumibarnes| image:: https://quay.io/repository/biocontainers/bioconductor-lumibarnes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumibarnes
.. _`bioconductor-lumibarnes/tags`: https://quay.io/repository/biocontainers/bioconductor-lumibarnes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumibarnes";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumibarnes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumibarnes/README.html