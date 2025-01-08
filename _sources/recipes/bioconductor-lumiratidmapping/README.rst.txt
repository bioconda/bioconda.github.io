:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumiratidmapping'
.. highlight: bash

bioconductor-lumiratidmapping
=============================

.. conda:recipe:: bioconductor-lumiratidmapping
   :replaces_section_title:
   :noindex:

   Illumina Identifier mapping for Rat

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/lumiRatIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumiratidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumiratidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumiratidmapping/meta.yaml>`_

   This package includes mappings information between different types of Illumina IDs of Illumina Rat chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Rat chips to RefSeq IDs with mapping qualities information.


.. conda:package:: bioconductor-lumiratidmapping

   |downloads_bioconductor-lumiratidmapping| |docker_bioconductor-lumiratidmapping|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-13</code>,  <code>1.10.0-12</code>,  <code>1.10.0-11</code>,  <code>1.10.0-10</code>,  <code>1.10.0-9</code>,  <code>1.10.0-8</code>,  <code>1.10.0-7</code>,  <code>1.10.0-6</code>,  <code>1.10.0-5</code>,  </span></summary>
      

      ``1.10.0-13``,  ``1.10.0-12``,  ``1.10.0-11``,  ``1.10.0-10``,  ``1.10.0-9``,  ``1.10.0-8``,  ``1.10.0-7``,  ``1.10.0-6``,  ``1.10.0-5``,  ``1.10.0-4``,  ``1.10.0-3``,  ``1.10.0-2``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-lumi: ``>=2.58.0,<2.59.0``
   :depends curl: 
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

      mamba install bioconductor-lumiratidmapping

   and update with::

      mamba update bioconductor-lumiratidmapping

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumiratidmapping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumiratidmapping:<tag>

   (see `bioconductor-lumiratidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumiratidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumiratidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumiratidmapping
   :alt:   (downloads)
.. |docker_bioconductor-lumiratidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumiratidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumiratidmapping
.. _`bioconductor-lumiratidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-lumiratidmapping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumiratidmapping";
        var versions = ["1.10.0","1.10.0","1.10.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumiratidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumiratidmapping/README.html