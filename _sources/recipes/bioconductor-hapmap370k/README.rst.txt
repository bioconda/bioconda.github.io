:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapmap370k'
.. highlight: bash

bioconductor-hapmap370k
=======================

.. conda:recipe:: bioconductor-hapmap370k
   :replaces_section_title:
   :noindex:

   Example Illumina 370k HapMap Data

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hapmap370k.html
   :license: GPL
   :recipe: /`bioconductor-hapmap370k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap370k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap370k/meta.yaml>`_

   Example HapMap data from Illumina 370k BeadChips


.. conda:package:: bioconductor-hapmap370k

   |downloads_bioconductor-hapmap370k| |docker_bioconductor-hapmap370k|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-11</code>,  <code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  </span></summary>
      

      ``1.0.1-11``,  ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-hapmap370k

   and update with::

      mamba update bioconductor-hapmap370k

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hapmap370k

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapmap370k:<tag>

   (see `bioconductor-hapmap370k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapmap370k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapmap370k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapmap370k
   :alt:   (downloads)
.. |docker_bioconductor-hapmap370k| image:: https://quay.io/repository/biocontainers/bioconductor-hapmap370k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapmap370k
.. _`bioconductor-hapmap370k/tags`: https://quay.io/repository/biocontainers/bioconductor-hapmap370k?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapmap370k";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapmap370k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapmap370k/README.html