:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artemis'
.. highlight: bash

artemis
=======

.. conda:recipe:: artemis
   :replaces_section_title:
   :noindex:

   A set of Java genome visualization tools including the Artemis genome browser \& annotation tool\, ACT DNA sequence comparison viewer\, DNA Plotter image generation tool and the BamView BAM\/CRAM file viewer.

   :homepage: http://sanger-pathogens.github.io/Artemis/
   :license: GPL / GPL-3.0
   :recipe: /`artemis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artemis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artemis/meta.yaml>`_
   :links: biotools: :biotools:`artemis`

   


.. conda:package:: artemis

   |downloads_artemis| |docker_artemis|

   :versions:
      
      

      ``18.2.0-0``,  ``18.1.0-1``,  ``18.1.0-0``,  ``18.0.3-0``,  ``18.0.2-0``,  ``18.0.1-0``

      

   
   :depends openjdk: ``>=9``
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

      mamba install artemis

   and update with::

      mamba update artemis

  To create a new environment, run::

      mamba create --name myenvname artemis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/artemis:<tag>

   (see `artemis/tags`_ for valid values for ``<tag>``)


.. |downloads_artemis| image:: https://img.shields.io/conda/dn/bioconda/artemis.svg?style=flat
   :target: https://anaconda.org/bioconda/artemis
   :alt:   (downloads)
.. |docker_artemis| image:: https://quay.io/repository/biocontainers/artemis/status
   :target: https://quay.io/repository/biocontainers/artemis
.. _`artemis/tags`: https://quay.io/repository/biocontainers/artemis?tab=tags


.. raw:: html

    <script>
        var package = "artemis";
        var versions = ["18.2.0","18.1.0","18.1.0","18.0.3","18.0.2"];
    </script>





Notes
-----
The applications can be run using the following commands\: art\, act\, dnaplotter or bamview


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artemis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artemis/README.html