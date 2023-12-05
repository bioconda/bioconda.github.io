:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-egseadata'
.. highlight: bash

bioconductor-egseadata
======================

.. conda:recipe:: bioconductor-egseadata
   :replaces_section_title:
   :noindex:

   Gene set collections for the EGSEA package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/EGSEAdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-egseadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egseadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egseadata/meta.yaml>`_

   This package includes gene set collections that are used for the Ensemble of Gene Set Enrichment Analyses \(EGSEA\) method for gene set testing. It includes Human and Mouse versions of the MSidDB \(Subramanian\, et al. \(2005\) PNAS\, 102\(43\)\:15545\-15550\) and GeneSetDB \(Araki\, et al. \(2012\) FEBS Open Bio\, 2\:76\-82\) collections.


.. conda:package:: bioconductor-egseadata

   |downloads_bioconductor-egseadata| |docker_bioconductor-egseadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-egseadata

   and update with::

      mamba update bioconductor-egseadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-egseadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-egseadata:<tag>

   (see `bioconductor-egseadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-egseadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egseadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-egseadata
   :alt:   (downloads)
.. |docker_bioconductor-egseadata| image:: https://quay.io/repository/biocontainers/bioconductor-egseadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egseadata
.. _`bioconductor-egseadata/tags`: https://quay.io/repository/biocontainers/bioconductor-egseadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-egseadata";
        var versions = ["1.30.0","1.28.0","1.26.0","1.25.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egseadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egseadata/README.html