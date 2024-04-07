:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argnorm'
.. highlight: bash

argnorm
=======

.. conda:recipe:: argnorm
   :replaces_section_title:
   :noindex:

   Normalize antibiotic resistance genes \(ARGs\) abundance tables \(e.g.\, from metagenomics\) by using the ARO ontology \(developed by CARD\).

   :homepage: https://github.com/BigDataBiology/argNorm
   :documentation: https://argnorm.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`argnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argnorm/meta.yaml>`_

   


.. conda:package:: argnorm

   |downloads_argnorm| |docker_argnorm|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends pandas: 
   :depends pronto: 
   :depends pytest: 
   :depends python: 
   :depends setuptools: 
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

      mamba install argnorm

   and update with::

      mamba update argnorm

  To create a new environment, run::

      mamba create --name myenvname argnorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/argnorm:<tag>

   (see `argnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_argnorm| image:: https://img.shields.io/conda/dn/bioconda/argnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/argnorm
   :alt:   (downloads)
.. |docker_argnorm| image:: https://quay.io/repository/biocontainers/argnorm/status
   :target: https://quay.io/repository/biocontainers/argnorm
.. _`argnorm/tags`: https://quay.io/repository/biocontainers/argnorm?tab=tags


.. raw:: html

    <script>
        var package = "argnorm";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argnorm/README.html