:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blasr'
.. highlight: bash

blasr
=====

.. conda:recipe:: blasr
   :replaces_section_title:
   :noindex:

   BLASR \- The PacBio long read aligner

   :homepage: https://github.com/PacificBiosciences/blasr
   :license: BSD-3-Clause-Clear
   :recipe: /`blasr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blasr/meta.yaml>`_

   


.. conda:package:: blasr

   |downloads_blasr| |docker_blasr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.3.5-0</code>,  <code>5.3.3-2</code>,  <code>5.3.3-1</code>,  <code>5.3.3-0</code>,  <code>5.3.2-5</code>,  <code>5.3.2-4</code>,  <code>5.3.2-3</code>,  <code>5.3.2-2</code>,  <code>5.3.2-1</code>,  </span></summary>
      

      ``5.3.5-0``,  ``5.3.3-2``,  ``5.3.3-1``,  ``5.3.3-0``,  ``5.3.2-5``,  ``5.3.2-4``,  ``5.3.2-3``,  ``5.3.2-2``,  ``5.3.2-1``,  ``5.3.2-0``,  ``5.3.1-0``,  ``5.2p1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install blasr

   and update with::

      mamba update blasr

  To create a new environment, run::

      mamba create --name myenvname blasr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blasr:<tag>

   (see `blasr/tags`_ for valid values for ``<tag>``)


.. |downloads_blasr| image:: https://img.shields.io/conda/dn/bioconda/blasr.svg?style=flat
   :target: https://anaconda.org/bioconda/blasr
   :alt:   (downloads)
.. |docker_blasr| image:: https://quay.io/repository/biocontainers/blasr/status
   :target: https://quay.io/repository/biocontainers/blasr
.. _`blasr/tags`: https://quay.io/repository/biocontainers/blasr?tab=tags


.. raw:: html

    <script>
        var package = "blasr";
        var versions = ["5.3.5","5.3.3","5.3.3","5.3.3","5.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blasr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blasr/README.html