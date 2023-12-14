:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliconsuite'
.. highlight: bash

ampliconsuite
=============

.. conda:recipe:: ampliconsuite
   :replaces_section_title:
   :noindex:

   An end\-to\-end wrapper for focal amplification analysis from whole\-genome sequencing using AmpliconArchitect and associated tools.

   :homepage: https://github.com/AmpliconSuite
   :license: BSD 2-Clause License (AmpliconSuite-pipeline and AmpliconClassifier) & University of California Software License (AmpliconArchitect). Please see https://github.com/AmpliconSuite/AmpliconSuite-pipeline for more details on licenses.
   :recipe: /`ampliconsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsuite/meta.yaml>`_

   


.. conda:package:: ampliconsuite

   |downloads_ampliconsuite| |docker_ampliconsuite|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.1555.2-1``,  ``0.1555.2-0``

      

   
   :depends bwa: 
   :depends cnvkit: ``>=0.9.10``
   :depends flask: 
   :depends future: 
   :depends intervaltree: 
   :depends matplotlib-base: 
   :depends mscorefonts: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends scipy: 
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

      mamba install ampliconsuite

   and update with::

      mamba update ampliconsuite

  To create a new environment, run::

      mamba create --name myenvname ampliconsuite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ampliconsuite:<tag>

   (see `ampliconsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_ampliconsuite| image:: https://img.shields.io/conda/dn/bioconda/ampliconsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliconsuite
   :alt:   (downloads)
.. |docker_ampliconsuite| image:: https://quay.io/repository/biocontainers/ampliconsuite/status
   :target: https://quay.io/repository/biocontainers/ampliconsuite
.. _`ampliconsuite/tags`: https://quay.io/repository/biocontainers/ampliconsuite?tab=tags


.. raw:: html

    <script>
        var package = "ampliconsuite";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliconsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliconsuite/README.html