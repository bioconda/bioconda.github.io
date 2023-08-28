:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-donapllp2013'
.. highlight: bash

bioconductor-donapllp2013
=========================

.. conda:recipe:: bioconductor-donapllp2013
   :replaces_section_title:
   :noindex:

   Supplementary data package for Dona et al. \(2013\) containing example images and tables

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/DonaPLLP2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-donapllp2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-donapllp2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-donapllp2013/meta.yaml>`_

   An experiment data package associated with the publication Dona et al. \(2013\). Package contains runnable vignettes showing an example image segmentation for one posterior lateral line primordium\, and also the data table and code used to analyze tissue\-scale lifetime\-ratio statistics.


.. conda:package:: bioconductor-donapllp2013

   |downloads_bioconductor-donapllp2013| |docker_bioconductor-donapllp2013|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-ebimage: ``>=4.42.0,<4.43.0``
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

      mamba install bioconductor-donapllp2013

   and update with::

      mamba update bioconductor-donapllp2013

  To create a new environment, run::

      mamba create --name myenvname bioconductor-donapllp2013

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-donapllp2013:<tag>

   (see `bioconductor-donapllp2013/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-donapllp2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-donapllp2013.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-donapllp2013
   :alt:   (downloads)
.. |docker_bioconductor-donapllp2013| image:: https://quay.io/repository/biocontainers/bioconductor-donapllp2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-donapllp2013
.. _`bioconductor-donapllp2013/tags`: https://quay.io/repository/biocontainers/bioconductor-donapllp2013?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-donapllp2013";
        var versions = ["1.38.0","1.35.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-donapllp2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-donapllp2013/README.html