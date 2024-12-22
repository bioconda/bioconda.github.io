:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedadiporna'
.. highlight: bash

bioconductor-curatedadiporna
============================

.. conda:recipe:: bioconductor-curatedadiporna
   :replaces_section_title:
   :noindex:

   A Curated RNA\-Seq Dataset of MDI\-induced Differentiated Adipocytes \(3T3\-L1\)

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/curatedAdipoRNA.html
   :license: GPL-3
   :recipe: /`bioconductor-curatedadiporna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadiporna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadiporna/meta.yaml>`_

   A curated dataset of RNA\-Seq samples. The samples are MDI\-induced pre\-phagocytes \(3T3\-L1\) at different time points\/stage of differentiation. The package document the data collection\, pre\-processing and processing. In addition to the documentation\, the package contains the scripts that was used to generated the data.


.. conda:package:: bioconductor-curatedadiporna

   |downloads_bioconductor-curatedadiporna| |docker_bioconductor-curatedadiporna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-curatedadiporna

   and update with::

      mamba update bioconductor-curatedadiporna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-curatedadiporna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedadiporna:<tag>

   (see `bioconductor-curatedadiporna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedadiporna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedadiporna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedadiporna
   :alt:   (downloads)
.. |docker_bioconductor-curatedadiporna| image:: https://quay.io/repository/biocontainers/bioconductor-curatedadiporna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedadiporna
.. _`bioconductor-curatedadiporna/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedadiporna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedadiporna";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedadiporna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedadiporna/README.html