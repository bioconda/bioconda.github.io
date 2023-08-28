:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iyer517'
.. highlight: bash

bioconductor-iyer517
====================

.. conda:recipe:: bioconductor-iyer517
   :replaces_section_title:
   :noindex:

   exprSets for Iyer\, Eisen et all 1999 Science paper

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/Iyer517.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iyer517 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iyer517>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iyer517/meta.yaml>`_

   representation of public Iyer data from http\:\/\/genome\-www.stanford.edu\/serum\/clusters.html


.. conda:package:: bioconductor-iyer517

   |downloads_bioconductor-iyer517| |docker_bioconductor-iyer517|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-iyer517

   and update with::

      mamba update bioconductor-iyer517

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iyer517

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iyer517:<tag>

   (see `bioconductor-iyer517/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iyer517| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iyer517.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iyer517
   :alt:   (downloads)
.. |docker_bioconductor-iyer517| image:: https://quay.io/repository/biocontainers/bioconductor-iyer517/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iyer517
.. _`bioconductor-iyer517/tags`: https://quay.io/repository/biocontainers/bioconductor-iyer517?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iyer517";
        var versions = ["1.42.0","1.40.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iyer517/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iyer517/README.html