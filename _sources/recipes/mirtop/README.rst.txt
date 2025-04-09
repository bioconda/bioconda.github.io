:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirtop'
.. highlight: bash

mirtop
======

.. conda:recipe:: mirtop
   :replaces_section_title:
   :noindex:

   Small RNA\-seq annotation.

   :homepage: https://github.com/mirtop/mirtop
   :documentation: https://mirtop.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`mirtop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtop/meta.yaml>`_
   :links: biotools: :biotools:`mirtop`

   


.. conda:package:: mirtop

   |downloads_mirtop| |docker_mirtop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.30-0</code>,  <code>0.4.28-0</code>,  <code>0.4.27-0</code>,  <code>0.4.25-0</code>,  <code>0.4.24-0</code>,  <code>0.4.23-1</code>,  <code>0.4.23-0</code>,  <code>0.4.22-0</code>,  <code>0.4.21-0</code>,  </span></summary>
      

      ``0.4.30-0``,  ``0.4.28-0``,  ``0.4.27-0``,  ``0.4.25-0``,  ``0.4.24-0``,  ``0.4.23-1``,  ``0.4.23-0``,  ``0.4.22-0``,  ``0.4.21-0``,  ``0.4.20-0``,  ``0.4.19-0``,  ``0.4.18a-2``,  ``0.4.18a-1``,  ``0.4.18a-0``,  ``0.4.17a-0``,  ``0.4.15a-0``,  ``0.3.17-1``,  ``0.3.17-0``,  ``0.3.11a0-2``,  ``0.3.11a0-0``,  ``0.3.6a0-0``,  ``0.3.2a0-0``,  ``0.1.8a0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: 
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

      mamba install mirtop

   and update with::

      mamba update mirtop

  To create a new environment, run::

      mamba create --name myenvname mirtop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirtop:<tag>

   (see `mirtop/tags`_ for valid values for ``<tag>``)


.. |downloads_mirtop| image:: https://img.shields.io/conda/dn/bioconda/mirtop.svg?style=flat
   :target: https://anaconda.org/bioconda/mirtop
   :alt:   (downloads)
.. |docker_mirtop| image:: https://quay.io/repository/biocontainers/mirtop/status
   :target: https://quay.io/repository/biocontainers/mirtop
.. _`mirtop/tags`: https://quay.io/repository/biocontainers/mirtop?tab=tags


.. raw:: html

    <script>
        var package = "mirtop";
        var versions = ["0.4.30","0.4.28","0.4.27","0.4.25","0.4.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirtop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirtop/README.html