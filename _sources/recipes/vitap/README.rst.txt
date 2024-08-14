:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vitap'
.. highlight: bash

vitap
=====

.. conda:recipe:: vitap
   :replaces_section_title:
   :noindex:

   Viral Taxonomic Assignment Pipeline

   :homepage: https://github.com/DrKaiyangZheng/VITAP/
   :documentation: https://github.com/DrKaiyangZheng/VITAP/blob/main/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`vitap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitap/meta.yaml>`_

   Viral Taxonomic Assignment Pipeline \(VITAP\) is a cutting\-edge tool designed to address the growing need for accurate and comprehensive classification of DNA and RNA viral sequences. By integrating alignment\-based techniques with graph theory\, VITAP achieves high precision in classifying viral sequences\, including those as short as 1000 base pairs\, down to the genus level.


.. conda:package:: vitap

   |downloads_vitap| |docker_vitap|

   :versions:
      
      

      ``1.5-0``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends biopython: ``>=1.78``
   :depends diamond: ``>=0.9``
   :depends entrez-direct: ``16.2.*``
   :depends networkx: ``>=3.1``
   :depends numpy: ``>=1.25``
   :depends pandas: ``>=1.5``
   :depends prodigal-gv: ``>=2.6``
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.10``
   :depends seqkit: ``>=2.5.1``
   :depends tqdm: ``>=4.65``
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

      mamba install vitap

   and update with::

      mamba update vitap

  To create a new environment, run::

      mamba create --name myenvname vitap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vitap:<tag>

   (see `vitap/tags`_ for valid values for ``<tag>``)


.. |downloads_vitap| image:: https://img.shields.io/conda/dn/bioconda/vitap.svg?style=flat
   :target: https://anaconda.org/bioconda/vitap
   :alt:   (downloads)
.. |docker_vitap| image:: https://quay.io/repository/biocontainers/vitap/status
   :target: https://quay.io/repository/biocontainers/vitap
.. _`vitap/tags`: https://quay.io/repository/biocontainers/vitap?tab=tags


.. raw:: html

    <script>
        var package = "vitap";
        var versions = ["1.5","1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vitap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vitap/README.html