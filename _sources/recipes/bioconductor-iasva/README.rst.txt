:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iasva'
.. highlight: bash

bioconductor-iasva
==================

.. conda:recipe:: bioconductor-iasva
   :replaces_section_title:
   :noindex:

   Iteratively Adjusted Surrogate Variable Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iasva.html
   :license: GPL-2
   :recipe: /`bioconductor-iasva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iasva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iasva/meta.yaml>`_

   Iteratively Adjusted Surrogate Variable Analysis \(IA\-SVA\) is a statistical framework to uncover hidden sources of variation even when these sources are correlated. IA\-SVA provides a flexible methodology to i\) identify a hidden factor for unwanted heterogeneity while adjusting for all known factors\; ii\) test the significance of the putative hidden factor for explaining the unmodeled variation in the data\; and iii\)\, if significant\, use the estimated factor as an additional known factor in the next iteration to uncover further hidden factors.


.. conda:package:: bioconductor-iasva

   |downloads_bioconductor-iasva| |docker_bioconductor-iasva|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-irlba: 
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

      mamba install bioconductor-iasva

   and update with::

      mamba update bioconductor-iasva

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iasva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iasva:<tag>

   (see `bioconductor-iasva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iasva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iasva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iasva
   :alt:   (downloads)
.. |docker_bioconductor-iasva| image:: https://quay.io/repository/biocontainers/bioconductor-iasva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iasva
.. _`bioconductor-iasva/tags`: https://quay.io/repository/biocontainers/bioconductor-iasva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iasva";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iasva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iasva/README.html