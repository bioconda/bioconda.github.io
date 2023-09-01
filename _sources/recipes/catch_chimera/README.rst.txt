:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'catch_chimera'
.. highlight: bash

catch_chimera
=============

.. conda:recipe:: catch_chimera
   :replaces_section_title:
   :noindex:

   CATCh is an ensemble classifier for chimera detection in 16S rRNA sequencing studies. The present bioconda recipe installs the \'CATCh\_v1.run\' binary\, as suggested on authors website.

   :homepage: https://science.sckcen.be/en/Institutes/EHS/MCB/MIC/Bioinformatics/CATCh
   :license: GPL3
   :recipe: /`catch_chimera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch_chimera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch_chimera/meta.yaml>`_

   


.. conda:package:: catch_chimera

   |downloads_catch_chimera| |docker_catch_chimera|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends bioconductor-decipher: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install catch_chimera

   and update with::

      mamba update catch_chimera

  To create a new environment, run::

      mamba create --name myenvname catch_chimera

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/catch_chimera:<tag>

   (see `catch_chimera/tags`_ for valid values for ``<tag>``)


.. |downloads_catch_chimera| image:: https://img.shields.io/conda/dn/bioconda/catch_chimera.svg?style=flat
   :target: https://anaconda.org/bioconda/catch_chimera
   :alt:   (downloads)
.. |docker_catch_chimera| image:: https://quay.io/repository/biocontainers/catch_chimera/status
   :target: https://quay.io/repository/biocontainers/catch_chimera
.. _`catch_chimera/tags`: https://quay.io/repository/biocontainers/catch_chimera?tab=tags


.. raw:: html

    <script>
        var package = "catch_chimera";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/catch_chimera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/catch_chimera/README.html