:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muscle'
.. highlight: bash

muscle
======

.. conda:recipe:: muscle
   :replaces_section_title:
   :noindex:

   Multiple sequence and structure alignment with top benchmark scores scalable to thousands of sequences

   :homepage: https://github.com/rcedgar/muscle
   :license: GPL-3.0-only
   :recipe: /`muscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muscle/meta.yaml>`_
   :links: biotools: :biotools:`muscle`

   


.. conda:package:: muscle

   |downloads_muscle| |docker_muscle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2-0</code>,  <code>5.1-3</code>,  <code>5.1-2</code>,  <code>5.1-1</code>,  <code>5.1.0-1</code>,  <code>5.1.0-0</code>,  <code>5.1-0</code>,  <code>3.8.1551-6</code>,  <code>3.8.1551-5</code>,  </span></summary>
      

      ``5.2-0``,  ``5.1-3``,  ``5.1-2``,  ``5.1-1``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.1-0``,  ``3.8.1551-6``,  ``3.8.1551-5``,  ``3.8.1551-4``,  ``3.8.1551-3``,  ``3.8.1551-2``,  ``3.8.1551-1``,  ``3.8.31-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install muscle

   and update with::

      mamba update muscle

  To create a new environment, run::

      mamba create --name myenvname muscle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/muscle:<tag>

   (see `muscle/tags`_ for valid values for ``<tag>``)


.. |downloads_muscle| image:: https://img.shields.io/conda/dn/bioconda/muscle.svg?style=flat
   :target: https://anaconda.org/bioconda/muscle
   :alt:   (downloads)
.. |docker_muscle| image:: https://quay.io/repository/biocontainers/muscle/status
   :target: https://quay.io/repository/biocontainers/muscle
.. _`muscle/tags`: https://quay.io/repository/biocontainers/muscle?tab=tags


.. raw:: html

    <script>
        var package = "muscle";
        var versions = ["5.2","5.1","5.1","5.1","5.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muscle/README.html