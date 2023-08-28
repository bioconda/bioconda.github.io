:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sortmerna'
.. highlight: bash

sortmerna
=========

.. conda:recipe:: sortmerna
   :replaces_section_title:
   :noindex:

   SortMeRNA is a biological sequence analysis tool for filtering\, mapping and OTU\-picking NGS reads.

   :homepage: http://bioinfo.lifl.fr/RNA/sortmerna
   :license: LGPL
   :recipe: /`sortmerna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sortmerna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sortmerna/meta.yaml>`_
   :links: biotools: :biotools:`sortmerna`, doi: :doi:`10.1093/bioinformatics/bts611`, usegalaxy-eu: :usegalaxy-eu:`bg_sortmerna`

   


.. conda:package:: sortmerna

   |downloads_sortmerna| |docker_sortmerna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3.6-0</code>,  <code>4.3.4-0</code>,  <code>4.3.3-0</code>,  <code>4.3.2-1</code>,  <code>4.3.2-0</code>,  <code>4.3.1-1</code>,  <code>4.3.1-0</code>,  <code>4.2.0-1</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``4.3.6-0``,  ``4.3.4-0``,  ``4.3.3-0``,  ``4.3.2-1``,  ``4.3.2-0``,  ``4.3.1-1``,  ``4.3.1-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``2.1b-4``,  ``2.1b-3``,  ``2.1b-2``,  ``2.1b-1``,  ``2.1b-0``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install sortmerna

   and update with::

      mamba update sortmerna

  To create a new environment, run::

      mamba create --name myenvname sortmerna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sortmerna:<tag>

   (see `sortmerna/tags`_ for valid values for ``<tag>``)


.. |downloads_sortmerna| image:: https://img.shields.io/conda/dn/bioconda/sortmerna.svg?style=flat
   :target: https://anaconda.org/bioconda/sortmerna
   :alt:   (downloads)
.. |docker_sortmerna| image:: https://quay.io/repository/biocontainers/sortmerna/status
   :target: https://quay.io/repository/biocontainers/sortmerna
.. _`sortmerna/tags`: https://quay.io/repository/biocontainers/sortmerna?tab=tags


.. raw:: html

    <script>
        var package = "sortmerna";
        var versions = ["4.3.6","4.3.4","4.3.3","4.3.2","4.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sortmerna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sortmerna/README.html