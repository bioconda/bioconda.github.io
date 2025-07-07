:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromhmm'
.. highlight: bash

chromhmm
========

.. conda:recipe:: chromhmm
   :replaces_section_title:
   :noindex:

   ChromHMM is software for learning and characterizing chromatin states. ChromHMM can integrate multiple chromatin datasets such as ChIP\-seq data of various histone modifications to discover de novo the major re\-occuring combinatorial and spatial patterns of marks.

   :homepage: https://github.com/jernst98/ChromHMM
   :license: GPLv3
   :recipe: /`chromhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromhmm/meta.yaml>`_
   :links: biotools: :biotools:`chromhmm`

   


.. conda:package:: chromhmm

   |downloads_chromhmm| |docker_chromhmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.27-0</code>,  <code>1.26-0</code>,  <code>1.25-0</code>,  <code>1.24-0</code>,  <code>1.23-0</code>,  <code>1.21-1</code>,  <code>1.21-0</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  </span></summary>
      

      ``1.27-0``,  ``1.26-0``,  ``1.25-0``,  ``1.24-0``,  ``1.23-0``,  ``1.21-1``,  ``1.21-0``,  ``1.20-1``,  ``1.20-0``,  ``1.19-0``,  ``1.15-0``,  ``1.14-0``,  ``1.12-0``,  ``1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends fonts-conda-ecosystem: 
   :depends openjdk: 
   :depends unzip: 
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

      mamba install chromhmm

   and update with::

      mamba update chromhmm

  To create a new environment, run::

      mamba create --name myenvname chromhmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromhmm:<tag>

   (see `chromhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_chromhmm| image:: https://img.shields.io/conda/dn/bioconda/chromhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/chromhmm
   :alt:   (downloads)
.. |docker_chromhmm| image:: https://quay.io/repository/biocontainers/chromhmm/status
   :target: https://quay.io/repository/biocontainers/chromhmm
.. _`chromhmm/tags`: https://quay.io/repository/biocontainers/chromhmm?tab=tags


.. raw:: html

    <script>
        var package = "chromhmm";
        var versions = ["1.27","1.26","1.25","1.24","1.23"];
    </script>





Notes
-----
ChromHMM comes with about 36MB of example data which is not included in the recipe. This recipe installs a script\, \"download\_chromhmm\_data.sh\"\, which downloads the data in the proper location\, and which can be run after ChromHMM has been installed.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromhmm/README.html