:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsum'
.. highlight: bash

samsum
======

.. conda:recipe:: samsum
   :replaces_section_title:
   :noindex:

   A light\-weight python package for summarizing sequence coverage from SAM and BAM files

   :homepage: https://github.com/hallamlab/samsum
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`samsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsum/meta.yaml>`_

   


.. conda:package:: samsum

   |downloads_samsum| |docker_samsum|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.4-5</code>,  <code>0.1.4-4</code>,  <code>0.1.4-3</code>,  <code>0.1.4-2</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.2-2</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  </span></summary>
      

      ``0.1.4-5``,  ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pyfastx: 
   :depends pytest: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install samsum

   and update with::

      mamba update samsum

  To create a new environment, run::

      mamba create --name myenvname samsum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samsum:<tag>

   (see `samsum/tags`_ for valid values for ``<tag>``)


.. |downloads_samsum| image:: https://img.shields.io/conda/dn/bioconda/samsum.svg?style=flat
   :target: https://anaconda.org/bioconda/samsum
   :alt:   (downloads)
.. |docker_samsum| image:: https://quay.io/repository/biocontainers/samsum/status
   :target: https://quay.io/repository/biocontainers/samsum
.. _`samsum/tags`: https://quay.io/repository/biocontainers/samsum?tab=tags


.. raw:: html

    <script>
        var package = "samsum";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsum/README.html