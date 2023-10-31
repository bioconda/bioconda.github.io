:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2cytosure'
.. highlight: bash

vcf2cytosure
============

.. conda:recipe:: vcf2cytosure
   :replaces_section_title:
   :noindex:

   Convert VCF with structural variations to CytoSure format

   :homepage: https://github.com/NBISweden/vcf2cytosure
   :license: MIT / MIT
   :recipe: /`vcf2cytosure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2cytosure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2cytosure/meta.yaml>`_

   


.. conda:package:: vcf2cytosure

   |downloads_vcf2cytosure| |docker_vcf2cytosure|

   :versions:
      
      

      ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends cyvcf2: 
   :depends lxml: 
   :depends pandas: 
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

      mamba install vcf2cytosure

   and update with::

      mamba update vcf2cytosure

  To create a new environment, run::

      mamba create --name myenvname vcf2cytosure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2cytosure:<tag>

   (see `vcf2cytosure/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2cytosure| image:: https://img.shields.io/conda/dn/bioconda/vcf2cytosure.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2cytosure
   :alt:   (downloads)
.. |docker_vcf2cytosure| image:: https://quay.io/repository/biocontainers/vcf2cytosure/status
   :target: https://quay.io/repository/biocontainers/vcf2cytosure
.. _`vcf2cytosure/tags`: https://quay.io/repository/biocontainers/vcf2cytosure?tab=tags


.. raw:: html

    <script>
        var package = "vcf2cytosure";
        var versions = ["0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2cytosure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2cytosure/README.html