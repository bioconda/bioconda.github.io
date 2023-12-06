:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatarget'
.. highlight: bash

bioconductor-mirnatarget
========================

.. conda:recipe:: bioconductor-mirnatarget
   :replaces_section_title:
   :noindex:

   gene target tabale of miRNA for human\/mouse used for MiRaGE package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/miRNATarget.html
   :license: GPL
   :recipe: /`bioconductor-mirnatarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatarget/meta.yaml>`_

   gene target tabale of miRNA for human\/mouse used for MiRaGE package


.. conda:package:: bioconductor-mirnatarget

   |downloads_bioconductor-mirnatarget| |docker_bioconductor-mirnatarget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-mirnatarget

   and update with::

      mamba update bioconductor-mirnatarget

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirnatarget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnatarget:<tag>

   (see `bioconductor-mirnatarget/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnatarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnatarget
   :alt:   (downloads)
.. |docker_bioconductor-mirnatarget| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatarget
.. _`bioconductor-mirnatarget/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatarget?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnatarget";
        var versions = ["1.40.0","1.38.0","1.35.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatarget/README.html