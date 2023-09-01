:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genotyphi'
.. highlight: bash

genotyphi
=========

.. conda:recipe:: genotyphi
   :replaces_section_title:
   :noindex:

   Assign genotypes to Salmonella Typhi genomes based on VCF files \(mapped to Typhi CT18 reference genome\)

   :homepage: https://github.com/katholt/genotyphi
   :license: GPL3
   :recipe: /`genotyphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotyphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotyphi/meta.yaml>`_

   


.. conda:package:: genotyphi

   |downloads_genotyphi| |docker_genotyphi|

   :versions:
      
      

      ``2.0-0``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.1-0``

      

   
   :depends bcftools: ``>=1.1``
   :depends pandas: 
   :depends python: ``<3``
   :depends samtools: ``>=1.1``
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

      mamba install genotyphi

   and update with::

      mamba update genotyphi

  To create a new environment, run::

      mamba create --name myenvname genotyphi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genotyphi:<tag>

   (see `genotyphi/tags`_ for valid values for ``<tag>``)


.. |downloads_genotyphi| image:: https://img.shields.io/conda/dn/bioconda/genotyphi.svg?style=flat
   :target: https://anaconda.org/bioconda/genotyphi
   :alt:   (downloads)
.. |docker_genotyphi| image:: https://quay.io/repository/biocontainers/genotyphi/status
   :target: https://quay.io/repository/biocontainers/genotyphi
.. _`genotyphi/tags`: https://quay.io/repository/biocontainers/genotyphi?tab=tags


.. raw:: html

    <script>
        var package = "genotyphi";
        var versions = ["2.0","1.9.1","1.9.1","1.9.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genotyphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genotyphi/README.html