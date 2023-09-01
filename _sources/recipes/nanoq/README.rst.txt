:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoq'
.. highlight: bash

nanoq
=====

.. conda:recipe:: nanoq
   :replaces_section_title:
   :noindex:

   Ultra\-fast quality control and summary reports for nanopore reads

   :homepage: https://github.com/esteinig/nanoq
   :license: MIT
   :recipe: /`nanoq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoq/meta.yaml>`_

   


.. conda:package:: nanoq

   |downloads_nanoq| |docker_nanoq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.6-1</code>,  <code>0.8.6-0</code>,  <code>0.8.5-1</code>,  <code>0.8.5-0</code>,  </span></summary>
      

      ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install nanoq

   and update with::

      mamba update nanoq

  To create a new environment, run::

      mamba create --name myenvname nanoq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoq:<tag>

   (see `nanoq/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoq| image:: https://img.shields.io/conda/dn/bioconda/nanoq.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoq
   :alt:   (downloads)
.. |docker_nanoq| image:: https://quay.io/repository/biocontainers/nanoq/status
   :target: https://quay.io/repository/biocontainers/nanoq
.. _`nanoq/tags`: https://quay.io/repository/biocontainers/nanoq?tab=tags


.. raw:: html

    <script>
        var package = "nanoq";
        var versions = ["0.10.0","0.10.0","0.10.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoq/README.html