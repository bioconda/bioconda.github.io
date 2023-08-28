:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-powertcr'
.. highlight: bash

bioconductor-powertcr
=====================

.. conda:recipe:: bioconductor-powertcr
   :replaces_section_title:
   :noindex:

   Model\-Based Comparative Analysis of the TCR Repertoire

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/powerTCR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-powertcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powertcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-powertcr/meta.yaml>`_

   This package provides a model for the clone size distribution of the TCR repertoire. Further\, it permits comparative analysis of TCR repertoire libraries based on theoretical model fits.


.. conda:package:: bioconductor-powertcr

   |downloads_bioconductor-powertcr| |docker_bioconductor-powertcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.3-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cubature: 
   :depends r-doparallel: 
   :depends r-evmix: 
   :depends r-foreach: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-truncdist: 
   :depends r-vegan: 
   :depends r-vgam: 
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

      mamba install bioconductor-powertcr

   and update with::

      mamba update bioconductor-powertcr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-powertcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-powertcr:<tag>

   (see `bioconductor-powertcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-powertcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-powertcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-powertcr
   :alt:   (downloads)
.. |docker_bioconductor-powertcr| image:: https://quay.io/repository/biocontainers/bioconductor-powertcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-powertcr
.. _`bioconductor-powertcr/tags`: https://quay.io/repository/biocontainers/bioconductor-powertcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-powertcr";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-powertcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-powertcr/README.html