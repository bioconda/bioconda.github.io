:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rosella'
.. highlight: bash

rosella
=======

.. conda:recipe:: rosella
   :replaces_section_title:
   :noindex:

   Metagenomic binning pipeline and algorithm using UMAP and HDBSCAN

   :homepage: https://github.com/rhysnewell/rosella.git
   :license: GPL3
   :recipe: /`rosella <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella/meta.yaml>`_

   


.. conda:package:: rosella

   |downloads_rosella| |docker_rosella|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  </span></summary>
      

      ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.81``
   :depends coverm: ``>=0.6.1``
   :depends flight-genome: ``>=1.6.0``
   :depends hdbscan: ``>=0.8.28``
   :depends imageio: ``>=2.31``
   :depends joblib: ``>=1.1.0,<=1.3``
   :depends joblib: ``>=1.3.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends matplotlib-base: ``>=3.8``
   :depends numba: ``>=0.53,<=0.57``
   :depends numpy: ``<=1.24``
   :depends openssl: ``>=3.3.2,<4.0a0``
   :depends pandas: ``>=1.3``
   :depends pebble: ``>=5.0``
   :depends pynndescent: ``>=0.5.7``
   :depends python: ``>=3.8,<=3.10``
   :depends scikit-bio: ``>=0.5.7``
   :depends scikit-learn: ``>=1.0.2,<=1.1``
   :depends scipy: ``<=1.11``
   :depends seaborn: ``>=0.12``
   :depends tbb: ``>=2021.10.0``
   :depends threadpoolctl: ``>=3.2.0``
   :depends tqdm: ``>=4.66``
   :depends umap-learn: ``>=0.5.3``
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

      mamba install rosella

   and update with::

      mamba update rosella

  To create a new environment, run::

      mamba create --name myenvname rosella

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rosella:<tag>

   (see `rosella/tags`_ for valid values for ``<tag>``)


.. |downloads_rosella| image:: https://img.shields.io/conda/dn/bioconda/rosella.svg?style=flat
   :target: https://anaconda.org/bioconda/rosella
   :alt:   (downloads)
.. |docker_rosella| image:: https://quay.io/repository/biocontainers/rosella/status
   :target: https://quay.io/repository/biocontainers/rosella
.. _`rosella/tags`: https://quay.io/repository/biocontainers/rosella?tab=tags


.. raw:: html

    <script>
        var package = "rosella";
        var versions = ["0.5.5","0.5.4","0.5.3","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rosella/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rosella/README.html