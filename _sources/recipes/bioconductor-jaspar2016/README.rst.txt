:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2016'
.. highlight: bash

bioconductor-jaspar2016
=======================

.. conda:recipe:: bioconductor-jaspar2016
   :replaces_section_title:
   :noindex:

   Data package for JASPAR 2016

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/JASPAR2016.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2016 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2016>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2016/meta.yaml>`_

   Data package for JASPAR 2016. To search this databases\, please use the package TFBSTools \(\>\= 1.8.1\).


.. conda:package:: bioconductor-jaspar2016

   |downloads_bioconductor-jaspar2016| |docker_bioconductor-jaspar2016|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
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

      mamba install bioconductor-jaspar2016

   and update with::

      mamba update bioconductor-jaspar2016

  To create a new environment, run::

      mamba create --name myenvname bioconductor-jaspar2016

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2016:<tag>

   (see `bioconductor-jaspar2016/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2016| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2016.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2016
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2016| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2016/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2016
.. _`bioconductor-jaspar2016/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2016?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2016";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2016/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2016/README.html