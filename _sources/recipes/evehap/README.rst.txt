:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evehap'
.. highlight: bash

evehap
======

.. conda:recipe:: evehap
   :replaces_section_title:
   :noindex:

   Universal mtDNA haplogroup classifier for ancient and modern DNA

   :homepage: https://github.com/trianglegrrl/eveHap
   :license: PolyForm-Noncommercial-1.0.0
   :recipe: /`evehap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evehap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evehap/meta.yaml>`_

   eveHap is a universal mtDNA \(mitochondrial DNA\) haplogroup classifier.
   It classifies ancient and modern DNA samples against phylogenetic haplogroup
   references\, supporting multiple input formats \(BAM\, VCF\, FASTA\, HSD\, microarray\)
   and providing both high\-coverage \(Kulczynski scoring\) and low\-coverage
   \(tree traversal\) classification methods.



.. conda:package:: evehap

   |downloads_evehap| |docker_evehap|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``>=1.80``
   :depends click: ``>=8.0``
   :depends pysam: ``>=0.21.0``
   :depends python: ``>=3.8``
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

      mamba install evehap

   and update with::

      mamba update evehap

  To create a new environment, run::

      mamba create --name myenvname evehap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/evehap:<tag>

   (see `evehap/tags`_ for valid values for ``<tag>``)


.. |downloads_evehap| image:: https://img.shields.io/conda/dn/bioconda/evehap.svg?style=flat
   :target: https://anaconda.org/bioconda/evehap
   :alt:   (downloads)
.. |docker_evehap| image:: https://quay.io/repository/biocontainers/evehap/status
   :target: https://quay.io/repository/biocontainers/evehap
.. _`evehap/tags`: https://quay.io/repository/biocontainers/evehap?tab=tags


.. raw:: html

    <script>
        var package = "evehap";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evehap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evehap/README.html