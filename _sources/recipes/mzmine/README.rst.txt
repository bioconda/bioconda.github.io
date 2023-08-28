:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzmine'
.. highlight: bash

mzmine
======

.. conda:recipe:: mzmine
   :replaces_section_title:
   :noindex:

   Integrative analysis of multimodal mass spectrometry data

   :homepage: http://mzmine.github.io/
   :license: MIT
   :recipe: /`mzmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzmine/meta.yaml>`_

   MZmine 3 is an open\-source and platform\-independent software for mass
   spectrometry \(MS\) data processing and visualization. It enables large\-scale
   metabolomics and lipidomics research by spectral preprocessing\, feature
   detection\, and various options for compound identification\, including
   spectral library querying and creation.



.. conda:package:: mzmine

   |downloads_mzmine| |docker_mzmine|

   :versions:
      
      

      ``3.6.0-0``

      

   
   :depends openjdk: ``20.*``
   :depends pango: 
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

      mamba install mzmine

   and update with::

      mamba update mzmine

  To create a new environment, run::

      mamba create --name myenvname mzmine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mzmine:<tag>

   (see `mzmine/tags`_ for valid values for ``<tag>``)


.. |downloads_mzmine| image:: https://img.shields.io/conda/dn/bioconda/mzmine.svg?style=flat
   :target: https://anaconda.org/bioconda/mzmine
   :alt:   (downloads)
.. |docker_mzmine| image:: https://quay.io/repository/biocontainers/mzmine/status
   :target: https://quay.io/repository/biocontainers/mzmine
.. _`mzmine/tags`: https://quay.io/repository/biocontainers/mzmine?tab=tags


.. raw:: html

    <script>
        var package = "mzmine";
        var versions = ["3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzmine/README.html