:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumihumanidmapping'
.. highlight: bash

bioconductor-lumihumanidmapping
===============================

.. conda:recipe:: bioconductor-lumihumanidmapping
   :replaces_section_title:
   :noindex:

   Illumina Identifier mapping for Human

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/lumiHumanIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumihumanidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanidmapping/meta.yaml>`_

   This package includes mappings information between different types of Illumina IDs of Illumina Human chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Human chips to RefSeq IDs with mapping qualities information.


.. conda:package:: bioconductor-lumihumanidmapping

   |downloads_bioconductor-lumihumanidmapping| |docker_bioconductor-lumihumanidmapping|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.1-12</code>,  <code>1.10.1-11</code>,  <code>1.10.1-10</code>,  <code>1.10.1-9</code>,  <code>1.10.1-8</code>,  <code>1.10.1-7</code>,  <code>1.10.1-6</code>,  <code>1.10.1-5</code>,  <code>1.10.1-4</code>,  </span></summary>
      

      ``1.10.1-12``,  ``1.10.1-11``,  ``1.10.1-10``,  ``1.10.1-9``,  ``1.10.1-8``,  ``1.10.1-7``,  ``1.10.1-6``,  ``1.10.1-5``,  ``1.10.1-4``,  ``1.10.1-3``,  ``1.10.1-2``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-lumi: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-lumihumanidmapping

   and update with::

      mamba update bioconductor-lumihumanidmapping

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumihumanidmapping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumihumanidmapping:<tag>

   (see `bioconductor-lumihumanidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumihumanidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumihumanidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumihumanidmapping
   :alt:   (downloads)
.. |docker_bioconductor-lumihumanidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping
.. _`bioconductor-lumihumanidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumihumanidmapping";
        var versions = ["1.10.1","1.10.1","1.10.1","1.10.1","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumihumanidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumihumanidmapping/README.html