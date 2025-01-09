:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda-repodata-patches'
.. highlight: bash

bioconda-repodata-patches
=========================

.. conda:recipe:: bioconda-repodata-patches
   :replaces_section_title:
   :noindex:

   generate tweaks to index metadata\, hosted separately from anaconda.org index

   :homepage: https://github.com/bioconda/bioconda-recipes
   :license: CC-PDDC
   :recipe: /`bioconda-repodata-patches <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda-repodata-patches/meta.yaml>`_

   


.. conda:package:: bioconda-repodata-patches

   |downloads_bioconda-repodata-patches| |docker_bioconda-repodata-patches|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20241219-1</code>,  <code>20241219-0</code>,  <code>20240913-0</code>,  <code>20240805-0</code>,  <code>20240525-0</code>,  <code>20240416-0</code>,  <code>20240112-0</code>,  <code>20231213-0</code>,  <code>20230918-1</code>,  </span></summary>
      

      ``20241219-1``,  ``20241219-0``,  ``20240913-0``,  ``20240805-0``,  ``20240525-0``,  ``20240416-0``,  ``20240112-0``,  ``20231213-0``,  ``20230918-1``,  ``20230918-0``,  ``20230907-0``,  ``20230506-1``,  ``20230506-0``,  ``20230428-0``,  ``20230414-0``,  ``20230313-0``,  ``20230310-0``,  ``20230228-0``,  ``20221115-0``,  ``20220921-1``,  ``20220921-0``,  ``20220803-0``,  ``20220206-0``,  ``20220205-0``,  ``20220204-0``,  ``20220203-0``,  ``20220202-0``,  ``20220201-0``,  ``20220131-0``,  ``20220130-0``,  ``20220129-0``,  ``20220128-0``,  ``20220127-0``,  ``20220126-0``,  ``20220125-0``,  ``20220124-0``,  ``20220123-0``,  ``20220122-0``,  ``20220121-0``,  ``20220120-0``,  ``20220119-0``,  ``20220118-0``,  ``20220117-0``,  ``20220116-0``,  ``20220115-0``,  ``20220114-0``,  ``20220113-0``,  ``20220112-0``,  ``20220111-0``,  ``20220110-0``,  ``20220109-0``,  ``20220108-0``,  ``20220107-0``,  ``20220106-0``,  ``20220105-0``,  ``20220104-0``,  ``20220103-0``,  ``20200205-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconda-repodata-patches

   and update with::

      mamba update bioconda-repodata-patches

  To create a new environment, run::

      mamba create --name myenvname bioconda-repodata-patches

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconda-repodata-patches:<tag>

   (see `bioconda-repodata-patches/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconda-repodata-patches| image:: https://img.shields.io/conda/dn/bioconda/bioconda-repodata-patches.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda-repodata-patches
   :alt:   (downloads)
.. |docker_bioconda-repodata-patches| image:: https://quay.io/repository/biocontainers/bioconda-repodata-patches/status
   :target: https://quay.io/repository/biocontainers/bioconda-repodata-patches
.. _`bioconda-repodata-patches/tags`: https://quay.io/repository/biocontainers/bioconda-repodata-patches?tab=tags


.. raw:: html

    <script>
        var package = "bioconda-repodata-patches";
        var versions = ["20241219","20241219","20240913","20240805","20240525"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda-repodata-patches/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda-repodata-patches/README.html