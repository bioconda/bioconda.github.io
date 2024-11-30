:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trf'
.. highlight: bash

trf
===

.. conda:recipe:: trf
   :replaces_section_title:
   :noindex:

   Tandem Repeats Finder is a program to locate and display tandem repeats in DNA sequences.

   :homepage: https://tandem.bu.edu/trf/trf.html
   :developer docs: https://github.com/Benson-Genomics-Lab/TRF
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`trf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trf/meta.yaml>`_
   :links: biotools: :biotools:`trf`

   


.. conda:package:: trf

   |downloads_trf| |docker_trf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.09.1-6</code>,  <code>4.09.1-5</code>,  <code>4.09.1-4</code>,  <code>4.09.1-3</code>,  <code>4.09.1-2</code>,  <code>4.09.1-1</code>,  <code>4.09.1-0</code>,  <code>4.09-2</code>,  <code>4.09-1</code>,  </span></summary>
      

      ``4.09.1-6``,  ``4.09.1-5``,  ``4.09.1-4``,  ``4.09.1-3``,  ``4.09.1-2``,  ``4.09.1-1``,  ``4.09.1-0``,  ``4.09-2``,  ``4.09-1``,  ``4.09-0``,  ``4.07b-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install trf

   and update with::

      mamba update trf

  To create a new environment, run::

      mamba create --name myenvname trf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trf:<tag>

   (see `trf/tags`_ for valid values for ``<tag>``)


.. |downloads_trf| image:: https://img.shields.io/conda/dn/bioconda/trf.svg?style=flat
   :target: https://anaconda.org/bioconda/trf
   :alt:   (downloads)
.. |docker_trf| image:: https://quay.io/repository/biocontainers/trf/status
   :target: https://quay.io/repository/biocontainers/trf
.. _`trf/tags`: https://quay.io/repository/biocontainers/trf?tab=tags


.. raw:: html

    <script>
        var package = "trf";
        var versions = ["4.09.1","4.09.1","4.09.1","4.09.1","4.09.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trf/README.html