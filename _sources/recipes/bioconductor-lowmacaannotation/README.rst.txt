:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lowmacaannotation'
.. highlight: bash

bioconductor-lowmacaannotation
==============================

.. conda:recipe:: bioconductor-lowmacaannotation
   :replaces_section_title:
   :noindex:

   LowMACAAnnotation

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/LowMACAAnnotation.html
   :license: GPL-3
   :recipe: /`bioconductor-lowmacaannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmacaannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmacaannotation/meta.yaml>`_

   A package containing the data to run LowMACA package.


.. conda:package:: bioconductor-lowmacaannotation

   |downloads_bioconductor-lowmacaannotation| |docker_bioconductor-lowmacaannotation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.3-13</code>,  <code>0.99.3-12</code>,  <code>0.99.3-11</code>,  <code>0.99.3-10</code>,  <code>0.99.3-9</code>,  <code>0.99.3-8</code>,  <code>0.99.3-7</code>,  <code>0.99.3-6</code>,  <code>0.99.3-5</code>,  </span></summary>
      

      ``0.99.3-13``,  ``0.99.3-12``,  ``0.99.3-11``,  ``0.99.3-10``,  ``0.99.3-9``,  ``0.99.3-8``,  ``0.99.3-7``,  ``0.99.3-6``,  ``0.99.3-5``,  ``0.99.3-4``,  ``0.99.3-3``,  ``0.99.3-2``,  ``0.99.3-1``,  ``0.99.3-0``

      
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

      mamba install bioconductor-lowmacaannotation

   and update with::

      mamba update bioconductor-lowmacaannotation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lowmacaannotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lowmacaannotation:<tag>

   (see `bioconductor-lowmacaannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lowmacaannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lowmacaannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lowmacaannotation
   :alt:   (downloads)
.. |docker_bioconductor-lowmacaannotation| image:: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation
.. _`bioconductor-lowmacaannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lowmacaannotation";
        var versions = ["0.99.3","0.99.3","0.99.3","0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lowmacaannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lowmacaannotation/README.html