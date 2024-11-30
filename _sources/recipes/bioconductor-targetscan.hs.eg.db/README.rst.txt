:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetscan.hs.eg.db'
.. highlight: bash

bioconductor-targetscan.hs.eg.db
================================

.. conda:recipe:: bioconductor-targetscan.hs.eg.db
   :replaces_section_title:
   :noindex:

   TargetScan miRNA target predictions for human

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/targetscan.Hs.eg.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-targetscan.hs.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.hs.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.hs.eg.db/meta.yaml>`_

   TargetScan miRNA target predictions for human assembled using data from the TargetScan website. TargetScan predicts biological targets of miRNAs by searching for the presence of conserved 8mer and 7mer sites that match the seed region of each miRNA. Also identified are sites with mismatches in the seed region that are compensated by conserved 3\' pairing. In mammals\, predictions are ranked based on the predicted efficacy of targeting as calculated using the context scores of the sites.


.. conda:package:: bioconductor-targetscan.hs.eg.db

   |downloads_bioconductor-targetscan.hs.eg.db| |docker_bioconductor-targetscan.hs.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-13</code>,  <code>0.6.1-12</code>,  <code>0.6.1-11</code>,  <code>0.6.1-10</code>,  <code>0.6.1-9</code>,  <code>0.6.1-8</code>,  <code>0.6.1-7</code>,  <code>0.6.1-6</code>,  <code>0.6.1-5</code>,  </span></summary>
      

      ``0.6.1-13``,  ``0.6.1-12``,  ``0.6.1-11``,  ``0.6.1-10``,  ``0.6.1-9``,  ``0.6.1-8``,  ``0.6.1-7``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-1``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-targetscan.hs.eg.db

   and update with::

      mamba update bioconductor-targetscan.hs.eg.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-targetscan.hs.eg.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetscan.hs.eg.db:<tag>

   (see `bioconductor-targetscan.hs.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetscan.hs.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscan.hs.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetscan.hs.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-targetscan.hs.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db
.. _`bioconductor-targetscan.hs.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetscan.hs.eg.db";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html