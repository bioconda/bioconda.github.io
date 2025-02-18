:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edta'
.. highlight: bash

edta
====

.. conda:recipe:: edta
   :replaces_section_title:
   :noindex:

   Extensive de\-novo TE Annotator.

   :homepage: https://github.com/oushujun/EDTA
   :documentation: https://github.com/oushujun/EDTA/wiki
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`edta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edta/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1905-y`, doi: :doi:`10.1101/2022.10.09.511471`, biotools: :biotools:`EDTA`, usegalaxy-eu: :usegalaxy-eu:`edta`

   


.. conda:package:: edta

   |downloads_edta| |docker_edta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.9.6-2</code>,  </span></summary>
      

      ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.9.6-2``,  ``1.9.6-1``,  ``1.9.6-0``,  ``1.9.5-0``,  ``1.9.4-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.7.8-0``,  ``1.7.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends annosine2: 
   :depends bedtools: 
   :depends biopython: 
   :depends cd-hit: 
   :depends coreutils: 
   :depends genometools-genometools: 
   :depends grep: 
   :depends helitronscanner: 
   :depends ltr_finder_parallel: 
   :depends ltr_harvest_parallel: 
   :depends ltr_retriever: ``>=3.0.0``
   :depends mdust: 
   :depends muscle: 
   :depends openjdk: 
   :depends pandas: 
   :depends perl: 
   :depends perl-json: 
   :depends perl-text-soundex: 
   :depends pyarrow: 
   :depends python: ``>=3.8``
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-here: 
   :depends r-tidyr: 
   :depends repeatmasker: 
   :depends repeatmodeler: ``>=2``
   :depends samtools: 
   :depends tesorter: 
   :depends tir-learner: 
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

      mamba install edta

   and update with::

      mamba update edta

  To create a new environment, run::

      mamba create --name myenvname edta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/edta:<tag>

   (see `edta/tags`_ for valid values for ``<tag>``)


.. |downloads_edta| image:: https://img.shields.io/conda/dn/bioconda/edta.svg?style=flat
   :target: https://anaconda.org/bioconda/edta
   :alt:   (downloads)
.. |docker_edta| image:: https://quay.io/repository/biocontainers/edta/status
   :target: https://quay.io/repository/biocontainers/edta
.. _`edta/tags`: https://quay.io/repository/biocontainers/edta?tab=tags


.. raw:: html

    <script>
        var package = "edta";
        var versions = ["2.2.2","2.2.2","2.2.0","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edta/README.html