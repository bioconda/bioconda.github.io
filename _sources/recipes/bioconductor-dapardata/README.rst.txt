:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dapardata'
.. highlight: bash

bioconductor-dapardata
======================

.. conda:recipe:: bioconductor-dapardata
   :replaces_section_title:
   :noindex:

   Data accompanying the DAPAR and Prostar packages

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/DAPARdata.html
   :license: GPL-2
   :recipe: /`bioconductor-dapardata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapardata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapardata/meta.yaml>`_

   Mass\-spectrometry based UPS proteomics data sets from Ramus C\, Hovasse A\, Marcellin M\, Hesse AM\, Mouton\-Barbosa E\, Bouyssie D\, Vaca S\, Carapito C\, Chaoui K\, Bruley C\, Garin J\, Cianferani S\, Ferro M\, Dorssaeler AV\, Burlet\-Schiltz O\, Schaeffer C\, Coute Y\, Gonzalez de Peredo A. Spiked proteomic standard dataset for testing label\-free quantitative software and statistical methods. Data Brief. 2015 Dec 17\;6\:286\-94 and Giai Gianetto\, Q.\, Combes\, F.\, Ramus\, C.\, Bruley\, C.\, Coute\, Y.\, Burger\, T. \(2016\). Calibration plot for proteomics\: A graphical tool to visually check the assumptions underlying FDR control in quantitative experiments. Proteomics\, 16\(1\)\, 29\-32.


.. conda:package:: bioconductor-dapardata

   |downloads_bioconductor-dapardata| |docker_bioconductor-dapardata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.1-0</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
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

      mamba install bioconductor-dapardata

   and update with::

      mamba update bioconductor-dapardata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dapardata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dapardata:<tag>

   (see `bioconductor-dapardata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dapardata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dapardata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dapardata
   :alt:   (downloads)
.. |docker_bioconductor-dapardata| image:: https://quay.io/repository/biocontainers/bioconductor-dapardata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dapardata
.. _`bioconductor-dapardata/tags`: https://quay.io/repository/biocontainers/bioconductor-dapardata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dapardata";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dapardata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dapardata/README.html