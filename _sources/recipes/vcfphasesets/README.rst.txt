:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfphasesets'
.. highlight: bash

vcfphasesets
============

.. conda:recipe:: vcfphasesets
   :replaces_section_title:
   :noindex:

   Get variants as phase sets from a VCF file using pysam.

   :homepage: https://github.com/LUMC/vcfphasesets
   :license: MIT / MIT
   :recipe: /`vcfphasesets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfphasesets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfphasesets/meta.yaml>`_

   


.. conda:package:: vcfphasesets

   |downloads_vcfphasesets| |docker_vcfphasesets|

   :versions:
      
      

      ``0.3-0``

      

   
   :depends pysam: 
   :depends python: ``>=3.7``
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

      mamba install vcfphasesets

   and update with::

      mamba update vcfphasesets

  To create a new environment, run::

      mamba create --name myenvname vcfphasesets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfphasesets:<tag>

   (see `vcfphasesets/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfphasesets| image:: https://img.shields.io/conda/dn/bioconda/vcfphasesets.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfphasesets
   :alt:   (downloads)
.. |docker_vcfphasesets| image:: https://quay.io/repository/biocontainers/vcfphasesets/status
   :target: https://quay.io/repository/biocontainers/vcfphasesets
.. _`vcfphasesets/tags`: https://quay.io/repository/biocontainers/vcfphasesets?tab=tags


.. raw:: html

    <script>
        var package = "vcfphasesets";
        var versions = ["0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfphasesets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfphasesets/README.html