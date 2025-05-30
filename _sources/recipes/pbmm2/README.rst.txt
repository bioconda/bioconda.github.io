:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbmm2'
.. highlight: bash

pbmm2
=====

.. conda:recipe:: pbmm2
   :replaces_section_title:
   :noindex:

   A minimap2 frontend for PacBio native data formats

   :homepage: https://github.com/PacificBiosciences/pbmm2
   :license: BSD-3-Clause-Clear
   :recipe: /`pbmm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbmm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbmm2/meta.yaml>`_

   


.. conda:package:: pbmm2

   |downloads_pbmm2| |docker_pbmm2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.17.0-0</code>,  <code>1.16.99-0</code>,  <code>1.16.0-0</code>,  <code>1.14.99-0</code>,  <code>1.13.1-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``1.17.0-0``,  ``1.16.99-0``,  ``1.16.0-0``,  ``1.14.99-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``

      
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

      mamba install pbmm2

   and update with::

      mamba update pbmm2

  To create a new environment, run::

      mamba create --name myenvname pbmm2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbmm2:<tag>

   (see `pbmm2/tags`_ for valid values for ``<tag>``)


.. |downloads_pbmm2| image:: https://img.shields.io/conda/dn/bioconda/pbmm2.svg?style=flat
   :target: https://anaconda.org/bioconda/pbmm2
   :alt:   (downloads)
.. |docker_pbmm2| image:: https://quay.io/repository/biocontainers/pbmm2/status
   :target: https://quay.io/repository/biocontainers/pbmm2
.. _`pbmm2/tags`: https://quay.io/repository/biocontainers/pbmm2?tab=tags


.. raw:: html

    <script>
        var package = "pbmm2";
        var versions = ["1.17.0","1.16.99","1.16.0","1.14.99","1.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbmm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbmm2/README.html