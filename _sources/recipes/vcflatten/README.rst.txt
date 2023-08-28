:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcflatten'
.. highlight: bash

vcflatten
=========

.. conda:recipe:: vcflatten
   :replaces_section_title:
   :noindex:

   A command line tool for flattening VCF files down to simpler TSV files.

   :homepage: http://innovativemedicine.ca/tools/vcflatten
   :license: BSD
   :recipe: /`vcflatten <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflatten>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflatten/meta.yaml>`_

   


.. conda:package:: vcflatten

   |downloads_vcflatten| |docker_vcflatten|

   :versions:
      
      

      ``0.5.2-4``,  ``0.5.2-3``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``

      

   
   :depends openjdk: 
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

      mamba install vcflatten

   and update with::

      mamba update vcflatten

  To create a new environment, run::

      mamba create --name myenvname vcflatten

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcflatten:<tag>

   (see `vcflatten/tags`_ for valid values for ``<tag>``)


.. |downloads_vcflatten| image:: https://img.shields.io/conda/dn/bioconda/vcflatten.svg?style=flat
   :target: https://anaconda.org/bioconda/vcflatten
   :alt:   (downloads)
.. |docker_vcflatten| image:: https://quay.io/repository/biocontainers/vcflatten/status
   :target: https://quay.io/repository/biocontainers/vcflatten
.. _`vcflatten/tags`: https://quay.io/repository/biocontainers/vcflatten?tab=tags


.. raw:: html

    <script>
        var package = "vcflatten";
        var versions = ["0.5.2","0.5.2","0.5.2","0.5.2","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcflatten/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcflatten/README.html