:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2maf'
.. highlight: bash

vcf2maf
=======

.. conda:recipe:: vcf2maf
   :replaces_section_title:
   :noindex:

   Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms

   :homepage: https://github.com/mskcc/vcf2maf
   :license: Apache / Apache-2.0
   :recipe: /`vcf2maf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf/meta.yaml>`_

   


.. conda:package:: vcf2maf

   |downloads_vcf2maf| |docker_vcf2maf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.21-0</code>,  <code>1.6.20-1</code>,  <code>1.6.20-0</code>,  <code>1.6.19-1</code>,  <code>1.6.19-0</code>,  <code>1.6.18-2</code>,  <code>1.6.18-1</code>,  <code>1.6.18-0</code>,  <code>1.6.17-2</code>,  </span></summary>
      

      ``1.6.21-0``,  ``1.6.20-1``,  ``1.6.20-0``,  ``1.6.19-1``,  ``1.6.19-0``,  ``1.6.18-2``,  ``1.6.18-1``,  ``1.6.18-0``,  ``1.6.17-2``,  ``1.6.17-1``,  ``1.6.17-0``,  ``1.6.16-4``,  ``1.6.16-3``,  ``1.6.16-0``,  ``1.6.15-1``,  ``1.6.15-0``,  ``1.6.14-0``,  ``1.6.12-0``,  ``1.6.8-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install vcf2maf

   and update with::

      mamba update vcf2maf

  To create a new environment, run::

      mamba create --name myenvname vcf2maf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2maf:<tag>

   (see `vcf2maf/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2maf| image:: https://img.shields.io/conda/dn/bioconda/vcf2maf.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2maf
   :alt:   (downloads)
.. |docker_vcf2maf| image:: https://quay.io/repository/biocontainers/vcf2maf/status
   :target: https://quay.io/repository/biocontainers/vcf2maf
.. _`vcf2maf/tags`: https://quay.io/repository/biocontainers/vcf2maf?tab=tags


.. raw:: html

    <script>
        var package = "vcf2maf";
        var versions = ["1.6.21","1.6.20","1.6.20","1.6.19","1.6.19"];
    </script>





Notes
-----
This package installs only vcf2maf and does not integrate with the variant\-effect\-predictor \(VEP\). To
do so\, please follow the instructions at https\:\/\/github.com\/mskcc\/vcf2maf\/blob\/master\/README.md.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2maf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2maf/README.html