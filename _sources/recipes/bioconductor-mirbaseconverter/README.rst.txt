:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbaseconverter'
.. highlight: bash

bioconductor-mirbaseconverter
=============================

.. conda:recipe:: bioconductor-mirbaseconverter
   :replaces_section_title:
   :noindex:

   A comprehensive and high\-efficiency tool for converting and retrieving the information of miRNAs in different miRBase versions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/miRBaseConverter.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mirbaseconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseconverter/meta.yaml>`_

   A comprehensive tool for converting and retrieving the miRNA Name\, Accession\, Sequence\, Version\, History and Family information in different miRBase versions. It can process a huge number of miRNAs in a short time without other depends.


.. conda:package:: bioconductor-mirbaseconverter

   |downloads_bioconductor-mirbaseconverter| |docker_bioconductor-mirbaseconverter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-mirbaseconverter

   and update with::

      mamba update bioconductor-mirbaseconverter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirbaseconverter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirbaseconverter:<tag>

   (see `bioconductor-mirbaseconverter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirbaseconverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbaseconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbaseconverter
   :alt:   (downloads)
.. |docker_bioconductor-mirbaseconverter| image:: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter
.. _`bioconductor-mirbaseconverter/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirbaseconverter";
        var versions = ["1.30.0","1.24.0","1.22.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbaseconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbaseconverter/README.html