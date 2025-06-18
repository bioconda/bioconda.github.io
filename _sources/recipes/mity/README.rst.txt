:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mity'
.. highlight: bash

mity
====

.. conda:recipe:: mity
   :replaces_section_title:
   :noindex:

   Mity is a bioinformatic analysis pipeline designed to call mitochondrial SNV and INDEL variants from Whole Genome Sequencing \(WGS\) data.

   :homepage: https://github.com/KCCG/mity
   :documentation: https://github.com/KCCG/mity/blob/2.0.0/README.md
   
   :license: MIT / MIT
   :recipe: /`mity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mity/meta.yaml>`_
   :links: biotools: :biotools:`mity`, doi: :doi:`10.26502/jbsb.5107074`

   \*Mity\* can\:
   \- identify very low\-heteroplasmy variants\, even \<1\% heteroplasmy when there is sufficient read\-depth \(eg \>1000x\)
   \- filter out common artefacts that arise from high\-depth sequencing
   \- easily integrate with existing nuclear DNA analysis pipelines \(mity merge\)
   \- provide an annotated report\, designed for clinicians and researchers to interrogate



.. conda:package:: mity

   |downloads_mity| |docker_mity|

   :versions:
      
      

      ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends freebayes: ``>=1.2``
   :depends gsort: ``>=0.1.4``
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends scipy: 
   :depends vcf2pandas: 
   :depends vcfanno: 
   :depends xlsxwriter: 
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

      mamba install mity

   and update with::

      mamba update mity

  To create a new environment, run::

      mamba create --name myenvname mity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mity:<tag>

   (see `mity/tags`_ for valid values for ``<tag>``)


.. |downloads_mity| image:: https://img.shields.io/conda/dn/bioconda/mity.svg?style=flat
   :target: https://anaconda.org/bioconda/mity
   :alt:   (downloads)
.. |docker_mity| image:: https://quay.io/repository/biocontainers/mity/status
   :target: https://quay.io/repository/biocontainers/mity
.. _`mity/tags`: https://quay.io/repository/biocontainers/mity?tab=tags


.. raw:: html

    <script>
        var package = "mity";
        var versions = ["2.0.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mity/README.html