:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dudes'
.. highlight: bash

dudes
=====

.. conda:recipe:: dudes
   :replaces_section_title:
   :noindex:

   DUDes\: a top\-down taxonomic profiler for metagenomics and metaproteomics

   :homepage: https://github.com/pirovc/dudes
   :license: MIT / MIT License
   :recipe: /`dudes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dudes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dudes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw150`

   


.. conda:package:: dudes

   |downloads_dudes| |docker_dudes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.08-2</code>,  <code>0.08-1</code>,  <code>0.08-0</code>,  <code>0.07-1</code>,  <code>0.07-0</code>,  <code>0.06-3</code>,  <code>0.06-2</code>,  <code>0.06-1</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``,  ``0.07-1``,  ``0.07-0``,  ``0.06-3``,  ``0.06-2``,  ``0.06-1``,  ``0.06-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.4.1``
   :depends python: ``>=3.10``
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

      mamba install dudes

   and update with::

      mamba update dudes

  To create a new environment, run::

      mamba create --name myenvname dudes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dudes:<tag>

   (see `dudes/tags`_ for valid values for ``<tag>``)


.. |downloads_dudes| image:: https://img.shields.io/conda/dn/bioconda/dudes.svg?style=flat
   :target: https://anaconda.org/bioconda/dudes
   :alt:   (downloads)
.. |docker_dudes| image:: https://quay.io/repository/biocontainers/dudes/status
   :target: https://quay.io/repository/biocontainers/dudes
.. _`dudes/tags`: https://quay.io/repository/biocontainers/dudes?tab=tags


.. raw:: html

    <script>
        var package = "dudes";
        var versions = ["0.10.0","0.08","0.08","0.08","0.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dudes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dudes/README.html