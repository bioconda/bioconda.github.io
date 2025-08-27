:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medicc2'
.. highlight: bash

medicc2
=======

.. conda:recipe:: medicc2
   :replaces_section_title:
   :noindex:

   Whole\-genome doubling\-aware copy number phylogenies for cancer evolution

   :homepage: https://bitbucket.org/schwarzlab/medicc2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`medicc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medicc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medicc2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-022-02794-9`

   For more information see the accompanying biorxiv preprint \"Kaufmann et al. Whole\-genome 
   doubling\-aware copy number phylogenies for cancer evolution with MEDICC2.\"



.. conda:package:: medicc2

   |downloads_medicc2| |docker_medicc2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.2-0</code>,  </span></summary>
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.8.3-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6b1-0``,  ``0.5b4-0``,  ``0.5b3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends joblib: ``>=1.0.1``
   :depends libcxx: ``>=18``
   :depends matplotlib-base: ``>=3.3.4``
   :depends numpy: ``>=1.20.1,<2.0``
   :depends numpy: ``>=1.21,<3``
   :depends openfst: ``>=1.8.2,<1.8.3.0a0``
   :depends pandas: ``>=1.2,<2.1``
   :depends pyranges: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: ``>=5.4.1``
   :depends scipy: ``>=1.7``
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

      mamba install medicc2

   and update with::

      mamba update medicc2

  To create a new environment, run::

      mamba create --name myenvname medicc2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/medicc2:<tag>

   (see `medicc2/tags`_ for valid values for ``<tag>``)


.. |downloads_medicc2| image:: https://img.shields.io/conda/dn/bioconda/medicc2.svg?style=flat
   :target: https://anaconda.org/bioconda/medicc2
   :alt:   (downloads)
.. |docker_medicc2| image:: https://quay.io/repository/biocontainers/medicc2/status
   :target: https://quay.io/repository/biocontainers/medicc2
.. _`medicc2/tags`: https://quay.io/repository/biocontainers/medicc2?tab=tags


.. raw:: html

    <script>
        var package = "medicc2";
        var versions = ["1.1.2","1.1.2","1.1.1","1.0.4","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medicc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medicc2/README.html