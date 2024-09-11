:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moods'
.. highlight: bash

moods
=====

.. conda:recipe:: moods
   :replaces_section_title:
   :noindex:

   MOODS\: Motif Occurrence Detection Suite

   :homepage: https://www.cs.helsinki.fi/group/pssmfind
   :documentation: https://github.com/jhkorhonen/MOODS/wiki
   
   :developer docs: https://github.com/jhkorhonen/MOODS
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`moods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods/meta.yaml>`_
   :links: biotools: :biotools:`MOODS`, doi: :doi:`10.1109/TCBB.2009.35`

   


.. conda:package:: moods

   |downloads_moods| |docker_moods|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.4.2-2</code>,  <code>1.9.4.2-1</code>,  <code>1.9.4.2-0</code>,  <code>1.9.4.1-4</code>,  <code>1.9.4.1-3</code>,  <code>1.9.4.1-2</code>,  <code>1.9.4.1-1</code>,  <code>1.9.4.1-0</code>,  <code>1.9.3-4</code>,  </span></summary>
      

      ``1.9.4.2-2``,  ``1.9.4.2-1``,  ``1.9.4.2-0``,  ``1.9.4.1-4``,  ``1.9.4.1-3``,  ``1.9.4.1-2``,  ``1.9.4.1-1``,  ``1.9.4.1-0``,  ``1.9.3-4``,  ``1.9.3-2``,  ``1.9.3-1``,  ``1.9.3-0``,  ``1.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install moods

   and update with::

      mamba update moods

  To create a new environment, run::

      mamba create --name myenvname moods

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moods:<tag>

   (see `moods/tags`_ for valid values for ``<tag>``)


.. |downloads_moods| image:: https://img.shields.io/conda/dn/bioconda/moods.svg?style=flat
   :target: https://anaconda.org/bioconda/moods
   :alt:   (downloads)
.. |docker_moods| image:: https://quay.io/repository/biocontainers/moods/status
   :target: https://quay.io/repository/biocontainers/moods
.. _`moods/tags`: https://quay.io/repository/biocontainers/moods?tab=tags


.. raw:: html

    <script>
        var package = "moods";
        var versions = ["1.9.4.2","1.9.4.2","1.9.4.2","1.9.4.1","1.9.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moods/README.html