:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirscore'
.. highlight: bash

mirscore
========

.. conda:recipe:: mirscore
   :replaces_section_title:
   :noindex:

   miRScore\: A rapid and precise microRNA validation tool

   :homepage: https://github.com/Aez35/miRScore
   :license: MIT / MIT
   :recipe: /`mirscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirscore/meta.yaml>`_

   


.. conda:package:: mirscore

   |downloads_mirscore| |docker_mirscore|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends biopython: 
   :depends bowtie: ``>=1.3.1``
   :depends cutadapt: ``>=4.8``
   :depends pandas: ``>=2.0.0``
   :depends pysam: ``>=0.21.0``
   :depends python: ``>=3.6``
   :depends samtools: ``>=1.16``
   :depends strucvis: ``>=0.8``
   :depends tqdm: ``>=4.65``
   :depends viennarna: ``>=2.5.1``
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

      mamba install mirscore

   and update with::

      mamba update mirscore

  To create a new environment, run::

      mamba create --name myenvname mirscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirscore:<tag>

   (see `mirscore/tags`_ for valid values for ``<tag>``)


.. |downloads_mirscore| image:: https://img.shields.io/conda/dn/bioconda/mirscore.svg?style=flat
   :target: https://anaconda.org/bioconda/mirscore
   :alt:   (downloads)
.. |docker_mirscore| image:: https://quay.io/repository/biocontainers/mirscore/status
   :target: https://quay.io/repository/biocontainers/mirscore
.. _`mirscore/tags`: https://quay.io/repository/biocontainers/mirscore?tab=tags


.. raw:: html

    <script>
        var package = "mirscore";
        var versions = ["0.3.2","0.3.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirscore/README.html