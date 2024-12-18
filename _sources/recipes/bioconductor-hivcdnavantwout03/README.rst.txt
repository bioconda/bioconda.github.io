:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hivcdnavantwout03'
.. highlight: bash

bioconductor-hivcdnavantwout03
==============================

.. conda:recipe:: bioconductor-hivcdnavantwout03
   :replaces_section_title:
   :noindex:

   T cell line infections with HIV\-1 LAI \(BRU\)

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HIVcDNAvantWout03.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hivcdnavantwout03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hivcdnavantwout03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hivcdnavantwout03/meta.yaml>`_

   The expression levels of approximately 4600 cellular RNA transcripts were assessed in CD4\+ T cell lines at different times after infection with HIV\-1BRU using DNA microarrays. This data corresponds to the first block of a 12 block array image \(001030\_08\_1.GEL\) in the first data set \(2000095918 A\) in the first experiment \(CEM LAI vs HI\-LAI 24hr\). There are two data sets\, which are part of a dye\-swap experiment with replicates\, representing the Cy3 \(green\) absorption intensities for channel 1 \(hiv1raw\) and the Cy5 \(red\) absorption intensities for channel 2 \(hiv2raw\).


.. conda:package:: bioconductor-hivcdnavantwout03

   |downloads_bioconductor-hivcdnavantwout03| |docker_bioconductor-hivcdnavantwout03|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.37.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.37.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.29.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-hivcdnavantwout03

   and update with::

      mamba update bioconductor-hivcdnavantwout03

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hivcdnavantwout03

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hivcdnavantwout03:<tag>

   (see `bioconductor-hivcdnavantwout03/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hivcdnavantwout03| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hivcdnavantwout03.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hivcdnavantwout03
   :alt:   (downloads)
.. |docker_bioconductor-hivcdnavantwout03| image:: https://quay.io/repository/biocontainers/bioconductor-hivcdnavantwout03/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hivcdnavantwout03
.. _`bioconductor-hivcdnavantwout03/tags`: https://quay.io/repository/biocontainers/bioconductor-hivcdnavantwout03?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hivcdnavantwout03";
        var versions = ["1.46.0","1.42.0","1.40.0","1.37.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hivcdnavantwout03/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hivcdnavantwout03/README.html