:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignlib-lite'
.. highlight: bash

alignlib-lite
=============

.. conda:recipe:: alignlib-lite
   :replaces_section_title:
   :noindex:

   Simple wrapper around alignlib C\+\+ library for sequence alignment

   :homepage: http://sourceforge.net/projects/alignlib/
   :license: GPL-2.0-or-later
   :recipe: /`alignlib-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignlib-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignlib-lite/meta.yaml>`_

   


.. conda:package:: alignlib-lite

   |downloads_alignlib-lite| |docker_alignlib-lite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3-6</code>,  <code>0.3-5</code>,  <code>0.3-4</code>,  <code>0.3-3</code>,  <code>0.3-2</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  <code>0.2.3-2</code>,  <code>0.2.3-1</code>,  </span></summary>
      

      ``0.3-6``,  ``0.3-5``,  ``0.3-4``,  ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install alignlib-lite

   and update with::

      mamba update alignlib-lite

  To create a new environment, run::

      mamba create --name myenvname alignlib-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alignlib-lite:<tag>

   (see `alignlib-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_alignlib-lite| image:: https://img.shields.io/conda/dn/bioconda/alignlib-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/alignlib-lite
   :alt:   (downloads)
.. |docker_alignlib-lite| image:: https://quay.io/repository/biocontainers/alignlib-lite/status
   :target: https://quay.io/repository/biocontainers/alignlib-lite
.. _`alignlib-lite/tags`: https://quay.io/repository/biocontainers/alignlib-lite?tab=tags


.. raw:: html

    <script>
        var package = "alignlib-lite";
        var versions = ["0.3","0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignlib-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignlib-lite/README.html