:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kofamscan'
.. highlight: bash

kofamscan
=========

.. conda:recipe:: kofamscan
   :replaces_section_title:
   :noindex:

   KofamKOALA assigns K numbers to the user\'s sequence data by HMMER\/HMMSEARCH against KOfam

   :homepage: https://www.genome.jp/tools/kofamkoala/
   :license: MIT License
   :recipe: /`kofamscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kofamscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kofamscan/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz859`

   KofamKOALA assigns K numbers to the user\'s sequence data by HMMER\/HMMSEARCH against KOfam \(a customized HMM database of KEGG Orthologs \(KOs\)\).
   K number assignments with scores above the predefined thresholds for individual KOs are more reliable than other proposed assignments.
   Such high score assignments are highlighted with asterisks \'\*\' in the output.
   The K number assignments facilitate the interpretation of the annotation results by linking the user\'s sequence data to the KEGG pathways and EC numbers.



.. conda:package:: kofamscan

   |downloads_kofamscan| |docker_kofamscan|

   :versions:
      
      

      ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends hmmer: ``>=3.1,<3.3.1|>=3.3.2``
   :depends parallel: 
   :depends ruby: ``>=2.4``
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

      mamba install kofamscan

   and update with::

      mamba update kofamscan

  To create a new environment, run::

      mamba create --name myenvname kofamscan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kofamscan:<tag>

   (see `kofamscan/tags`_ for valid values for ``<tag>``)


.. |downloads_kofamscan| image:: https://img.shields.io/conda/dn/bioconda/kofamscan.svg?style=flat
   :target: https://anaconda.org/bioconda/kofamscan
   :alt:   (downloads)
.. |docker_kofamscan| image:: https://quay.io/repository/biocontainers/kofamscan/status
   :target: https://quay.io/repository/biocontainers/kofamscan
.. _`kofamscan/tags`: https://quay.io/repository/biocontainers/kofamscan?tab=tags


.. raw:: html

    <script>
        var package = "kofamscan";
        var versions = ["1.3.0","1.3.0","1.3.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kofamscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kofamscan/README.html