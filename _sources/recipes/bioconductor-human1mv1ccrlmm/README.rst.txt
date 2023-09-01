:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-human1mv1ccrlmm'
.. highlight: bash

bioconductor-human1mv1ccrlmm
============================

.. conda:recipe:: bioconductor-human1mv1ccrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/human1mv1cCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-human1mv1ccrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human1mv1ccrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human1mv1ccrlmm/meta.yaml>`_

   Package with metadata fast genotyping Illumina 1M arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-human1mv1ccrlmm

   |downloads_bioconductor-human1mv1ccrlmm| |docker_bioconductor-human1mv1ccrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-11</code>,  <code>1.0.3-10</code>,  <code>1.0.3-9</code>,  <code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  </span></summary>
      

      ``1.0.3-11``,  ``1.0.3-10``,  ``1.0.3-9``,  ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-human1mv1ccrlmm

   and update with::

      mamba update bioconductor-human1mv1ccrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-human1mv1ccrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-human1mv1ccrlmm:<tag>

   (see `bioconductor-human1mv1ccrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-human1mv1ccrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-human1mv1ccrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-human1mv1ccrlmm
   :alt:   (downloads)
.. |docker_bioconductor-human1mv1ccrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-human1mv1ccrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-human1mv1ccrlmm
.. _`bioconductor-human1mv1ccrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-human1mv1ccrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-human1mv1ccrlmm";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-human1mv1ccrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-human1mv1ccrlmm/README.html