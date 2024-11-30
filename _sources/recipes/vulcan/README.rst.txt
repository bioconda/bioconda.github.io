:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vulcan'
.. highlight: bash

vulcan
======

.. conda:recipe:: vulcan
   :replaces_section_title:
   :noindex:

   vulcan\, map long reads and prosper🖖\, a long read mapping pipeline that melds minimap2 and NGMLR

   :homepage: https://gitlab.com/treangenlab/vulcan
   :license: MIT
   :recipe: /`vulcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vulcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vulcan/meta.yaml>`_

   


.. conda:package:: vulcan

   |downloads_vulcan| |docker_vulcan|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bamtools: 
   :depends minimap2: 
   :depends ngmlr: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends samtools: ``1.9``
   :depends tqdm: 
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

      mamba install vulcan

   and update with::

      mamba update vulcan

  To create a new environment, run::

      mamba create --name myenvname vulcan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vulcan:<tag>

   (see `vulcan/tags`_ for valid values for ``<tag>``)


.. |downloads_vulcan| image:: https://img.shields.io/conda/dn/bioconda/vulcan.svg?style=flat
   :target: https://anaconda.org/bioconda/vulcan
   :alt:   (downloads)
.. |docker_vulcan| image:: https://quay.io/repository/biocontainers/vulcan/status
   :target: https://quay.io/repository/biocontainers/vulcan
.. _`vulcan/tags`: https://quay.io/repository/biocontainers/vulcan?tab=tags


.. raw:: html

    <script>
        var package = "vulcan";
        var versions = ["1.0.3","1.0.2","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vulcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vulcan/README.html