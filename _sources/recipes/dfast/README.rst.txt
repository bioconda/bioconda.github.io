:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfast'
.. highlight: bash

dfast
=====

.. conda:recipe:: dfast
   :replaces_section_title:
   :noindex:

   DDBJ Fast Annotation and Submission Tool \- Prokaryotic genome annotation pipeline

   :homepage: https://dfast.nig.ac.jp
   :developer docs: https://github.com/nigyta/dfast_core
   :license: GPL / GPLv3
   :recipe: /`dfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast/meta.yaml>`_
   :links: biotools: :biotools:`dfast`, doi: :doi:`10.1093/bioinformatics/btx713`

   


.. conda:package:: dfast

   |downloads_dfast| |docker_dfast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-1</code>,  <code>1.3.4-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.21-0</code>,  </span></summary>
      

      ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-1``,  ``1.2.19-0``,  ``1.2.18-2``,  ``1.2.18-1``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.16-0``,  ``1.2.15-1``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.13-1``,  ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.7-0``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends aragorn: 
   :depends barrnap: 
   :depends biopython: 
   :depends blast: ``>=2.6.0``
   :depends ghostx: 
   :depends hmmer: ``>=3.1b2``
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends metagene_annotator: ``>=1.0``
   :depends openjdk: 
   :depends plasmidfinder: ``>=2.1.6``
   :depends python: ``>=3.7``
   :depends zlib: 
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

      mamba install dfast

   and update with::

      mamba update dfast

  To create a new environment, run::

      mamba create --name myenvname dfast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dfast:<tag>

   (see `dfast/tags`_ for valid values for ``<tag>``)


.. |downloads_dfast| image:: https://img.shields.io/conda/dn/bioconda/dfast.svg?style=flat
   :target: https://anaconda.org/bioconda/dfast
   :alt:   (downloads)
.. |docker_dfast| image:: https://quay.io/repository/biocontainers/dfast/status
   :target: https://quay.io/repository/biocontainers/dfast
.. _`dfast/tags`: https://quay.io/repository/biocontainers/dfast?tab=tags


.. raw:: html

    <script>
        var package = "dfast";
        var versions = ["1.3.6","1.3.5","1.3.4","1.3.4","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfast/README.html