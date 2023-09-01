:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio_assembly_refinement'
.. highlight: bash

bio_assembly_refinement
=======================

.. conda:recipe:: bio_assembly_refinement
   :replaces_section_title:
   :noindex:

   Assembly refinement tools\, mostly useful for \(but not limited to\) pacbio bacterial assemblies

   :homepage: https://github.com/nds/bio_assembly_refinement
   :license: GPLv3
   :recipe: /`bio_assembly_refinement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_assembly_refinement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio_assembly_refinement/meta.yaml>`_

   


.. conda:package:: bio_assembly_refinement

   |downloads_bio_assembly_refinement| |docker_bio_assembly_refinement|

   :versions:
      
      

      ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends pyfastaq: ``>=3.10.0``
   :depends pymummer: 
   :depends python: ``>=3``
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

      mamba install bio_assembly_refinement

   and update with::

      mamba update bio_assembly_refinement

  To create a new environment, run::

      mamba create --name myenvname bio_assembly_refinement

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio_assembly_refinement:<tag>

   (see `bio_assembly_refinement/tags`_ for valid values for ``<tag>``)


.. |downloads_bio_assembly_refinement| image:: https://img.shields.io/conda/dn/bioconda/bio_assembly_refinement.svg?style=flat
   :target: https://anaconda.org/bioconda/bio_assembly_refinement
   :alt:   (downloads)
.. |docker_bio_assembly_refinement| image:: https://quay.io/repository/biocontainers/bio_assembly_refinement/status
   :target: https://quay.io/repository/biocontainers/bio_assembly_refinement
.. _`bio_assembly_refinement/tags`: https://quay.io/repository/biocontainers/bio_assembly_refinement?tab=tags


.. raw:: html

    <script>
        var package = "bio_assembly_refinement";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio_assembly_refinement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio_assembly_refinement/README.html