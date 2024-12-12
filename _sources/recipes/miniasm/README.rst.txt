:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniasm'
.. highlight: bash

miniasm
=======

.. conda:recipe:: miniasm
   :replaces_section_title:
   :noindex:

   Ultrafast de novo assembly for long noisy reads \(though having no consensus step\)

   :homepage: https://github.com/lh3/miniasm
   :license: MIT
   :recipe: /`miniasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniasm/meta.yaml>`_

   


.. conda:package:: miniasm

   |downloads_miniasm| |docker_miniasm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3-4</code>,  <code>0.3-3</code>,  <code>0.3-2</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  <code>0.3_r179-3</code>,  <code>0.3_r179-2</code>,  <code>0.3_r179-1</code>,  <code>0.3_r179-0</code>,  </span></summary>
      

      ``0.3-4``,  ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.3_r179-3``,  ``0.3_r179-2``,  ``0.3_r179-1``,  ``0.3_r179-0``,  ``0.2-0``,  ``0.2_r168-3``,  ``0.2_r168-2``,  ``0.2_r168-1``,  ``0.2_r168-0``,  ``0.2_r159-0``,  ``0.2_r137-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install miniasm

   and update with::

      mamba update miniasm

  To create a new environment, run::

      mamba create --name myenvname miniasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miniasm:<tag>

   (see `miniasm/tags`_ for valid values for ``<tag>``)


.. |downloads_miniasm| image:: https://img.shields.io/conda/dn/bioconda/miniasm.svg?style=flat
   :target: https://anaconda.org/bioconda/miniasm
   :alt:   (downloads)
.. |docker_miniasm| image:: https://quay.io/repository/biocontainers/miniasm/status
   :target: https://quay.io/repository/biocontainers/miniasm
.. _`miniasm/tags`: https://quay.io/repository/biocontainers/miniasm?tab=tags


.. raw:: html

    <script>
        var package = "miniasm";
        var versions = ["0.3","0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniasm/README.html