:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pal_finder'
.. highlight: bash

pal_finder
==========

.. conda:recipe:: pal_finder
   :replaces_section_title:
   :noindex:

   Find microsatellite repeat elements from sequencing reads and design PCR primers to amplify them

   :homepage: http://sourceforge.net/projects/palfinder/
   :license: GPLv3
   :recipe: /`pal_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal_finder/meta.yaml>`_

   Finds microsatellite repeat elements directly from raw 454
   or Illumina paired\-end sequencing reads\, and designs PCR primers
   to amplify these repeat loci in an automated fashion. Exact
   matches to repeats or 2\-\, 3\-\, 4\-\, 5\-\, and\/or 6\-mers are located
   and primer3 is then used to generate primer pairs to amplify
   regions containing microsatellite loci.


.. conda:package:: pal_finder

   |downloads_pal_finder| |docker_pal_finder|

   :versions:
      
      

      ``0.02.04-4``,  ``0.02.04-3``,  ``0.02.04-2``,  ``0.02.04-1``

      

   
   :depends perl: 
   :depends primer3: ``2.0.0a``
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

      mamba install pal_finder

   and update with::

      mamba update pal_finder

  To create a new environment, run::

      mamba create --name myenvname pal_finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pal_finder:<tag>

   (see `pal_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_pal_finder| image:: https://img.shields.io/conda/dn/bioconda/pal_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/pal_finder
   :alt:   (downloads)
.. |docker_pal_finder| image:: https://quay.io/repository/biocontainers/pal_finder/status
   :target: https://quay.io/repository/biocontainers/pal_finder
.. _`pal_finder/tags`: https://quay.io/repository/biocontainers/pal_finder?tab=tags


.. raw:: html

    <script>
        var package = "pal_finder";
        var versions = ["0.02.04","0.02.04","0.02.04","0.02.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pal_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pal_finder/README.html