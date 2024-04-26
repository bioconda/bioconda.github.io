:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toulligqc'
.. highlight: bash

toulligqc
=========

.. conda:recipe:: toulligqc
   :replaces_section_title:
   :noindex:

   A post sequencing QC tool for Oxford Nanopore sequencers

   :homepage: https://github.com/GenomicParisCentre/toulligQC
   :license: CECILL-2.1
   :recipe: /`toulligqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc/meta.yaml>`_

   


.. conda:package:: toulligqc

   |downloads_toulligqc| |docker_toulligqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.6-0</code>,  <code>2.5.5-0</code>,  <code>2.5.4-0</code>,  <code>2.5.3-0</code>,  <code>2.5.2-0</code>,  <code>2.5-0</code>,  <code>2.4-0</code>,  <code>2.3-0</code>,  <code>2.2.3-0</code>,  </span></summary>
      

      ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0.1-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.10-0``,  ``0.9-2``,  ``0.9-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=3.7.0``
   :depends matplotlib-base: ``>=3.6.3``
   :depends numpy: ``>=1.24.2``
   :depends pandas: ``>=1.5.3``
   :depends plotly: ``>=5.15.0``
   :depends pysam: ``>=0.21.0``
   :depends python: ``>=3.10.0``
   :depends scikit-learn: ``>=1.2.1``
   :depends scipy: ``>=1.10.1``
   :depends tqdm: ``>=4.64.1``
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

      mamba install toulligqc

   and update with::

      mamba update toulligqc

  To create a new environment, run::

      mamba create --name myenvname toulligqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/toulligqc:<tag>

   (see `toulligqc/tags`_ for valid values for ``<tag>``)


.. |downloads_toulligqc| image:: https://img.shields.io/conda/dn/bioconda/toulligqc.svg?style=flat
   :target: https://anaconda.org/bioconda/toulligqc
   :alt:   (downloads)
.. |docker_toulligqc| image:: https://quay.io/repository/biocontainers/toulligqc/status
   :target: https://quay.io/repository/biocontainers/toulligqc
.. _`toulligqc/tags`: https://quay.io/repository/biocontainers/toulligqc?tab=tags


.. raw:: html

    <script>
        var package = "toulligqc";
        var versions = ["2.5.6","2.5.5","2.5.4","2.5.3","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toulligqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toulligqc/README.html