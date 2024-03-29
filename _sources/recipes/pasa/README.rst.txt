:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasa'
.. highlight: bash

pasa
====

.. conda:recipe:: pasa
   :replaces_section_title:
   :noindex:

   PASA\, acronym for Program to Assemble Spliced Alignments \(and pronounced \'pass\-uh\'\)\, is a eukaryotic genome annotation tool that exploits spliced alignments of expressed transcript sequences to automatically model gene structures\, and to maintain gene structure annotation consistent with the most recently available experimental sequence data. PASA also identifies and classifies all splicing variations supported by the transcript alignments.

   :homepage: https://github.com/PASApipeline/PASApipeline
   :documentation: https://github.com/PASApipeline/PASApipeline/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pasa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasa/meta.yaml>`_
   :links: biotools: :biotools:`PASA`, doi: :doi:`10.1093/nar/gkg770`, doi: :doi:`10.1186/gb-2008-9-1-r7`

   


.. conda:package:: pasa

   |downloads_pasa| |docker_pasa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.3-1</code>,  <code>2.5.3-0</code>,  <code>2.5.2-3</code>,  <code>2.5.2-2</code>,  <code>2.5.2-1</code>,  <code>2.5.2-0</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.3.3-2</code>,  </span></summary>
      

      ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-3``,  ``2.5.2-2``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends cdbtools: 
   :depends fasta3: ``>=36.3.8i``
   :depends gmap: ``>=2023.10.10``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends lighttpd: 
   :depends minimap2: ``>=2.22``
   :depends pblat: ``>=2.5``
   :depends perl: 
   :depends perl-cgi: 
   :depends perl-db_file: 
   :depends perl-dbd-sqlite: 
   :depends perl-uri: 
   :depends r-base: 
   :depends samtools: 
   :depends slclust: 
   :depends transdecoder: 
   :depends ucsc-blat: 
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

      mamba install pasa

   and update with::

      mamba update pasa

  To create a new environment, run::

      mamba create --name myenvname pasa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pasa:<tag>

   (see `pasa/tags`_ for valid values for ``<tag>``)


.. |downloads_pasa| image:: https://img.shields.io/conda/dn/bioconda/pasa.svg?style=flat
   :target: https://anaconda.org/bioconda/pasa
   :alt:   (downloads)
.. |docker_pasa| image:: https://quay.io/repository/biocontainers/pasa/status
   :target: https://quay.io/repository/biocontainers/pasa
.. _`pasa/tags`: https://quay.io/repository/biocontainers/pasa?tab=tags


.. raw:: html

    <script>
        var package = "pasa";
        var versions = ["2.5.3","2.5.3","2.5.2","2.5.2","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasa/README.html