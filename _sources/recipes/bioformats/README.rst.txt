:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioformats'
.. highlight: bash

bioformats
==========

.. conda:recipe:: bioformats
   :replaces_section_title:
   :noindex:

   A collection of Python classes to handle bioinformatics data.

   :homepage: https://github.com/gtamazian/bioformats
   :license: MIT
   :recipe: /`bioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioformats/meta.yaml>`_

   


.. conda:package:: bioformats

   |downloads_bioformats| |docker_bioformats|

   :versions:
      
      

      ``0.1.15-2``,  ``0.1.15-1``,  ``0.1.15-0``

      

   
   :depends future: 
   :depends pyfaidx: 
   :depends python: 
   :depends pyvcf: 
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

      mamba install bioformats

   and update with::

      mamba update bioformats

  To create a new environment, run::

      mamba create --name myenvname bioformats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioformats:<tag>

   (see `bioformats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioformats| image:: https://img.shields.io/conda/dn/bioconda/bioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioformats
   :alt:   (downloads)
.. |docker_bioformats| image:: https://quay.io/repository/biocontainers/bioformats/status
   :target: https://quay.io/repository/biocontainers/bioformats
.. _`bioformats/tags`: https://quay.io/repository/biocontainers/bioformats?tab=tags


.. raw:: html

    <script>
        var package = "bioformats";
        var versions = ["0.1.15","0.1.15","0.1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioformats/README.html