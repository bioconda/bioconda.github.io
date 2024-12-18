:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'makehub'
.. highlight: bash

makehub
=======

.. conda:recipe:: makehub
   :replaces_section_title:
   :noindex:

   MakeHub is a command line tool for the fully automatic generation of of track data hubs for visualizing genomes with the UCSC genome browser.

   :homepage: https://github.com/Gaius-Augustus/MakeHub
   :documentation: https://github.com/Gaius-Augustus/MakeHub/blob/1.0.8/README.md
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`makehub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/makehub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/makehub/meta.yaml>`_

   


.. conda:package:: makehub

   |downloads_makehub| |docker_makehub|

   :versions:
      
      

      ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends augustus: ``>=3.5.0``
   :depends biopython: 
   :depends python: ``>=3.8``
   :depends samtools: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-genepredcheck: 
   :depends ucsc-genepredtobed: 
   :depends ucsc-genepredtobiggenepred: 
   :depends ucsc-gtftogenepred: 
   :depends ucsc-hggcpercent: 
   :depends ucsc-ixixx: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-wigtobigwig: 
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

      mamba install makehub

   and update with::

      mamba update makehub

  To create a new environment, run::

      mamba create --name myenvname makehub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/makehub:<tag>

   (see `makehub/tags`_ for valid values for ``<tag>``)


.. |downloads_makehub| image:: https://img.shields.io/conda/dn/bioconda/makehub.svg?style=flat
   :target: https://anaconda.org/bioconda/makehub
   :alt:   (downloads)
.. |docker_makehub| image:: https://quay.io/repository/biocontainers/makehub/status
   :target: https://quay.io/repository/biocontainers/makehub
.. _`makehub/tags`: https://quay.io/repository/biocontainers/makehub?tab=tags


.. raw:: html

    <script>
        var package = "makehub";
        var versions = ["1.0.8","1.0.8","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/makehub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/makehub/README.html