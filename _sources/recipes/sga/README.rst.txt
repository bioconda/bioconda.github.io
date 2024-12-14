:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sga'
.. highlight: bash

sga
===

.. conda:recipe:: sga
   :replaces_section_title:
   :noindex:

   SGA \- String Graph Assembler. SGA is a de novo assembler for DNA sequence reads. It is based on Gene Myers string graph formulation of assembly and uses the FM\-index\/Burrows\-Wheeler transform to efficiently find overlaps between sequence reads.

   :homepage: https://github.com/jts/sga
   :license: GPL / GPLv3
   :recipe: /`sga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga/meta.yaml>`_
   :links: biotools: :biotools:`sga`

   


.. conda:package:: sga

   |downloads_sga| |docker_sga|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.15-10</code>,  <code>0.10.15-9</code>,  <code>0.10.15-8</code>,  <code>0.10.15-7</code>,  <code>0.10.15-6</code>,  <code>0.10.15-5</code>,  <code>0.10.15-4</code>,  <code>0.10.15-3</code>,  <code>0.10.15-2</code>,  </span></summary>
      

      ``0.10.15-10``,  ``0.10.15-9``,  ``0.10.15-8``,  ``0.10.15-7``,  ``0.10.15-6``,  ``0.10.15-5``,  ``0.10.15-4``,  ``0.10.15-3``,  ``0.10.15-2``,  ``0.10.15-1``,  ``0.10.15-0``,  ``0.10.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.2,<2.6.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends sparsehash: 
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

      mamba install sga

   and update with::

      mamba update sga

  To create a new environment, run::

      mamba create --name myenvname sga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sga:<tag>

   (see `sga/tags`_ for valid values for ``<tag>``)


.. |downloads_sga| image:: https://img.shields.io/conda/dn/bioconda/sga.svg?style=flat
   :target: https://anaconda.org/bioconda/sga
   :alt:   (downloads)
.. |docker_sga| image:: https://quay.io/repository/biocontainers/sga/status
   :target: https://quay.io/repository/biocontainers/sga
.. _`sga/tags`: https://quay.io/repository/biocontainers/sga?tab=tags


.. raw:: html

    <script>
        var package = "sga";
        var versions = ["0.10.15","0.10.15","0.10.15","0.10.15","0.10.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sga/README.html