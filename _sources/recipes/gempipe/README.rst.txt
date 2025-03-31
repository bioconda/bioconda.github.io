:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gempipe'
.. highlight: bash

gempipe
=======

.. conda:recipe:: gempipe
   :replaces_section_title:
   :noindex:

   gempipe is a tool for the reconstruction of strain\-specific genome\-scale metabolic models.

   :homepage: https://github.com/lazzarigioele/gempipe
   :documentation: https://gempipe.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gempipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gempipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gempipe/meta.yaml>`_

   


.. conda:package:: gempipe

   |downloads_gempipe| |docker_gempipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.1-0</code>,  <code>1.38.0-0</code>,  <code>1.37.7-0</code>,  <code>1.37.6-0</code>,  <code>1.37.5-0</code>,  <code>1.37.4-0</code>,  <code>1.37.3-0</code>,  <code>1.37.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.38.1-0``,  ``1.38.0-0``,  ``1.37.7-0``,  ``1.37.6-0``,  ``1.37.5-0``,  ``1.37.4-0``,  ``1.37.3-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.35.5-0``,  ``1.35.4-0``,  ``1.35.3-0``,  ``1.35.2-0``,  ``1.35.1-0``,  ``1.35.0-0``,  ``1.34.2-0``,  ``1.34.1-0``,  ``1.34.0-0``,  ``1.33.4-0``,  ``1.33.3-0``,  ``1.33.2-0``,  ``1.33.1-0``,  ``1.33.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.80``
   :depends blast: ``>=2.12.0``
   :depends busco: ``>=5.4.0``
   :depends cd-hit: ``>=4.8.1``
   :depends cobra: ``>=0.29``
   :depends diamond: ``>=2.0.15``
   :depends eggnog-mapper: ``>=2.1.7``
   :depends ipython: ``>=8.7.0``
   :depends matplotlib-base: ``>=3.7.0``
   :depends ncbi-genome-download: ``>=0.3.3``
   :depends openpyxl: ``>=3.1.0``
   :depends pandas: ``>=2.0.0``
   :depends pigz: ``>=2.5``
   :depends prodigal: ``>=2.6.3``
   :depends prokka: ``>=1.14.6``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``>=1.3.0``
   :depends scipy: ``>=1.10.0``
   :depends seaborn: ``>=0.13.0``
   :depends seqkit: ``>=2.2.0``
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

      mamba install gempipe

   and update with::

      mamba update gempipe

  To create a new environment, run::

      mamba create --name myenvname gempipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gempipe:<tag>

   (see `gempipe/tags`_ for valid values for ``<tag>``)


.. |downloads_gempipe| image:: https://img.shields.io/conda/dn/bioconda/gempipe.svg?style=flat
   :target: https://anaconda.org/bioconda/gempipe
   :alt:   (downloads)
.. |docker_gempipe| image:: https://quay.io/repository/biocontainers/gempipe/status
   :target: https://quay.io/repository/biocontainers/gempipe
.. _`gempipe/tags`: https://quay.io/repository/biocontainers/gempipe?tab=tags


.. raw:: html

    <script>
        var package = "gempipe";
        var versions = ["1.38.1","1.38.0","1.37.7","1.37.6","1.37.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gempipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gempipe/README.html