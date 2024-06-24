:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elprep'
.. highlight: bash

elprep
======

.. conda:recipe:: elprep
   :replaces_section_title:
   :noindex:

   elPrep is a high\-performance tool for preparing .sam\/.bam files for variant calling in sequencing pipelines. It can be used as a drop\-in replacement for SAMtools\/Picard\/GATK4.

   :homepage: https://github.com/ExaScience/elprep
   :license: AGPL / AGPL-3.0-only
   :recipe: /`elprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elprep/meta.yaml>`_
   :links: biotools: :biotools:`Elprep`, doi: :doi:`10.1371/journal.pone.0244471`

   


.. conda:package:: elprep

   |downloads_elprep| |docker_elprep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.3-1</code>,  <code>5.1.3-0</code>,  <code>5.1.2-0</code>,  <code>5.1.1-0</code>,  <code>5.1.0-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-1</code>,  <code>5.0.1-0</code>,  <code>4.1.6-1</code>,  </span></summary>
      

      ``5.1.3-1``,  ``5.1.3-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.2-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``4.1.6-1``,  ``4.1.6-0``,  ``4.1.5-0``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.04-1``,  ``3.04-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install elprep

   and update with::

      mamba update elprep

  To create a new environment, run::

      mamba create --name myenvname elprep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/elprep:<tag>

   (see `elprep/tags`_ for valid values for ``<tag>``)


.. |downloads_elprep| image:: https://img.shields.io/conda/dn/bioconda/elprep.svg?style=flat
   :target: https://anaconda.org/bioconda/elprep
   :alt:   (downloads)
.. |docker_elprep| image:: https://quay.io/repository/biocontainers/elprep/status
   :target: https://quay.io/repository/biocontainers/elprep
.. _`elprep/tags`: https://quay.io/repository/biocontainers/elprep?tab=tags


.. raw:: html

    <script>
        var package = "elprep";
        var versions = ["5.1.3","5.1.3","5.1.2","5.1.1","5.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elprep/README.html