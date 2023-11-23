:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gimmemotifs'
.. highlight: bash

gimmemotifs
===========

.. conda:recipe:: gimmemotifs
   :replaces_section_title:
   :noindex:

   Motif prediction pipeline and various motif\-related tools

   :homepage: https://github.com/vanheeringen-lab/gimmemotifs
   :license: MIT
   :recipe: /`gimmemotifs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs/meta.yaml>`_
   :links: biotools: :biotools:`gimmemotifs`

   Motif prediction pipeline and various motif\-related tools


.. conda:package:: gimmemotifs

   |downloads_gimmemotifs| |docker_gimmemotifs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.0-5</code>,  <code>0.18.0-4</code>,  <code>0.18.0-2</code>,  <code>0.18.0-1</code>,  <code>0.18.0-0</code>,  <code>0.17.2-1</code>,  <code>0.17.2-0</code>,  <code>0.17.1-2</code>,  <code>0.17.1-1</code>,  </span></summary>
      

      ``0.18.0-5``,  ``0.18.0-4``,  ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.2-1``,  ``0.17.2-0``,  ``0.17.1-2``,  ``0.17.1-1``,  ``0.17.1-0``,  ``0.17.0-2``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-2``,  ``0.16.0-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.4-2``,  ``0.14.4-1``,  ``0.14.4-0``,  ``0.14.3-1``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-2``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-4``,  ``0.13.1-3``,  ``0.13.1-2``,  ``0.13.1-1``,  ``0.13.1-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.10.0-0``,  ``0.10.0b6-1``,  ``0.10.0b5-1``,  ``0.10.0b4-1``,  ``0.10.0b4-0``,  ``0.10.0b1-0``,  ``0.9.0.6-0``,  ``0.9.0.5-0``,  ``0.9.0.4-0``,  ``0.9.0.3-2``,  ``0.8.9.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends dinamo: ``>=1.0``
   :depends gadem: ``>=1.3.1``
   :depends gimmemotifs-minimal: ``0.18.0.*``
   :depends homer: ``>=4.11``
   :depends meme: ``>=5.4.1``
   :depends prosampler: ``>=1.0``
   :depends trawler: ``>=2.0``
   :depends weeder: ``>=2.0``
   :depends xxmotif: ``>=1.6``
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

      mamba install gimmemotifs

   and update with::

      mamba update gimmemotifs

  To create a new environment, run::

      mamba create --name myenvname gimmemotifs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gimmemotifs:<tag>

   (see `gimmemotifs/tags`_ for valid values for ``<tag>``)


.. |downloads_gimmemotifs| image:: https://img.shields.io/conda/dn/bioconda/gimmemotifs.svg?style=flat
   :target: https://anaconda.org/bioconda/gimmemotifs
   :alt:   (downloads)
.. |docker_gimmemotifs| image:: https://quay.io/repository/biocontainers/gimmemotifs/status
   :target: https://quay.io/repository/biocontainers/gimmemotifs
.. _`gimmemotifs/tags`: https://quay.io/repository/biocontainers/gimmemotifs?tab=tags


.. raw:: html

    <script>
        var package = "gimmemotifs";
        var versions = ["0.18.0","0.18.0","0.18.0","0.18.0","0.18.0"];
    </script>


.. conda:package:: gimmemotifs-minimal

   |downloads_gimmemotifs-minimal| |docker_gimmemotifs-minimal|

   :versions:
      
      

      ``0.18.0-5``,  ``0.18.0-4``,  ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.2-1``,  ``0.17.2-0``,  ``0.17.1-2``

      

   
   :depends biofluff: ``>=3.0.4``
   :depends configparser: 
   :depends diskcache: 
   :depends feather-format: 
   :depends genomepy: ``>=0.13.0``
   :depends iteround: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends logomaker: 
   :depends loguru: 
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.18``
   :depends pandas: ``>=1.3,<2``
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: ``>=0.16``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-xxhash: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends qnorm: ``>=0.8.1``
   :depends scikit-learn: ``>=0.23.2``
   :depends scipy: ``>=1.5``
   :depends seaborn: ``>=0.10.1``
   :depends statsmodels: 
   :depends tqdm: ``>=4.46.1``
   :depends xdg: 
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

      mamba install gimmemotifs-minimal

   and update with::

      mamba update gimmemotifs-minimal

  To create a new environment, run::

      mamba create --name myenvname gimmemotifs-minimal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gimmemotifs-minimal:<tag>

   (see `gimmemotifs-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_gimmemotifs-minimal| image:: https://img.shields.io/conda/dn/bioconda/gimmemotifs-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/gimmemotifs-minimal
   :alt:   (downloads)
.. |docker_gimmemotifs-minimal| image:: https://quay.io/repository/biocontainers/gimmemotifs/status
   :target: https://quay.io/repository/biocontainers/gimmemotifs
.. _`gimmemotifs-minimal/tags`: https://quay.io/repository/biocontainers/gimmemotifs-minimal?tab=tags


.. raw:: html

    <script>
        var package = "gimmemotifs";
        var versions = ["0.18.0","0.18.0","0.18.0","0.18.0","0.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gimmemotifs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gimmemotifs/README.html