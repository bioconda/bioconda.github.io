:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapsolo'
.. highlight: bash

hapsolo
=======

.. conda:recipe:: hapsolo
   :replaces_section_title:
   :noindex:

   An optimization approach for removing secondary haplotigs during diploid genome assembly and scaffolding.

   :homepage: https://github.com/esolares/HapSolo
   :license: GPL / GPL-2.0
   :recipe: /`hapsolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapsolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapsolo/meta.yaml>`_

   


.. conda:package:: hapsolo

   |downloads_hapsolo| |docker_hapsolo|

   :versions:
      
      

      ``2021.10.09-0``

      

   
   :depends augustus: 
   :depends blast: 
   :depends blat: ``>=36``
   :depends braker: 
   :depends busco: ``3.0.*``
   :depends matplotlib-base: ``<3``
   :depends minimap2: 
   :depends mummer: 
   :depends pandas: 
   :depends parallel: 
   :depends python: ``2.7.*``
   :depends quast: 
   :depends ucsc-fatotwobit: 
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

      mamba install hapsolo

   and update with::

      mamba update hapsolo

  To create a new environment, run::

      mamba create --name myenvname hapsolo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hapsolo:<tag>

   (see `hapsolo/tags`_ for valid values for ``<tag>``)


.. |downloads_hapsolo| image:: https://img.shields.io/conda/dn/bioconda/hapsolo.svg?style=flat
   :target: https://anaconda.org/bioconda/hapsolo
   :alt:   (downloads)
.. |docker_hapsolo| image:: https://quay.io/repository/biocontainers/hapsolo/status
   :target: https://quay.io/repository/biocontainers/hapsolo
.. _`hapsolo/tags`: https://quay.io/repository/biocontainers/hapsolo?tab=tags


.. raw:: html

    <script>
        var package = "hapsolo";
        var versions = ["2021.10.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapsolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapsolo/README.html