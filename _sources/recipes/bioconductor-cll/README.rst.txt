:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cll'
.. highlight: bash

bioconductor-cll
================

.. conda:recipe:: bioconductor-cll
   :replaces_section_title:
   :noindex:

   A Package for CLL Gene Expression Data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/CLL.html
   :license: LGPL
   :recipe: /`bioconductor-cll <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cll>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cll/meta.yaml>`_

   The CLL package contains the chronic lymphocytic leukemia \(CLL\) gene expression data.  The CLL data had 24 samples that were either classified as progressive or stable in regards to disease progression.  The data came from Dr. Sabina Chiaretti at Division of Hematology\, Department of Cellular Biotechnologies and Hematology\, University La Sapienza\, Rome\, Italy and Dr. Jerome Ritz at Department of Medicine\, Brigham and Women\'s Hospital\, Harvard Medical School\, Boston\, Massachusetts.


.. conda:package:: bioconductor-cll

   |downloads_bioconductor-cll| |docker_bioconductor-cll|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
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

      mamba install bioconductor-cll

   and update with::

      mamba update bioconductor-cll

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cll

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cll:<tag>

   (see `bioconductor-cll/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cll| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cll.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cll
   :alt:   (downloads)
.. |docker_bioconductor-cll| image:: https://quay.io/repository/biocontainers/bioconductor-cll/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cll
.. _`bioconductor-cll/tags`: https://quay.io/repository/biocontainers/bioconductor-cll?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cll";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cll/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cll/README.html