:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-allmll'
.. highlight: bash

bioconductor-allmll
===================

.. conda:recipe:: bioconductor-allmll
   :replaces_section_title:
   :noindex:

   A subset of arrays from a large acute lymphoblastic leukemia \(ALL\) study

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/ALLMLL.html
   :license: GPL-2
   :recipe: /`bioconductor-allmll <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allmll>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allmll/meta.yaml>`_

   This package provides probe\-level data for 20 HGU133A and 20 HGU133B arrays which are a subset of arrays from a large ALL study. The data is for the MLL arrays. This data was published in Mary E. Ross\, Xiaodong Zhou\, Guangchun Song\, Sheila A. Shurtleff\, Kevin Girtman\, W. Kent Williams\, Hsi\-Che Liu\, Rami Mahfouz\, Susana C. Raimondi\, Noel Lenny\, Anami Patel\, and James R. Downing \(2003\) Classification of pediatric acute lymphoblastic leukemia by gene expression profiling Blood 102\: 2951\-2959


.. conda:package:: bioconductor-allmll

   |downloads_bioconductor-allmll| |docker_bioconductor-allmll|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-allmll

   and update with::

      mamba update bioconductor-allmll

  To create a new environment, run::

      mamba create --name myenvname bioconductor-allmll

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-allmll:<tag>

   (see `bioconductor-allmll/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-allmll| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-allmll.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-allmll
   :alt:   (downloads)
.. |docker_bioconductor-allmll| image:: https://quay.io/repository/biocontainers/bioconductor-allmll/status
   :target: https://quay.io/repository/biocontainers/bioconductor-allmll
.. _`bioconductor-allmll/tags`: https://quay.io/repository/biocontainers/bioconductor-allmll?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-allmll";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-allmll/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-allmll/README.html