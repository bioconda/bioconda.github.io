:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alfred'
.. highlight: bash

alfred
======

.. conda:recipe:: alfred
   :replaces_section_title:
   :noindex:

   BAM alignment statistics\, feature counting and feature annotation

   :homepage: https://github.com/tobiasrausch/alfred
   :license: BSD / BSD-3-Clause
   :recipe: /`alfred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred/meta.yaml>`_

   


.. conda:package:: alfred

   |downloads_alfred| |docker_alfred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-2</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  <code>0.2.6-2</code>,  <code>0.2.6-1</code>,  </span></summary>
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.8-0``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.19-0``,  ``0.1.18-0``,  ``0.1.17-2``,  ``0.1.17-1``,  ``0.1.17-0``,  ``0.1.16-1``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.13-0``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-2``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.3-4``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.20,<1.21.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install alfred

   and update with::

      mamba update alfred

  To create a new environment, run::

      mamba create --name myenvname alfred

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alfred:<tag>

   (see `alfred/tags`_ for valid values for ``<tag>``)


.. |downloads_alfred| image:: https://img.shields.io/conda/dn/bioconda/alfred.svg?style=flat
   :target: https://anaconda.org/bioconda/alfred
   :alt:   (downloads)
.. |docker_alfred| image:: https://quay.io/repository/biocontainers/alfred/status
   :target: https://quay.io/repository/biocontainers/alfred
.. _`alfred/tags`: https://quay.io/repository/biocontainers/alfred?tab=tags


.. raw:: html

    <script>
        var package = "alfred";
        var versions = ["0.3.1","0.3.1","0.3.1","0.2.8","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alfred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alfred/README.html