:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedadipochip'
.. highlight: bash

bioconductor-curatedadipochip
=============================

.. conda:recipe:: bioconductor-curatedadipochip
   :replaces_section_title:
   :noindex:

   A Curated ChIP\-Seq Dataset of MDI\-induced Differentiated Adipocytes \(3T3\-L1\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/curatedAdipoChIP.html
   :license: GPL-3
   :recipe: /`bioconductor-curatedadipochip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipochip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipochip/meta.yaml>`_

   A curated dataset of publicly available ChIP\-sequencing of transcription factors\, chromatin remodelers and histone modifications in the 3T3\-L1 pre\-adipocyte cell line. The package document the data collection\, pre\-processing and processing of the data. In addition to the documentation\, the package contains the scripts that was used to generated the data.


.. conda:package:: bioconductor-curatedadipochip

   |downloads_bioconductor-curatedadipochip| |docker_bioconductor-curatedadipochip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
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

      mamba install bioconductor-curatedadipochip

   and update with::

      mamba update bioconductor-curatedadipochip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-curatedadipochip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedadipochip:<tag>

   (see `bioconductor-curatedadipochip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedadipochip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedadipochip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedadipochip
   :alt:   (downloads)
.. |docker_bioconductor-curatedadipochip| image:: https://quay.io/repository/biocontainers/bioconductor-curatedadipochip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedadipochip
.. _`bioconductor-curatedadipochip/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedadipochip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedadipochip";
        var versions = ["1.16.0","1.14.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedadipochip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedadipochip/README.html