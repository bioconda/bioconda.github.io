:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgs-assembler'
.. highlight: bash

wgs-assembler
=============

.. conda:recipe:: wgs-assembler
   :replaces_section_title:
   :noindex:

   Celera Assembler \(wgs\-assembler\) is a de novo whole\-genome shotgun \(WGS\) DNA sequence assembler

   :homepage: http://wgs-assembler.sourceforge.net/wiki/index.php?title=Main_Page
   :license: MIT
   :recipe: /`wgs-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler/meta.yaml>`_

   


.. conda:package:: wgs-assembler

   |downloads_wgs-assembler| |docker_wgs-assembler|

   :versions:
      
      

      ``8.3-0``

      

   
   :depends atac: 
   :depends blasr: 
   :depends estmapper: 
   :depends falcon: 
   :depends jellyfish: 
   :depends libgcc: 
   :depends meryl: 
   :depends pbdagcon: 
   :depends perl: ``5.22.0*``
   :depends samtools: 
   :depends sim4db: 
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

      mamba install wgs-assembler

   and update with::

      mamba update wgs-assembler

  To create a new environment, run::

      mamba create --name myenvname wgs-assembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgs-assembler:<tag>

   (see `wgs-assembler/tags`_ for valid values for ``<tag>``)


.. |downloads_wgs-assembler| image:: https://img.shields.io/conda/dn/bioconda/wgs-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/wgs-assembler
   :alt:   (downloads)
.. |docker_wgs-assembler| image:: https://quay.io/repository/biocontainers/wgs-assembler/status
   :target: https://quay.io/repository/biocontainers/wgs-assembler
.. _`wgs-assembler/tags`: https://quay.io/repository/biocontainers/wgs-assembler?tab=tags


.. raw:: html

    <script>
        var package = "wgs-assembler";
        var versions = ["8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs-assembler/README.html