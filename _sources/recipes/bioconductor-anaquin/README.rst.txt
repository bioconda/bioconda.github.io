:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anaquin'
.. highlight: bash

bioconductor-anaquin
====================

.. conda:recipe:: bioconductor-anaquin
   :replaces_section_title:
   :noindex:

   Statistical analysis of sequins

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Anaquin.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-anaquin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin/meta.yaml>`_

   The project is intended to support the use of sequins \(synthetic sequencing spike\-in controls\) owned and made available by the Garvan Institute of Medical Research. The goal is to provide a standard open source library for quantitative analysis\, modelling and visualization of spike\-in controls.


.. conda:package:: bioconductor-anaquin

   |downloads_bioconductor-anaquin| |docker_bioconductor-anaquin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  </span></summary>
      

      ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-knitr: 
   :depends r-locfit: 
   :depends r-plyr: 
   :depends r-rocr: 
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

      mamba install bioconductor-anaquin

   and update with::

      mamba update bioconductor-anaquin

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anaquin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anaquin:<tag>

   (see `bioconductor-anaquin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anaquin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anaquin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anaquin
   :alt:   (downloads)
.. |docker_bioconductor-anaquin| image:: https://quay.io/repository/biocontainers/bioconductor-anaquin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anaquin
.. _`bioconductor-anaquin/tags`: https://quay.io/repository/biocontainers/bioconductor-anaquin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anaquin";
        var versions = ["2.30.0","2.26.0","2.24.0","2.22.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anaquin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anaquin/README.html