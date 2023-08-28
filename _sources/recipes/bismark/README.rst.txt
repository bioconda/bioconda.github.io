:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bismark'
.. highlight: bash

bismark
=======

.. conda:recipe:: bismark
   :replaces_section_title:
   :noindex:

   Bismark is a program to map bisulfite treated sequencing reads to a genome of interest and perform methylation calls in a single step. The output can be easily imported into a genome viewer\, such as SeqMonk\, and enables a researcher to analyse the methylation levels of their samples straight away.

   :homepage: https://github.com/FelixKrueger/Bismark/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`bismark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bismark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bismark/meta.yaml>`_
   :links: biotools: :biotools:`bismark`, usegalaxy-eu: :usegalaxy-eu:`bismark_bowtie2`

   


.. conda:package:: bismark

   |downloads_bismark| |docker_bismark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.24.1-0</code>,  <code>0.24.0-1</code>,  <code>0.24.0-0</code>,  <code>0.23.1-0</code>,  <code>0.23.0-1</code>,  <code>0.23.0-0</code>,  <code>0.22.3-0</code>,  <code>0.22.2-0</code>,  <code>0.22.1-0</code>,  </span></summary>
      

      ``0.24.1-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.23.0-1``,  ``0.23.0-0``,  ``0.22.3-0``,  ``0.22.2-0``,  ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.1-0``,  ``0.19.0-1``,  ``0.19.0-0``,  ``0.18.1-0``,  ``0.17.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: 
   :depends coreutils: 
   :depends hisat2: 
   :depends minimap2: 
   :depends perl: 
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

      mamba install bismark

   and update with::

      mamba update bismark

  To create a new environment, run::

      mamba create --name myenvname bismark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bismark:<tag>

   (see `bismark/tags`_ for valid values for ``<tag>``)


.. |downloads_bismark| image:: https://img.shields.io/conda/dn/bioconda/bismark.svg?style=flat
   :target: https://anaconda.org/bioconda/bismark
   :alt:   (downloads)
.. |docker_bismark| image:: https://quay.io/repository/biocontainers/bismark/status
   :target: https://quay.io/repository/biocontainers/bismark
.. _`bismark/tags`: https://quay.io/repository/biocontainers/bismark?tab=tags


.. raw:: html

    <script>
        var package = "bismark";
        var versions = ["0.24.1","0.24.0","0.24.0","0.23.1","0.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bismark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bismark/README.html