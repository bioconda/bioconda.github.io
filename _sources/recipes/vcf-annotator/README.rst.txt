:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-annotator'
.. highlight: bash

vcf-annotator
=============

.. conda:recipe:: vcf-annotator
   :replaces_section_title:
   :noindex:

   Use the reference GenBank file to add biological annotations to the variant calls in a VCF.

   :homepage: https://github.com/rpetit3/vcf-annotator
   :license: MIT
   :recipe: /`vcf-annotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-annotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-annotator/meta.yaml>`_

   


.. conda:package:: vcf-annotator

   |downloads_vcf-annotator| |docker_vcf-annotator|

   :versions:
      
      

      ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends biopython: 
   :depends python: ``>=3``
   :depends pyvcf: 
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

      mamba install vcf-annotator

   and update with::

      mamba update vcf-annotator

  To create a new environment, run::

      mamba create --name myenvname vcf-annotator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf-annotator:<tag>

   (see `vcf-annotator/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf-annotator| image:: https://img.shields.io/conda/dn/bioconda/vcf-annotator.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-annotator
   :alt:   (downloads)
.. |docker_vcf-annotator| image:: https://quay.io/repository/biocontainers/vcf-annotator/status
   :target: https://quay.io/repository/biocontainers/vcf-annotator
.. _`vcf-annotator/tags`: https://quay.io/repository/biocontainers/vcf-annotator?tab=tags


.. raw:: html

    <script>
        var package = "vcf-annotator";
        var versions = ["0.7","0.6","0.6","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-annotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-annotator/README.html