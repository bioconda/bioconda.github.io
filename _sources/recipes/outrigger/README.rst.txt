:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'outrigger'
.. highlight: bash

outrigger
=========

.. conda:recipe:: outrigger
   :replaces_section_title:
   :noindex:

   Outrigger detects \*de novo\* exons and quantifies their percent spliced\-in

   :homepage: https://yeolab.github.io/outrigger
   :license: BSD / BSD License
   :recipe: /`outrigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/outrigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/outrigger/meta.yaml>`_

   


.. conda:package:: outrigger

   |downloads_outrigger| |docker_outrigger|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends biopython: 
   :depends coverage: 
   :depends gffutils: ``>=0.8.7.1``
   :depends graphlite: 
   :depends joblib: 
   :depends pandas: ``>=0.17.0``
   :depends pybedtools: 
   :depends pysam: 
   :depends pytest: ``>=3.0.0``
   :depends python: 
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

      mamba install outrigger

   and update with::

      mamba update outrigger

  To create a new environment, run::

      mamba create --name myenvname outrigger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/outrigger:<tag>

   (see `outrigger/tags`_ for valid values for ``<tag>``)


.. |downloads_outrigger| image:: https://img.shields.io/conda/dn/bioconda/outrigger.svg?style=flat
   :target: https://anaconda.org/bioconda/outrigger
   :alt:   (downloads)
.. |docker_outrigger| image:: https://quay.io/repository/biocontainers/outrigger/status
   :target: https://quay.io/repository/biocontainers/outrigger
.. _`outrigger/tags`: https://quay.io/repository/biocontainers/outrigger?tab=tags


.. raw:: html

    <script>
        var package = "outrigger";
        var versions = ["1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/outrigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/outrigger/README.html