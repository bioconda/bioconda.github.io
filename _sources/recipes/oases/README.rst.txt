:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oases'
.. highlight: bash

oases
=====

.. conda:recipe:: oases
   :replaces_section_title:
   :noindex:

   De novo transcriptome assembler for short reads

   :homepage: http://www.ebi.ac.uk/~zerbino/oases/
   :license: GPL
   :recipe: /`oases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oases/meta.yaml>`_
   :links: biotools: :biotools:`oases`

   


.. conda:package:: oases

   |downloads_oases| |docker_oases|

   :versions:
      
      

      ``0.2.09-1``,  ``0.2.09-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends velvet: 
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

      mamba install oases

   and update with::

      mamba update oases

  To create a new environment, run::

      mamba create --name myenvname oases

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oases:<tag>

   (see `oases/tags`_ for valid values for ``<tag>``)


.. |downloads_oases| image:: https://img.shields.io/conda/dn/bioconda/oases.svg?style=flat
   :target: https://anaconda.org/bioconda/oases
   :alt:   (downloads)
.. |docker_oases| image:: https://quay.io/repository/biocontainers/oases/status
   :target: https://quay.io/repository/biocontainers/oases
.. _`oases/tags`: https://quay.io/repository/biocontainers/oases?tab=tags


.. raw:: html

    <script>
        var package = "oases";
        var versions = ["0.2.09","0.2.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oases/README.html