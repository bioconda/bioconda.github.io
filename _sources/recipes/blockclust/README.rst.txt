:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blockclust'
.. highlight: bash

blockclust
==========

.. conda:recipe:: blockclust
   :replaces_section_title:
   :noindex:

   Efficient clustering and classification of non\-coding RNAs from short read RNA\-seq profiles.

   :homepage: https://github.com/pavanvidem/blockclust
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`blockclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu270`

   


.. conda:package:: blockclust

   |downloads_blockclust| |docker_blockclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-9</code>,  <code>1.1.0-8</code>,  <code>1.1.0-7</code>,  <code>1.1.0-6</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  <code>1.1.0-3</code>,  </span></summary>
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends cloudpickle: ``0.5.6.*``
   :depends eden: ``1.1.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mcl: ``>=14.137``
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dendextend: ``>=1.8.0``
   :depends scikit-learn: ``>=0.20.0``
   :depends wget: 
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

      mamba install blockclust

   and update with::

      mamba update blockclust

  To create a new environment, run::

      mamba create --name myenvname blockclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blockclust:<tag>

   (see `blockclust/tags`_ for valid values for ``<tag>``)


.. |downloads_blockclust| image:: https://img.shields.io/conda/dn/bioconda/blockclust.svg?style=flat
   :target: https://anaconda.org/bioconda/blockclust
   :alt:   (downloads)
.. |docker_blockclust| image:: https://quay.io/repository/biocontainers/blockclust/status
   :target: https://quay.io/repository/biocontainers/blockclust
.. _`blockclust/tags`: https://quay.io/repository/biocontainers/blockclust?tab=tags


.. raw:: html

    <script>
        var package = "blockclust";
        var versions = ["1.1.1","1.1.1","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockclust/README.html