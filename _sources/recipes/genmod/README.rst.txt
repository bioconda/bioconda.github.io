:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genmod'
.. highlight: bash

genmod
======

.. conda:recipe:: genmod
   :replaces_section_title:
   :noindex:

   Annotate genetic inheritance models in variant files

   :homepage: http://github.com/moonso/genmod
   :license: MIT / MIT
   :recipe: /`genmod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmod/meta.yaml>`_

   


.. conda:package:: genmod

   |downloads_genmod| |docker_genmod|

   :versions:
      
      

      ``3.8.3-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.4-0``

      

   
   :depends click: ``>=8.1.3``
   :depends configobj: 
   :depends extract_vcf: ``>=0.4.2``
   :depends interval_tree: ``>=0.3.2``
   :depends intervaltree: 
   :depends ped_parser: ``>=1.6.2``
   :depends pytabix: 
   :depends pytest: 
   :depends python: ``3.8.*``
   :depends vcftoolbox: ``>=1.5.1``
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

      mamba install genmod

   and update with::

      mamba update genmod

  To create a new environment, run::

      mamba create --name myenvname genmod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genmod:<tag>

   (see `genmod/tags`_ for valid values for ``<tag>``)


.. |downloads_genmod| image:: https://img.shields.io/conda/dn/bioconda/genmod.svg?style=flat
   :target: https://anaconda.org/bioconda/genmod
   :alt:   (downloads)
.. |docker_genmod| image:: https://quay.io/repository/biocontainers/genmod/status
   :target: https://quay.io/repository/biocontainers/genmod
.. _`genmod/tags`: https://quay.io/repository/biocontainers/genmod?tab=tags


.. raw:: html

    <script>
        var package = "genmod";
        var versions = ["3.8.3","3.8.2","3.8.1","3.8.0","3.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genmod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genmod/README.html