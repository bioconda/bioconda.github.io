:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaweaver_synbiocad'
.. highlight: bash

dnaweaver_synbiocad
===================

.. conda:recipe:: dnaweaver_synbiocad
   :replaces_section_title:
   :noindex:

   Build the genetic designs generated by the SynBioCAD project using either Golden Gate or Gibson assembly

   :homepage: https://github.com/brsynth/DNAWeaver_SynBioCAD/
   :license: MIT
   :recipe: /`dnaweaver_synbiocad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaweaver_synbiocad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaweaver_synbiocad/meta.yaml>`_

   


.. conda:package:: dnaweaver_synbiocad

   |downloads_dnaweaver_synbiocad| |docker_dnaweaver_synbiocad|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends dnaweaver: 
   :depends docopt: 
   :depends openpyxl: 
   :depends pandas: 
   :depends proglog: 
   :depends pysbol2: 
   :depends python: ``3.7.*``
   :depends requests: 
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

      mamba install dnaweaver_synbiocad

   and update with::

      mamba update dnaweaver_synbiocad

  To create a new environment, run::

      mamba create --name myenvname dnaweaver_synbiocad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnaweaver_synbiocad:<tag>

   (see `dnaweaver_synbiocad/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaweaver_synbiocad| image:: https://img.shields.io/conda/dn/bioconda/dnaweaver_synbiocad.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaweaver_synbiocad
   :alt:   (downloads)
.. |docker_dnaweaver_synbiocad| image:: https://quay.io/repository/biocontainers/dnaweaver_synbiocad/status
   :target: https://quay.io/repository/biocontainers/dnaweaver_synbiocad
.. _`dnaweaver_synbiocad/tags`: https://quay.io/repository/biocontainers/dnaweaver_synbiocad?tab=tags


.. raw:: html

    <script>
        var package = "dnaweaver_synbiocad";
        var versions = ["1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaweaver_synbiocad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaweaver_synbiocad/README.html