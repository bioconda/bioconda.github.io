:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-human370quadv3ccrlmm'
.. highlight: bash

bioconductor-human370quadv3ccrlmm
=================================

.. conda:recipe:: bioconductor-human370quadv3ccrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/human370quadv3cCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-human370quadv3ccrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human370quadv3ccrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human370quadv3ccrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina 370kQuad arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-human370quadv3ccrlmm

   |downloads_bioconductor-human370quadv3ccrlmm| |docker_bioconductor-human370quadv3ccrlmm|

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
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-human370quadv3ccrlmm

   and update with::

      mamba update bioconductor-human370quadv3ccrlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-human370quadv3ccrlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-human370quadv3ccrlmm:<tag>

   (see `bioconductor-human370quadv3ccrlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-human370quadv3ccrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-human370quadv3ccrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-human370quadv3ccrlmm
   :alt:   (downloads)
.. |docker_bioconductor-human370quadv3ccrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-human370quadv3ccrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-human370quadv3ccrlmm
.. _`bioconductor-human370quadv3ccrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-human370quadv3ccrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-human370quadv3ccrlmm";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-human370quadv3ccrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-human370quadv3ccrlmm/README.html