:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sneep'
.. highlight: bash

sneep
=====

.. conda:recipe:: sneep
   :replaces_section_title:
   :noindex:

   Identify regulatory non\-coding SNPs \(rSNPs\)

   :homepage: https://github.com/SchulzLab/SNEEP
   :license: MIT / MIT
   :recipe: /`sneep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneep/meta.yaml>`_

   


.. conda:package:: sneep

   |downloads_sneep| |docker_sneep|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``,  ``1.0-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7-0``,  ``0.4-1``,  ``0.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bedtools: ``>=2.27.1``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.19``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
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

      mamba install sneep

   and update with::

      mamba update sneep

  To create a new environment, run::

      mamba create --name myenvname sneep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sneep:<tag>

   (see `sneep/tags`_ for valid values for ``<tag>``)


.. |downloads_sneep| image:: https://img.shields.io/conda/dn/bioconda/sneep.svg?style=flat
   :target: https://anaconda.org/bioconda/sneep
   :alt:   (downloads)
.. |docker_sneep| image:: https://quay.io/repository/biocontainers/sneep/status
   :target: https://quay.io/repository/biocontainers/sneep
.. _`sneep/tags`: https://quay.io/repository/biocontainers/sneep?tab=tags


.. raw:: html

    <script>
        var package = "sneep";
        var versions = ["1.1","1.1","1.0","0.9","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sneep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sneep/README.html