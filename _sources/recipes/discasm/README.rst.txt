:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discasm'
.. highlight: bash

discasm
=======

.. conda:recipe:: discasm
   :replaces_section_title:
   :noindex:

   DISCASM aims to extract reads that map to reference genomes in a discordant fashion and optionally include reads that do not map to the genome at all\, and perform a de novo transcriptome assembly of these reads. DISCASM relies on the output from STAR \(as run via STAR\-Fusion\)\, and supports de novo transcriptome assembly using Trinity or Oases. \- https\:\/\/github.com\/DISCASM\/DISCASM\/wiki

   :homepage: https://github.com/DISCASM/DISCASM
   :license: BSD-3-Clause
   :recipe: /`discasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discasm/meta.yaml>`_

   


.. conda:package:: discasm

   |downloads_discasm| |docker_discasm|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends oases: ``>=0.2``
   :depends perl: 
   :depends pysam: ``>=0.10.0``
   :depends python: ``<3``
   :depends star: ``>=2.4``
   :depends trinity: ``>=2.4``
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

      mamba install discasm

   and update with::

      mamba update discasm

  To create a new environment, run::

      mamba create --name myenvname discasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/discasm:<tag>

   (see `discasm/tags`_ for valid values for ``<tag>``)


.. |downloads_discasm| image:: https://img.shields.io/conda/dn/bioconda/discasm.svg?style=flat
   :target: https://anaconda.org/bioconda/discasm
   :alt:   (downloads)
.. |docker_discasm| image:: https://quay.io/repository/biocontainers/discasm/status
   :target: https://quay.io/repository/biocontainers/discasm
.. _`discasm/tags`: https://quay.io/repository/biocontainers/discasm?tab=tags


.. raw:: html

    <script>
        var package = "discasm";
        var versions = ["0.1.3","0.1.3","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discasm/README.html