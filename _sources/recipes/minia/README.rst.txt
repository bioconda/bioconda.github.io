:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minia'
.. highlight: bash

minia
=====

.. conda:recipe:: minia
   :replaces_section_title:
   :noindex:

   Minia is a short\-read assembler based on a de Bruijn graph\, capable of assembling a human genome on a desktop computer in a day.

   :homepage: https://github.com/GATB/minia
   :license: file
   :recipe: /`minia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minia/meta.yaml>`_
   :links: biotools: :biotools:`minia`

   


.. conda:package:: minia

   |downloads_minia| |docker_minia|

   :versions:
      
      

      ``3.2.6-3``,  ``3.2.6-2``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.4-1``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install minia

   and update with::

      mamba update minia

  To create a new environment, run::

      mamba create --name myenvname minia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minia:<tag>

   (see `minia/tags`_ for valid values for ``<tag>``)


.. |downloads_minia| image:: https://img.shields.io/conda/dn/bioconda/minia.svg?style=flat
   :target: https://anaconda.org/bioconda/minia
   :alt:   (downloads)
.. |docker_minia| image:: https://quay.io/repository/biocontainers/minia/status
   :target: https://quay.io/repository/biocontainers/minia
.. _`minia/tags`: https://quay.io/repository/biocontainers/minia?tab=tags


.. raw:: html

    <script>
        var package = "minia";
        var versions = ["3.2.6","3.2.6","3.2.6","3.2.6","3.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minia/README.html