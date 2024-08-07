:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chewbbaca'
.. highlight: bash

chewbbaca
=========

.. conda:recipe:: chewbbaca
   :replaces_section_title:
   :noindex:

   A complete suite for gene\-by\-gene schema creation and strain identification.

   :homepage: https://github.com/B-UMMI/chewBBACA
   :documentation: https://chewbbaca.readthedocs.io/en/latest/index.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`chewbbaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewbbaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewbbaca/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000166`

   chewBBACA is a comprehensive pipeline including a set of functions for the creation and validation of whole genome and core genome MultiLocus Sequence Typing \(wg\/cgMLST\) schemas\, providing an allele calling algorithm based on Blast Score Ratio that can be run in multiprocessor settings and a set of functions to visualize and validate allele variation in the loci.


.. conda:package:: chewbbaca

   |downloads_chewbbaca| |docker_chewbbaca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.10-0</code>,  <code>3.3.9-0</code>,  <code>3.3.8-0</code>,  <code>3.3.7-0</code>,  <code>3.3.6-0</code>,  <code>3.3.5-0</code>,  <code>3.3.4-0</code>,  <code>3.3.3-0</code>,  <code>3.3.2-0</code>,  </span></summary>
      

      ``3.3.10-0``,  ``3.3.9-0``,  ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.8.5-1``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.1.0-0``,  ``2.0.17.2-0``,  ``2.0.17.1-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.12-2``,  ``2.0.8-2``,  ``2.0.8-0``,  ``2.0.6-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.9.0``
   :depends fasttree: ``>=2.1.11``
   :depends mafft: ``>=7.505``
   :depends numpy: ``>=1.24.3``
   :depends pandas: ``>=1.5.1,<2.1``
   :depends plotly: ``>=5.8.0``
   :depends pyrodigal: ``>=3.0.0``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.27.1``
   :depends scipy: ``>=1.10.1``
   :depends sparqlwrapper: ``>=2.0.0``
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

      mamba install chewbbaca

   and update with::

      mamba update chewbbaca

  To create a new environment, run::

      mamba create --name myenvname chewbbaca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chewbbaca:<tag>

   (see `chewbbaca/tags`_ for valid values for ``<tag>``)


.. |downloads_chewbbaca| image:: https://img.shields.io/conda/dn/bioconda/chewbbaca.svg?style=flat
   :target: https://anaconda.org/bioconda/chewbbaca
   :alt:   (downloads)
.. |docker_chewbbaca| image:: https://quay.io/repository/biocontainers/chewbbaca/status
   :target: https://quay.io/repository/biocontainers/chewbbaca
.. _`chewbbaca/tags`: https://quay.io/repository/biocontainers/chewbbaca?tab=tags


.. raw:: html

    <script>
        var package = "chewbbaca";
        var versions = ["3.3.10","3.3.9","3.3.8","3.3.7","3.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chewbbaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chewbbaca/README.html