:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scripps-msms'
.. highlight: bash

scripps-msms
============

.. conda:recipe:: scripps-msms
   :replaces_section_title:
   :noindex:

   Fast algorithm for computing molecular surfaces

   :homepage: https://ccsb.scripps.edu/msms/
   :documentation: https://ccsb.scripps.edu/msms/documentation/
   
   :license: Free for academic use (research-only license)
   :recipe: /`scripps-msms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scripps-msms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scripps-msms/meta.yaml>`_
   :links: doi: :doi:`10.1002/(SICI)1097-0282(199603)38:3<305::AID-BIP4>3.0.CO;2-Y`

   MSMS is a fast algorithm for computing molecular surfaces.
   It was developed by Dr. Michel F. Sanner as part of his PhD thesis.
   It has been widely used for computing and displaying Solvent Excluded Surfaces for proteins.
   MSMS is used by various molecular visualization programs including VMD\, Chimera\, and PMV.



.. conda:package:: scripps-msms

   |downloads_scripps-msms| |docker_scripps-msms|

   :versions:
      
      

      ``2.6.1-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install scripps-msms

   and update with::

      mamba update scripps-msms

  To create a new environment, run::

      mamba create --name myenvname scripps-msms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scripps-msms:<tag>

   (see `scripps-msms/tags`_ for valid values for ``<tag>``)


.. |downloads_scripps-msms| image:: https://img.shields.io/conda/dn/bioconda/scripps-msms.svg?style=flat
   :target: https://anaconda.org/bioconda/scripps-msms
   :alt:   (downloads)
.. |docker_scripps-msms| image:: https://quay.io/repository/biocontainers/scripps-msms/status
   :target: https://quay.io/repository/biocontainers/scripps-msms
.. _`scripps-msms/tags`: https://quay.io/repository/biocontainers/scripps-msms?tab=tags


.. raw:: html

    <script>
        var package = "scripps-msms";
        var versions = ["2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scripps-msms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scripps-msms/README.html