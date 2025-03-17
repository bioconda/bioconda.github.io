:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-gtc2vcf-plugin'
.. highlight: bash

bcftools-gtc2vcf-plugin
=======================

.. conda:recipe:: bcftools-gtc2vcf-plugin
   :replaces_section_title:
   :noindex:

   Tools to convert Illumina and Affymetrix array intensity data files into VCF files.

   :homepage: https://github.com/freeseek/gtc2vcf
   :license: MIT
   :recipe: /`bcftools-gtc2vcf-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-gtc2vcf-plugin

   |downloads_bcftools-gtc2vcf-plugin| |docker_bcftools-gtc2vcf-plugin|

   :versions:
      
      

      ``1.19-1``,  ``1.19-0``,  ``1.18-0``,  ``1.16-0``,  ``1.9-0``

      

   
   :depends bcftools: ``>=1.19,<1.20.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.19,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bcftools-gtc2vcf-plugin

   and update with::

      mamba update bcftools-gtc2vcf-plugin

  To create a new environment, run::

      mamba create --name myenvname bcftools-gtc2vcf-plugin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcftools-gtc2vcf-plugin:<tag>

   (see `bcftools-gtc2vcf-plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_bcftools-gtc2vcf-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-gtc2vcf-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools-gtc2vcf-plugin
   :alt:   (downloads)
.. |docker_bcftools-gtc2vcf-plugin| image:: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin
.. _`bcftools-gtc2vcf-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin?tab=tags


.. raw:: html

    <script>
        var package = "bcftools-gtc2vcf-plugin";
        var versions = ["1.19","1.19","1.18","1.16","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-gtc2vcf-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-gtc2vcf-plugin/README.html