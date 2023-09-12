:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pindel'
.. highlight: bash

pindel
======

.. conda:recipe:: pindel
   :replaces_section_title:
   :noindex:

   Pindel can detect breakpoints of large deletions\, medium sized insertions\, inversions\, tandem duplications and other structural variants at single\-based resolution from next\-gen sequence data

   :homepage: http://gmt.genome.wustl.edu/packages/pindel/index.html
   :license: GPLv3
   :recipe: /`pindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pindel/meta.yaml>`_
   :links: biotools: :biotools:`pindel`

   


.. conda:package:: pindel

   |downloads_pindel| |docker_pindel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.5b9-10</code>,  <code>0.2.5b9-9</code>,  <code>0.2.5b9-8</code>,  <code>0.2.5b9-7</code>,  <code>0.2.5b9-6</code>,  <code>0.2.5b9-5</code>,  <code>0.2.5b9-4</code>,  <code>0.2.5b9-3</code>,  <code>0.2.5b9-2</code>,  </span></summary>
      

      ``0.2.5b9-10``,  ``0.2.5b9-9``,  ``0.2.5b9-8``,  ``0.2.5b9-7``,  ``0.2.5b9-6``,  ``0.2.5b9-5``,  ``0.2.5b9-4``,  ``0.2.5b9-3``,  ``0.2.5b9-2``,  ``0.2.5b9-1``,  ``0.2.5b9-0``,  ``0.2.5b8-2``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install pindel

   and update with::

      mamba update pindel

  To create a new environment, run::

      mamba create --name myenvname pindel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pindel:<tag>

   (see `pindel/tags`_ for valid values for ``<tag>``)


.. |downloads_pindel| image:: https://img.shields.io/conda/dn/bioconda/pindel.svg?style=flat
   :target: https://anaconda.org/bioconda/pindel
   :alt:   (downloads)
.. |docker_pindel| image:: https://quay.io/repository/biocontainers/pindel/status
   :target: https://quay.io/repository/biocontainers/pindel
.. _`pindel/tags`: https://quay.io/repository/biocontainers/pindel?tab=tags


.. raw:: html

    <script>
        var package = "pindel";
        var versions = ["0.2.5b9","0.2.5b9","0.2.5b9","0.2.5b9","0.2.5b9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pindel/README.html