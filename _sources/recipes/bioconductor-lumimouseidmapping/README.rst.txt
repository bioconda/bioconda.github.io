:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumimouseidmapping'
.. highlight: bash

bioconductor-lumimouseidmapping
===============================

.. conda:recipe:: bioconductor-lumimouseidmapping
   :replaces_section_title:
   :noindex:

   Illumina Identifier mapping for Mouse

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/lumiMouseIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumimouseidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseidmapping/meta.yaml>`_

   This package includes mappings information between different types of Illumina IDs of Illumina Mouse chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Mouse chips to RefSeq IDs with mapping qualities information.


.. conda:package:: bioconductor-lumimouseidmapping

   |downloads_bioconductor-lumimouseidmapping| |docker_bioconductor-lumimouseidmapping|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-12</code>,  <code>1.10.0-11</code>,  <code>1.10.0-10</code>,  <code>1.10.0-9</code>,  <code>1.10.0-8</code>,  <code>1.10.0-7</code>,  <code>1.10.0-6</code>,  <code>1.10.0-5</code>,  <code>1.10.0-4</code>,  </span></summary>
      

      ``1.10.0-12``,  ``1.10.0-11``,  ``1.10.0-10``,  ``1.10.0-9``,  ``1.10.0-8``,  ``1.10.0-7``,  ``1.10.0-6``,  ``1.10.0-5``,  ``1.10.0-4``,  ``1.10.0-3``,  ``1.10.0-2``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-lumi: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-lumimouseidmapping

   and update with::

      mamba update bioconductor-lumimouseidmapping

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumimouseidmapping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumimouseidmapping:<tag>

   (see `bioconductor-lumimouseidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumimouseidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumimouseidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumimouseidmapping
   :alt:   (downloads)
.. |docker_bioconductor-lumimouseidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumimouseidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumimouseidmapping
.. _`bioconductor-lumimouseidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-lumimouseidmapping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumimouseidmapping";
        var versions = ["1.10.0","1.10.0","1.10.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumimouseidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumimouseidmapping/README.html