:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contatester'
.. highlight: bash

contatester
===========

.. conda:recipe:: contatester
   :replaces_section_title:
   :noindex:

   Compute the Allelic Balance of a sample from a VCF file.

   :homepage: https://github.com/CNRGH/contatester
   :license: CeCILL
   :recipe: /`contatester <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contatester>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contatester/meta.yaml>`_
   :links: biotools: :biotools:`contatester`

   Contatester computes the Allelic Balance of a sample from a VCF file\, 
   check if a cross human contamination is present and estimate the degree 
   of contamination\, using pegasus for high efficiency.



.. conda:package:: contatester

   |downloads_contatester| |docker_contatester|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bcftools: ``>=1.9``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmpi: ``>=4.1.5,<5.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-pegasus-wms: ``>=4.8.2``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gridbase: 
   :depends r-gridextra: 
   :depends r-optparse: 
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

      mamba install contatester

   and update with::

      mamba update contatester

  To create a new environment, run::

      mamba create --name myenvname contatester

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/contatester:<tag>

   (see `contatester/tags`_ for valid values for ``<tag>``)


.. |downloads_contatester| image:: https://img.shields.io/conda/dn/bioconda/contatester.svg?style=flat
   :target: https://anaconda.org/bioconda/contatester
   :alt:   (downloads)
.. |docker_contatester| image:: https://quay.io/repository/biocontainers/contatester/status
   :target: https://quay.io/repository/biocontainers/contatester
.. _`contatester/tags`: https://quay.io/repository/biocontainers/contatester?tab=tags


.. raw:: html

    <script>
        var package = "contatester";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contatester/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contatester/README.html