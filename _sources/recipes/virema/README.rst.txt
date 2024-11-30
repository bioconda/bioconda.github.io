:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virema'
.. highlight: bash

virema
======

.. conda:recipe:: virema
   :replaces_section_title:
   :noindex:

   ViReMa \(Viral Recombination Mapper\) detects and reports recombination or fusion events in virus genomes using deep sequencing datasets.

   :homepage: https://sourceforge.net/projects/virema/
   :license: Custom OSS
   :recipe: /`virema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virema/meta.yaml>`_

   


.. conda:package:: virema

   |downloads_virema| |docker_virema|

   :versions:
      
      

      ``0.6-2``,  ``0.6-1``,  ``0.6-0``

      

   
   :depends bowtie: ``<=1.0.0``
   :depends python: ``<3``
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

      mamba install virema

   and update with::

      mamba update virema

  To create a new environment, run::

      mamba create --name myenvname virema

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virema:<tag>

   (see `virema/tags`_ for valid values for ``<tag>``)


.. |downloads_virema| image:: https://img.shields.io/conda/dn/bioconda/virema.svg?style=flat
   :target: https://anaconda.org/bioconda/virema
   :alt:   (downloads)
.. |docker_virema| image:: https://quay.io/repository/biocontainers/virema/status
   :target: https://quay.io/repository/biocontainers/virema
.. _`virema/tags`: https://quay.io/repository/biocontainers/virema?tab=tags


.. raw:: html

    <script>
        var package = "virema";
        var versions = ["0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virema/README.html