:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsh-bio'
.. highlight: bash

dsh-bio
=======

.. conda:recipe:: dsh-bio
   :replaces_section_title:
   :noindex:

   Tools for BED\, FASTA\, FASTQ\, GAF\, GFA1\/2\, GFF3\, PAF\, SAM\, and VCF files

   :homepage: https://github.com/heuermh/dishevelled-bio
   :license: LGPL version 3 or later
   :recipe: /`dsh-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsh-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsh-bio/meta.yaml>`_

   


.. conda:package:: dsh-bio

   |downloads_dsh-bio| |docker_dsh-bio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4-0</code>,  <code>2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.7-0</code>,  </span></summary>
      

      ``2.4-0``,  ``2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.4-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=17``
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

      mamba install dsh-bio

   and update with::

      mamba update dsh-bio

  To create a new environment, run::

      mamba create --name myenvname dsh-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dsh-bio:<tag>

   (see `dsh-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_dsh-bio| image:: https://img.shields.io/conda/dn/bioconda/dsh-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/dsh-bio
   :alt:   (downloads)
.. |docker_dsh-bio| image:: https://quay.io/repository/biocontainers/dsh-bio/status
   :target: https://quay.io/repository/biocontainers/dsh-bio
.. _`dsh-bio/tags`: https://quay.io/repository/biocontainers/dsh-bio?tab=tags


.. raw:: html

    <script>
        var package = "dsh-bio";
        var versions = ["2.4","2.3","2.2.2","2.2.1","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsh-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsh-bio/README.html