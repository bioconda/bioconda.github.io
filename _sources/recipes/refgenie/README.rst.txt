:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenie'
.. highlight: bash

refgenie
========

.. conda:recipe:: refgenie
   :replaces_section_title:
   :noindex:

   Refgenie creates a standardized folder structure for reference genome files and indexes. You can download pre\-built genomes or build your own for any fasta file

   :homepage: http://refgenie.databio.org
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenie/meta.yaml>`_

   


.. conda:package:: refgenie

   |downloads_refgenie| |docker_refgenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends logmuse: ``>=0.2.6``
   :depends piper: ``>=0.12.1``
   :depends pyfaidx: ``>=0.5.5.2``
   :depends python: ``>=3.6``
   :depends refgenconf: ``>=0.10.0``
   :depends yacman: ``>=0.8.0``
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

      mamba install refgenie

   and update with::

      mamba update refgenie

  To create a new environment, run::

      mamba create --name myenvname refgenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/refgenie:<tag>

   (see `refgenie/tags`_ for valid values for ``<tag>``)


.. |downloads_refgenie| image:: https://img.shields.io/conda/dn/bioconda/refgenie.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenie
   :alt:   (downloads)
.. |docker_refgenie| image:: https://quay.io/repository/biocontainers/refgenie/status
   :target: https://quay.io/repository/biocontainers/refgenie
.. _`refgenie/tags`: https://quay.io/repository/biocontainers/refgenie?tab=tags


.. raw:: html

    <script>
        var package = "refgenie";
        var versions = ["0.12.1","0.12.0","0.11.0","0.10.0","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenie/README.html