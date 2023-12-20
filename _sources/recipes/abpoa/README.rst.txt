:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abpoa'
.. highlight: bash

abpoa
=====

.. conda:recipe:: abpoa
   :replaces_section_title:
   :noindex:

   abPOA\: fast SIMD\-based partial order alignment using adaptive band

   :homepage: https://github.com/yangao07/abPOA
   :license: GPL
   :recipe: /`abpoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abpoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abpoa/meta.yaml>`_

   


.. conda:package:: abpoa

   |downloads_abpoa| |docker_abpoa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-4</code>,  <code>1.4.1-3</code>,  <code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-1</code>,  </span></summary>
      

      ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install abpoa

   and update with::

      mamba update abpoa

  To create a new environment, run::

      mamba create --name myenvname abpoa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abpoa:<tag>

   (see `abpoa/tags`_ for valid values for ``<tag>``)


.. |downloads_abpoa| image:: https://img.shields.io/conda/dn/bioconda/abpoa.svg?style=flat
   :target: https://anaconda.org/bioconda/abpoa
   :alt:   (downloads)
.. |docker_abpoa| image:: https://quay.io/repository/biocontainers/abpoa/status
   :target: https://quay.io/repository/biocontainers/abpoa
.. _`abpoa/tags`: https://quay.io/repository/biocontainers/abpoa?tab=tags


.. raw:: html

    <script>
        var package = "abpoa";
        var versions = ["1.4.3","1.4.2","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abpoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abpoa/README.html