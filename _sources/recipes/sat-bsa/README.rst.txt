:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sat-bsa'
.. highlight: bash

sat-bsa
=======

.. conda:recipe:: sat-bsa
   :replaces_section_title:
   :noindex:

   Sat\-BSA is a package used for applying local de novo assembly and identifying the structural variants in the assembled region

   :homepage: https://github.com/SegawaTenta/Sat-BSA
   :license: GPL / GPL-3.0-or-later
   :recipe: /`sat-bsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sat-bsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sat-bsa/meta.yaml>`_
   :links: biotools: :biotools:`sta-bsa`

   


.. conda:package:: sat-bsa

   |downloads_sat-bsa| |docker_sat-bsa|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``,  ``1.10-0``

      

   
   :depends minimap2: ``2.17.*``
   :depends openjdk: 
   :depends perl: 
   :depends python: 
   :depends r-base: 
   :depends samtools: ``1.9.*``
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

      mamba install sat-bsa

   and update with::

      mamba update sat-bsa

  To create a new environment, run::

      mamba create --name myenvname sat-bsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sat-bsa:<tag>

   (see `sat-bsa/tags`_ for valid values for ``<tag>``)


.. |downloads_sat-bsa| image:: https://img.shields.io/conda/dn/bioconda/sat-bsa.svg?style=flat
   :target: https://anaconda.org/bioconda/sat-bsa
   :alt:   (downloads)
.. |docker_sat-bsa| image:: https://quay.io/repository/biocontainers/sat-bsa/status
   :target: https://quay.io/repository/biocontainers/sat-bsa
.. _`sat-bsa/tags`: https://quay.io/repository/biocontainers/sat-bsa?tab=tags


.. raw:: html

    <script>
        var package = "sat-bsa";
        var versions = ["1.12","1.12","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sat-bsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sat-bsa/README.html