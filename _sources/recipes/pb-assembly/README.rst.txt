:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-assembly'
.. highlight: bash

pb-assembly
===========

.. conda:recipe:: pb-assembly
   :replaces_section_title:
   :noindex:

   Meta\-package for Falcon\/Unzip tool\-suite \(originally by Jason Chin\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-assembly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-assembly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-assembly/meta.yaml>`_

   


.. conda:package:: pb-assembly

   |downloads_pb-assembly| |docker_pb-assembly|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.8-1</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-7</code>,  <code>0.0.6-6</code>,  <code>0.0.6-5</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.4-6</code>,  </span></summary>
      

      ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-7``,  ``0.0.6-6``,  ``0.0.6-5``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.4-6``,  ``0.0.4-5``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-8``,  ``0.0.0-7``,  ``0.0.0-6``,  ``0.0.0-5``,  ``0.0.0-4``,  ``0.0.0-3``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends blasr: 
   :depends bwa: 
   :depends minimap2: 
   :depends mummer4: 
   :depends nim-falcon: 
   :depends pb-dazzler: 
   :depends pb-falcon: ``>=2.2.2``
   :depends pb-falcon-phase: 
   :depends pbgcpp: 
   :depends pbmm2: 
   :depends python: 
   :depends racon: 
   :depends samtools: 
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

      mamba install pb-assembly

   and update with::

      mamba update pb-assembly

  To create a new environment, run::

      mamba create --name myenvname pb-assembly

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pb-assembly:<tag>

   (see `pb-assembly/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-assembly| image:: https://img.shields.io/conda/dn/bioconda/pb-assembly.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-assembly
   :alt:   (downloads)
.. |docker_pb-assembly| image:: https://quay.io/repository/biocontainers/pb-assembly/status
   :target: https://quay.io/repository/biocontainers/pb-assembly
.. _`pb-assembly/tags`: https://quay.io/repository/biocontainers/pb-assembly?tab=tags


.. raw:: html

    <script>
        var package = "pb-assembly";
        var versions = ["0.0.8","0.0.8","0.0.7","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-assembly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-assembly/README.html