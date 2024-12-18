:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2018'
.. highlight: bash

bioconductor-jaspar2018
=======================

.. conda:recipe:: bioconductor-jaspar2018
   :replaces_section_title:
   :noindex:

   Data package for JASPAR 2018

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/JASPAR2018.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2018 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2018>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2018/meta.yaml>`_

   Data package for JASPAR 2018. To search this databases\, please use the package TFBSTools \(\>\= 1.15.6\).


.. conda:package:: bioconductor-jaspar2018

   |downloads_bioconductor-jaspar2018| |docker_bioconductor-jaspar2018|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-14</code>,  <code>1.1.1-13</code>,  <code>1.1.1-12</code>,  <code>1.1.1-11</code>,  <code>1.1.1-10</code>,  <code>1.1.1-9</code>,  <code>1.1.1-8</code>,  <code>1.1.1-7</code>,  <code>1.1.1-6</code>,  </span></summary>
      

      ``1.1.1-14``,  ``1.1.1-13``,  ``1.1.1-12``,  ``1.1.1-11``,  ``1.1.1-10``,  ``1.1.1-9``,  ``1.1.1-8``,  ``1.1.1-7``,  ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.99.2-0``

      
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

      mamba install bioconductor-jaspar2018

   and update with::

      mamba update bioconductor-jaspar2018

  To create a new environment, run::

      mamba create --name myenvname bioconductor-jaspar2018

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2018:<tag>

   (see `bioconductor-jaspar2018/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2018| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2018.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2018
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2018| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2018/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2018
.. _`bioconductor-jaspar2018/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2018?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2018";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2018/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2018/README.html