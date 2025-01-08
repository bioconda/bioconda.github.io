:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtrm'
.. highlight: bash

bioconductor-rtrm
=================

.. conda:recipe:: bioconductor-rtrm
   :replaces_section_title:
   :noindex:

   Identification of Transcriptional Regulatory Modules from Protein\-Protein Interaction Networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rTRM.html
   :license: GPL-3
   :recipe: /`bioconductor-rtrm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtrm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtrm/meta.yaml>`_
   :links: biotools: :biotools:`rtrm`

   rTRM identifies transcriptional regulatory modules \(TRMs\) from protein\-protein interaction networks.


.. conda:package:: bioconductor-rtrm

   |downloads_bioconductor-rtrm| |docker_bioconductor-rtrm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-igraph: ``>=1.0``
   :depends r-rsqlite: 
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

      mamba install bioconductor-rtrm

   and update with::

      mamba update bioconductor-rtrm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtrm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtrm:<tag>

   (see `bioconductor-rtrm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtrm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtrm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtrm
   :alt:   (downloads)
.. |docker_bioconductor-rtrm| image:: https://quay.io/repository/biocontainers/bioconductor-rtrm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtrm
.. _`bioconductor-rtrm/tags`: https://quay.io/repository/biocontainers/bioconductor-rtrm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtrm";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtrm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtrm/README.html