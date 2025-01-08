:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfhaz'
.. highlight: bash

bioconductor-tfhaz
==================

.. conda:recipe:: bioconductor-tfhaz
   :replaces_section_title:
   :noindex:

   Transcription Factor High Accumulation Zones

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TFHAZ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfhaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfhaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfhaz/meta.yaml>`_

   It finds trascription factor \(TF\) high accumulation DNA zones\, i.e.\, regions along the genome where there is a high presence of different transcription factors. Starting from a dataset containing the genomic positions of TF binding regions\, for each base of the selected chromosome the accumulation of TFs is computed. Three different types of accumulation \(TF\, region and base accumulation\) are available\, together with the possibility of considering\, in the single base accumulation computing\, the TFs present not only in that single base\, but also in its neighborhood\, within a window of a given width. Two different methods for the search of TF high accumulation DNA zones\, called \"binding regions\" and \"overlaps\"\, are available. In addition\, some functions are provided in order to analyze\, visualize and compare results obtained with different input parameters.


.. conda:package:: bioconductor-tfhaz

   |downloads_bioconductor-tfhaz| |docker_bioconductor-tfhaz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-orfik: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
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

      mamba install bioconductor-tfhaz

   and update with::

      mamba update bioconductor-tfhaz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tfhaz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfhaz:<tag>

   (see `bioconductor-tfhaz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfhaz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfhaz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfhaz
   :alt:   (downloads)
.. |docker_bioconductor-tfhaz| image:: https://quay.io/repository/biocontainers/bioconductor-tfhaz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfhaz
.. _`bioconductor-tfhaz/tags`: https://quay.io/repository/biocontainers/bioconductor-tfhaz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfhaz";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfhaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfhaz/README.html