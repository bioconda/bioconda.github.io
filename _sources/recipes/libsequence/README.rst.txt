:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libsequence'
.. highlight: bash

libsequence
===========

.. conda:recipe:: libsequence
   :replaces_section_title:
   :noindex:

   A C\+\+ class library for evolutionary genetics.

   :homepage: http://http://molpopgen.github.io/libsequence/
   :license: GNU Lesser General Public License v3 or later (LGPLv3+)
   :recipe: /`libsequence <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsequence>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsequence/meta.yaml>`_

   


.. conda:package:: libsequence

   |downloads_libsequence| |docker_libsequence|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.8-6</code>,  <code>1.9.8-5</code>,  <code>1.9.8-4</code>,  <code>1.9.8-3</code>,  <code>1.9.8-2</code>,  <code>1.9.8-1</code>,  <code>1.9.8-0</code>,  <code>1.9.7-0</code>,  <code>1.9.6-0</code>,  </span></summary>
      

      ``1.9.8-6``,  ``1.9.8-5``,  ``1.9.8-4``,  ``1.9.8-3``,  ``1.9.8-2``,  ``1.9.8-1``,  ``1.9.8-0``,  ``1.9.7-0``,  ``1.9.6-0``,  ``1.9.5-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-2``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-1``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.4-9``,  ``1.8.4-8``,  ``1.8.4-7``,  ``1.8.4-6``,  ``1.8.4-5``,  ``1.8.4-4``,  ``1.8.4-3``,  ``1.8.4-2``,  ``1.8.4-1``,  ``1.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install libsequence

   and update with::

      mamba update libsequence

  To create a new environment, run::

      mamba create --name myenvname libsequence

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libsequence:<tag>

   (see `libsequence/tags`_ for valid values for ``<tag>``)


.. |downloads_libsequence| image:: https://img.shields.io/conda/dn/bioconda/libsequence.svg?style=flat
   :target: https://anaconda.org/bioconda/libsequence
   :alt:   (downloads)
.. |docker_libsequence| image:: https://quay.io/repository/biocontainers/libsequence/status
   :target: https://quay.io/repository/biocontainers/libsequence
.. _`libsequence/tags`: https://quay.io/repository/biocontainers/libsequence?tab=tags


.. raw:: html

    <script>
        var package = "libsequence";
        var versions = ["1.9.8","1.9.8","1.9.8","1.9.8","1.9.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libsequence/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libsequence/README.html