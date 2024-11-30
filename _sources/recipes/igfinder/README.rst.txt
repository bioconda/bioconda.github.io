:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igfinder'
.. highlight: bash

igfinder
========

.. conda:recipe:: igfinder
   :replaces_section_title:
   :noindex:

   A tool to extract Igh and Igl\/Igk gene sequences from assembled transcripts

   :homepage: https://tx.bioreg.kyushu-u.ac.jp/igfinder
   :license: MIT
   :recipe: /`igfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igfinder/meta.yaml>`_

   


.. conda:package:: igfinder

   |downloads_igfinder| |docker_igfinder|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: ``2.7.*``
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

      mamba install igfinder

   and update with::

      mamba update igfinder

  To create a new environment, run::

      mamba create --name myenvname igfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igfinder:<tag>

   (see `igfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_igfinder| image:: https://img.shields.io/conda/dn/bioconda/igfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/igfinder
   :alt:   (downloads)
.. |docker_igfinder| image:: https://quay.io/repository/biocontainers/igfinder/status
   :target: https://quay.io/repository/biocontainers/igfinder
.. _`igfinder/tags`: https://quay.io/repository/biocontainers/igfinder?tab=tags


.. raw:: html

    <script>
        var package = "igfinder";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igfinder/README.html