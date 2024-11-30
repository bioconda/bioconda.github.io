:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-human650v3acrlmm'
.. highlight: bash

bioconductor-human650v3acrlmm
=============================

.. conda:recipe:: bioconductor-human650v3acrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/human650v3aCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-human650v3acrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human650v3acrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human650v3acrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina 650k arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-human650v3acrlmm

   |downloads_bioconductor-human650v3acrlmm| |docker_bioconductor-human650v3acrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-12</code>,  <code>1.0.3-11</code>,  <code>1.0.3-10</code>,  <code>1.0.3-9</code>,  <code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  </span></summary>
      

      ``1.0.3-12``,  ``1.0.3-11``,  ``1.0.3-10``,  ``1.0.3-9``,  ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-human650v3acrlmm

   and update with::

      mamba update bioconductor-human650v3acrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-human650v3acrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-human650v3acrlmm:<tag>

   (see `bioconductor-human650v3acrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-human650v3acrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-human650v3acrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-human650v3acrlmm
   :alt:   (downloads)
.. |docker_bioconductor-human650v3acrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-human650v3acrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-human650v3acrlmm
.. _`bioconductor-human650v3acrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-human650v3acrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-human650v3acrlmm";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-human650v3acrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-human650v3acrlmm/README.html