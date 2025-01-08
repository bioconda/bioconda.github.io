:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guitar'
.. highlight: bash

bioconductor-guitar
===================

.. conda:recipe:: bioconductor-guitar
   :replaces_section_title:
   :noindex:

   Guitar

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Guitar.html
   :license: GPL-2
   :recipe: /`bioconductor-guitar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guitar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guitar/meta.yaml>`_

   The package is designed for visualization of RNA\-related genomic features with respect to the landmarks of RNA transcripts\, i.e.\, transcription starting site\, start codon\, stop codon and transcription ending site.


.. conda:package:: bioconductor-guitar

   |downloads_bioconductor-guitar| |docker_bioconductor-guitar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.20.1-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-magrittr: 
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

      mamba install bioconductor-guitar

   and update with::

      mamba update bioconductor-guitar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-guitar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-guitar:<tag>

   (see `bioconductor-guitar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-guitar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guitar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-guitar
   :alt:   (downloads)
.. |docker_bioconductor-guitar| image:: https://quay.io/repository/biocontainers/bioconductor-guitar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guitar
.. _`bioconductor-guitar/tags`: https://quay.io/repository/biocontainers/bioconductor-guitar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-guitar";
        var versions = ["2.22.0","2.18.0","2.16.0","2.14.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guitar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guitar/README.html