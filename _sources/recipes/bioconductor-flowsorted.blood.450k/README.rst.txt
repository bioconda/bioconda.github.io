:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsorted.blood.450k'
.. highlight: bash

bioconductor-flowsorted.blood.450k
==================================

.. conda:recipe:: bioconductor-flowsorted.blood.450k
   :replaces_section_title:
   :noindex:

   Illumina HumanMethylation data on sorted blood cell populations

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/FlowSorted.Blood.450k.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowsorted.blood.450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.450k/meta.yaml>`_

   Raw data objects for the Illumina 450k DNA methylation microarrays\, and an object depicting which CpGs on the array are associated with cell type.


.. conda:package:: bioconductor-flowsorted.blood.450k

   |downloads_bioconductor-flowsorted.blood.450k| |docker_bioconductor-flowsorted.blood.450k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
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

      mamba install bioconductor-flowsorted.blood.450k

   and update with::

      mamba update bioconductor-flowsorted.blood.450k

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowsorted.blood.450k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsorted.blood.450k:<tag>

   (see `bioconductor-flowsorted.blood.450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsorted.blood.450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.blood.450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsorted.blood.450k
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.blood.450k| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.450k
.. _`bioconductor-flowsorted.blood.450k/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.450k?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowsorted.blood.450k";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.450k/README.html