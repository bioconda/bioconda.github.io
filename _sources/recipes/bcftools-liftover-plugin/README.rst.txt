:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-liftover-plugin'
.. highlight: bash

bcftools-liftover-plugin
========================

.. conda:recipe:: bcftools-liftover-plugin
   :replaces_section_title:
   :noindex:

   Tools to work with GWAS\-VCF summary statistics files \(liftover plugin only\)

   :homepage: https://github.com/freeseek/score
   :license: MIT
   :recipe: /`bcftools-liftover-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-liftover-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-liftover-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-liftover-plugin

   |downloads_bcftools-liftover-plugin| |docker_bcftools-liftover-plugin|

   :versions:
      
      

      ``1.21-0``

      

   
   :depends bcftools: ``>=1.21,<1.22.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bcftools-liftover-plugin

   and update with::

      mamba update bcftools-liftover-plugin

  To create a new environment, run::

      mamba create --name myenvname bcftools-liftover-plugin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcftools-liftover-plugin:<tag>

   (see `bcftools-liftover-plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_bcftools-liftover-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-liftover-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools-liftover-plugin
   :alt:   (downloads)
.. |docker_bcftools-liftover-plugin| image:: https://quay.io/repository/biocontainers/bcftools-liftover-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-liftover-plugin
.. _`bcftools-liftover-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-liftover-plugin?tab=tags


.. raw:: html

    <script>
        var package = "bcftools-liftover-plugin";
        var versions = ["1.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-liftover-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-liftover-plugin/README.html