:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cite-seq-count'
.. highlight: bash

cite-seq-count
==============

.. conda:recipe:: cite-seq-count
   :replaces_section_title:
   :noindex:

   A python package to map reads from CITE\-seq or hashing data for single cell experiments.

   :homepage: https://hoohm.github.io/CITE-seq-Count
   :developer docs: https://github.com/Hoohm/CITE-seq-Count
   :license: MIT / MIT
   :recipe: /`cite-seq-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cite-seq-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cite-seq-count/meta.yaml>`_
   :links: biotools: :biotools:`CITE-seq-Count`, usegalaxy-eu: :usegalaxy-eu:`cite_seq_count`, doi: :doi:`10.5281/zenodo.2590196`

   


.. conda:package:: cite-seq-count

   |downloads_cite-seq-count| |docker_cite-seq-count|

   :versions:
      
      

      ``1.4.5-0``,  ``1.4.4-0``

      

   
   :depends multiprocess: ``>=0.70.6.1``
   :depends pandas: ``>=0.23.4``
   :depends pybktree: ``1.1``
   :depends pytest: 
   :depends pytest-dependency: 
   :depends python: ``>=3.6``
   :depends python-levenshtein: ``>=0.12.0``
   :depends scipy: ``>=1.1.0``
   :depends umi_tools: ``>=1.1.5``
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

      mamba install cite-seq-count

   and update with::

      mamba update cite-seq-count

  To create a new environment, run::

      mamba create --name myenvname cite-seq-count

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cite-seq-count:<tag>

   (see `cite-seq-count/tags`_ for valid values for ``<tag>``)


.. |downloads_cite-seq-count| image:: https://img.shields.io/conda/dn/bioconda/cite-seq-count.svg?style=flat
   :target: https://anaconda.org/bioconda/cite-seq-count
   :alt:   (downloads)
.. |docker_cite-seq-count| image:: https://quay.io/repository/biocontainers/cite-seq-count/status
   :target: https://quay.io/repository/biocontainers/cite-seq-count
.. _`cite-seq-count/tags`: https://quay.io/repository/biocontainers/cite-seq-count?tab=tags


.. raw:: html

    <script>
        var package = "cite-seq-count";
        var versions = ["1.4.5","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cite-seq-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cite-seq-count/README.html