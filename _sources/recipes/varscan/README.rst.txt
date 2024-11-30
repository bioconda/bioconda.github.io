:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varscan'
.. highlight: bash

varscan
=======

.. conda:recipe:: varscan
   :replaces_section_title:
   :noindex:

   variant detection in massively parallel sequencing data

   :homepage: http://dkoboldt.github.io/varscan/
   :license: The Non-Profit Open Software License version 3.0 (NPOSL-3.0)
   :recipe: /`varscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varscan/meta.yaml>`_
   :links: biotools: :biotools:`varscan`

   


.. conda:package:: varscan

   |downloads_varscan| |docker_varscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.6-0</code>,  <code>2.4.4-1</code>,  <code>2.4.4-0</code>,  <code>2.4.3-2</code>,  <code>2.4.3-1</code>,  <code>2.4.3-0</code>,  <code>2.4.2-2</code>,  <code>2.4.2-1</code>,  <code>2.4.2-0</code>,  </span></summary>
      

      ``2.4.6-0``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-2``,  ``2.4.3-1``,  ``2.4.3-0``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.7-4``,  ``2.3.7-3``,  ``2.3.7-2``,  ``2.3.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends zlib: 
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

      mamba install varscan

   and update with::

      mamba update varscan

  To create a new environment, run::

      mamba create --name myenvname varscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varscan:<tag>

   (see `varscan/tags`_ for valid values for ``<tag>``)


.. |downloads_varscan| image:: https://img.shields.io/conda/dn/bioconda/varscan.svg?style=flat
   :target: https://anaconda.org/bioconda/varscan
   :alt:   (downloads)
.. |docker_varscan| image:: https://quay.io/repository/biocontainers/varscan/status
   :target: https://quay.io/repository/biocontainers/varscan
.. _`varscan/tags`: https://quay.io/repository/biocontainers/varscan?tab=tags


.. raw:: html

    <script>
        var package = "varscan";
        var versions = ["2.4.6","2.4.4","2.4.4","2.4.3","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varscan/README.html