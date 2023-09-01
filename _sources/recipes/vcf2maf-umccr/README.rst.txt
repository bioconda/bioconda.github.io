:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2maf-umccr'
.. highlight: bash

vcf2maf-umccr
=============

.. conda:recipe:: vcf2maf-umccr
   :replaces_section_title:
   :noindex:

   Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms

   :homepage: https://github.com/umccr/vcf2maf/
   :license: Apache / Apache-2.0
   :recipe: /`vcf2maf-umccr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf-umccr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf-umccr/meta.yaml>`_

   


.. conda:package:: vcf2maf-umccr

   |downloads_vcf2maf-umccr| |docker_vcf2maf-umccr|

   :versions:
      
      

      ``1.6.21.20230511-0``

      

   
   :depends htslib: 
   :depends perl: 
   :depends samtools: 
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

      mamba install vcf2maf-umccr

   and update with::

      mamba update vcf2maf-umccr

  To create a new environment, run::

      mamba create --name myenvname vcf2maf-umccr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2maf-umccr:<tag>

   (see `vcf2maf-umccr/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2maf-umccr| image:: https://img.shields.io/conda/dn/bioconda/vcf2maf-umccr.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2maf-umccr
   :alt:   (downloads)
.. |docker_vcf2maf-umccr| image:: https://quay.io/repository/biocontainers/vcf2maf-umccr/status
   :target: https://quay.io/repository/biocontainers/vcf2maf-umccr
.. _`vcf2maf-umccr/tags`: https://quay.io/repository/biocontainers/vcf2maf-umccr?tab=tags


.. raw:: html

    <script>
        var package = "vcf2maf-umccr";
        var versions = ["1.6.21.20230511"];
    </script>





Notes
-----
This package incorporates the latest changes of the original tool \[vcf2maf\]\(https\:\/\/github.com\/mskcc\/vcf2maf\)
from its main branch but released from the \[umccr fork\]\(https\:\/\/github.com\/umccr\/vcf2maf\/\). 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2maf-umccr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2maf-umccr/README.html