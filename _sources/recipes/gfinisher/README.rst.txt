:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfinisher'
.. highlight: bash

gfinisher
=========

.. conda:recipe:: gfinisher
   :replaces_section_title:
   :noindex:

   GFinisher is an application tools for refinement and finalization of prokaryotic genomes assemblies using the bias of GC Skew to identify assembly errors and organizes the contigs\/scaffolds with genomes references.

   :homepage: https://sourceforge.net/projects/gfinisher/
   :license: Unknown
   :recipe: /`gfinisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfinisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfinisher/meta.yaml>`_

   


.. conda:package:: gfinisher

   |downloads_gfinisher| |docker_gfinisher|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends java-jdk: ``>=6``
   :depends python: ``2.7*``
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

      mamba install gfinisher

   and update with::

      mamba update gfinisher

  To create a new environment, run::

      mamba create --name myenvname gfinisher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfinisher:<tag>

   (see `gfinisher/tags`_ for valid values for ``<tag>``)


.. |downloads_gfinisher| image:: https://img.shields.io/conda/dn/bioconda/gfinisher.svg?style=flat
   :target: https://anaconda.org/bioconda/gfinisher
   :alt:   (downloads)
.. |docker_gfinisher| image:: https://quay.io/repository/biocontainers/gfinisher/status
   :target: https://quay.io/repository/biocontainers/gfinisher
.. _`gfinisher/tags`: https://quay.io/repository/biocontainers/gfinisher?tab=tags


.. raw:: html

    <script>
        var package = "gfinisher";
        var versions = ["1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfinisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfinisher/README.html