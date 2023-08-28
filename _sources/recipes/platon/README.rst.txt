:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platon'
.. highlight: bash

platon
======

.. conda:recipe:: platon
   :replaces_section_title:
   :noindex:

   Plasmid contig classification and characterization for short read draft assemblies.

   :homepage: https://github.com/oschwengers/platon
   :license: GPL / GPLv3
   :recipe: /`platon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platon/meta.yaml>`_
   :links: biotools: :biotools:`platon`

   


.. conda:package:: platon

   |downloads_platon| |docker_platon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7-0</code>,  <code>1.6-1</code>,  <code>1.6-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.7-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10.1``
   :depends diamond: ``>=2.0.6``
   :depends hmmer: ``>=3.3.1``
   :depends infernal: ``>=1.1.4``
   :depends mummer4: ``>=4.0.0beta2``
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3``
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

      mamba install platon

   and update with::

      mamba update platon

  To create a new environment, run::

      mamba create --name myenvname platon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/platon:<tag>

   (see `platon/tags`_ for valid values for ``<tag>``)


.. |downloads_platon| image:: https://img.shields.io/conda/dn/bioconda/platon.svg?style=flat
   :target: https://anaconda.org/bioconda/platon
   :alt:   (downloads)
.. |docker_platon| image:: https://quay.io/repository/biocontainers/platon/status
   :target: https://quay.io/repository/biocontainers/platon
.. _`platon/tags`: https://quay.io/repository/biocontainers/platon?tab=tags


.. raw:: html

    <script>
        var package = "platon";
        var versions = ["1.7","1.6","1.6","1.5.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platon/README.html