:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcgsa'
.. highlight: bash

bioconductor-dcgsa
==================

.. conda:recipe:: bioconductor-dcgsa
   :replaces_section_title:
   :noindex:

   Distance\-correlation based Gene Set Analysis for longitudinal gene expression profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/dcGSA.html
   :license: GPL-2
   :recipe: /`bioconductor-dcgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcgsa/meta.yaml>`_
   :links: biotools: :biotools:`dcgsa`, doi: :doi:`10.1038/nmeth.3252`

   Distance\-correlation based Gene Set Analysis for longitudinal gene expression profiles. In longitudinal studies\, the gene expression profiles were collected at each visit from each subject and hence there are multiple measurements of the gene expression profiles for each subject. The dcGSA package could be used to assess the associations between gene sets and clinical outcomes of interest by fully taking advantage of the longitudinal nature of both the gene expression profiles and clinical outcomes.


.. conda:package:: bioconductor-dcgsa

   |downloads_bioconductor-dcgsa| |docker_bioconductor-dcgsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-dcgsa

   and update with::

      mamba update bioconductor-dcgsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dcgsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dcgsa:<tag>

   (see `bioconductor-dcgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dcgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcgsa
   :alt:   (downloads)
.. |docker_bioconductor-dcgsa| image:: https://quay.io/repository/biocontainers/bioconductor-dcgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcgsa
.. _`bioconductor-dcgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-dcgsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dcgsa";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcgsa/README.html