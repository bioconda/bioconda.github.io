:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwameth'
.. highlight: bash

bwameth
=======

.. conda:recipe:: bwameth
   :replaces_section_title:
   :noindex:

   A fast and accurate aligner of BS\-seq reads

   :homepage: https://github.com/brentp/bwa-meth
   :license: MIT
   :recipe: /`bwameth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`bwameth`

   


.. conda:package:: bwameth

   |downloads_bwameth| |docker_bwameth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.7-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-4</code>,  <code>0.2.2-3</code>,  <code>0.2.2-2</code>,  <code>0.2.2-1</code>,  </span></summary>
      

      ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends python: 
   :depends samtools: 
   :depends toolshed: ``>=0.3.9``
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

      mamba install bwameth

   and update with::

      mamba update bwameth

  To create a new environment, run::

      mamba create --name myenvname bwameth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwameth:<tag>

   (see `bwameth/tags`_ for valid values for ``<tag>``)


.. |downloads_bwameth| image:: https://img.shields.io/conda/dn/bioconda/bwameth.svg?style=flat
   :target: https://anaconda.org/bioconda/bwameth
   :alt:   (downloads)
.. |docker_bwameth| image:: https://quay.io/repository/biocontainers/bwameth/status
   :target: https://quay.io/repository/biocontainers/bwameth
.. _`bwameth/tags`: https://quay.io/repository/biocontainers/bwameth?tab=tags


.. raw:: html

    <script>
        var package = "bwameth";
        var versions = ["0.2.7","0.2.6","0.2.5","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwameth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwameth/README.html