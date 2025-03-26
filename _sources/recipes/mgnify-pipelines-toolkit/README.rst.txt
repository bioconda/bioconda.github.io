:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgnify-pipelines-toolkit'
.. highlight: bash

mgnify-pipelines-toolkit
========================

.. conda:recipe:: mgnify-pipelines-toolkit
   :replaces_section_title:
   :noindex:

   Collection of scripts and tools for MGnify pipelines.

   :homepage: https://github.com/EBI-Metagenomics/mgnify-pipelines-toolkit
   :license: APACHE / Apache-2.0
   :recipe: /`mgnify-pipelines-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgnify-pipelines-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgnify-pipelines-toolkit/meta.yaml>`_

   This package contains a collection of scripts used by MGnify
   pipelines



.. conda:package:: mgnify-pipelines-toolkit

   |downloads_mgnify-pipelines-toolkit| |docker_mgnify-pipelines-toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  </span></summary>
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.82``
   :depends click: 
   :depends intervaltree: ``3.1.0``
   :depends numpy: ``1.26.0``
   :depends pandas: ``2.0.2``
   :depends pandera: 
   :depends pyfastx: ``>=2.2.0``
   :depends python: ``>=3.9``
   :depends regex: ``2023.12.25``
   :depends requests: 
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

      mamba install mgnify-pipelines-toolkit

   and update with::

      mamba update mgnify-pipelines-toolkit

  To create a new environment, run::

      mamba create --name myenvname mgnify-pipelines-toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgnify-pipelines-toolkit:<tag>

   (see `mgnify-pipelines-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_mgnify-pipelines-toolkit| image:: https://img.shields.io/conda/dn/bioconda/mgnify-pipelines-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/mgnify-pipelines-toolkit
   :alt:   (downloads)
.. |docker_mgnify-pipelines-toolkit| image:: https://quay.io/repository/biocontainers/mgnify-pipelines-toolkit/status
   :target: https://quay.io/repository/biocontainers/mgnify-pipelines-toolkit
.. _`mgnify-pipelines-toolkit/tags`: https://quay.io/repository/biocontainers/mgnify-pipelines-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "mgnify-pipelines-toolkit";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgnify-pipelines-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgnify-pipelines-toolkit/README.html