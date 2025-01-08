:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-furrowseg'
.. highlight: bash

bioconductor-furrowseg
======================

.. conda:recipe:: bioconductor-furrowseg
   :replaces_section_title:
   :noindex:

   Furrow Segmentation

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/furrowSeg.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-furrowseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-furrowseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-furrowseg/meta.yaml>`_

   Image feature data and analysis codes for the Guglielmi\, Barry et al. paper describing the application of an optogenetics tools to disrupt Drosophila embryo furrowing.


.. conda:package:: bioconductor-furrowseg

   |downloads_bioconductor-furrowseg| |docker_bioconductor-furrowseg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-ebimage: ``>=4.48.0,<4.49.0``
   :depends curl: 
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-locfit: 
   :depends r-tiff: 
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

      mamba install bioconductor-furrowseg

   and update with::

      mamba update bioconductor-furrowseg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-furrowseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-furrowseg:<tag>

   (see `bioconductor-furrowseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-furrowseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-furrowseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-furrowseg
   :alt:   (downloads)
.. |docker_bioconductor-furrowseg| image:: https://quay.io/repository/biocontainers/bioconductor-furrowseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-furrowseg
.. _`bioconductor-furrowseg/tags`: https://quay.io/repository/biocontainers/bioconductor-furrowseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-furrowseg";
        var versions = ["1.34.0","1.30.0","1.28.0","1.25.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-furrowseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-furrowseg/README.html