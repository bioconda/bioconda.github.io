:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selscan'
.. highlight: bash

selscan
=======

.. conda:recipe:: selscan
   :replaces_section_title:
   :noindex:

   a program to calculate EHH\-based scans for positive selection in genomes

   :homepage: https://github.com/szpiech/selscan
   :license: GPL / GPL-3.0
   :recipe: /`selscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selscan/meta.yaml>`_
   :links: biotools: :biotools:`selscan`, doi: :doi:`10.1093/molbev/msu211`

   


.. conda:package:: selscan

   |downloads_selscan| |docker_selscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0a-7</code>,  <code>1.2.0a-6</code>,  <code>1.2.0a-5</code>,  <code>1.2.0a-4</code>,  <code>1.2.0a-3</code>,  <code>1.2.0a-2</code>,  <code>1.2.0a-1</code>,  <code>1.2.0a-0</code>,  <code>1.1.0b-3</code>,  </span></summary>
      

      ``1.2.0a-7``,  ``1.2.0a-6``,  ``1.2.0a-5``,  ``1.2.0a-4``,  ``1.2.0a-3``,  ``1.2.0a-2``,  ``1.2.0a-1``,  ``1.2.0a-0``,  ``1.1.0b-3``,  ``1.1.0b-2``,  ``1.1.0b-1``,  ``1.1.0b-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install selscan

   and update with::

      mamba update selscan

  To create a new environment, run::

      mamba create --name myenvname selscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/selscan:<tag>

   (see `selscan/tags`_ for valid values for ``<tag>``)


.. |downloads_selscan| image:: https://img.shields.io/conda/dn/bioconda/selscan.svg?style=flat
   :target: https://anaconda.org/bioconda/selscan
   :alt:   (downloads)
.. |docker_selscan| image:: https://quay.io/repository/biocontainers/selscan/status
   :target: https://quay.io/repository/biocontainers/selscan
.. _`selscan/tags`: https://quay.io/repository/biocontainers/selscan?tab=tags


.. raw:: html

    <script>
        var package = "selscan";
        var versions = ["1.2.0a","1.2.0a","1.2.0a","1.2.0a","1.2.0a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selscan/README.html