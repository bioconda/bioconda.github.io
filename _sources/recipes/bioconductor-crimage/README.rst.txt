:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crimage'
.. highlight: bash

bioconductor-crimage
====================

.. conda:recipe:: bioconductor-crimage
   :replaces_section_title:
   :noindex:

   CRImage a package to classify cells and calculate tumour cellularity

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CRImage.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-crimage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crimage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crimage/meta.yaml>`_
   :links: biotools: :biotools:`crimage`, doi: :doi:`10.1126/scitranslmed.3004330`

   CRImage provides functionality to process and analyze images\, in particular to classify cells in biological images. Furthermore\, in the context of tumor images\, it provides functionality to calculate tumour cellularity.


.. conda:package:: bioconductor-crimage

   |downloads_bioconductor-crimage| |docker_bioconductor-crimage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-acgh: ``>=1.80.0,<1.81.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-mass: 
   :depends r-sgeostat: 
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

      mamba install bioconductor-crimage

   and update with::

      mamba update bioconductor-crimage

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crimage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crimage:<tag>

   (see `bioconductor-crimage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crimage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crimage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crimage
   :alt:   (downloads)
.. |docker_bioconductor-crimage| image:: https://quay.io/repository/biocontainers/bioconductor-crimage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crimage
.. _`bioconductor-crimage/tags`: https://quay.io/repository/biocontainers/bioconductor-crimage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crimage";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crimage/README.html