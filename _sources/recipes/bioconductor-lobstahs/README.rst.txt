:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lobstahs'
.. highlight: bash

bioconductor-lobstahs
=====================

.. conda:recipe:: bioconductor-lobstahs
   :replaces_section_title:
   :noindex:

   Lipid and Oxylipin Biomarker Screening through Adduct Hierarchy Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LOBSTAHS.html
   :license: GPL (>= 3) + file LICENSE
   :recipe: /`bioconductor-lobstahs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lobstahs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lobstahs/meta.yaml>`_
   :links: biotools: :biotools:`lobstahs`

   LOBSTAHS is a multifunction package for screening\, annotation\, and putative identification of mass spectral features in large\, HPLC\-MS lipid datasets. In silico data for a wide range of lipids\, oxidized lipids\, and oxylipins can be generated from user\-supplied structural criteria with a database generation function. LOBSTAHS then applies these databases to assign putative compound identities to features in any high\-mass accuracy dataset that has been processed using xcms and CAMERA. Users can then apply a series of orthogonal screening criteria based on adduct ion formation patterns\, chromatographic retention time\, and other properties\, to evaluate and assign confidence scores to this list of preliminary assignments. During the screening routine\, LOBSTAHS rejects assignments that do not meet the specified criteria\, identifies potential isomers and isobars\, and assigns a variety of annotation codes to assist the user in evaluating the accuracy of each assignment.


.. conda:package:: bioconductor-lobstahs

   |downloads_bioconductor-lobstahs| |docker_bioconductor-lobstahs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-camera: ``>=1.62.0,<1.63.0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-lobstahs

   and update with::

      mamba update bioconductor-lobstahs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lobstahs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lobstahs:<tag>

   (see `bioconductor-lobstahs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lobstahs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lobstahs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lobstahs
   :alt:   (downloads)
.. |docker_bioconductor-lobstahs| image:: https://quay.io/repository/biocontainers/bioconductor-lobstahs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lobstahs
.. _`bioconductor-lobstahs/tags`: https://quay.io/repository/biocontainers/bioconductor-lobstahs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lobstahs";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lobstahs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lobstahs/README.html