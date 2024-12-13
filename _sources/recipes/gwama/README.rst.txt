:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gwama'
.. highlight: bash

gwama
=====

.. conda:recipe:: gwama
   :replaces_section_title:
   :noindex:

   Genome\-Wide Association Meta Analysis

   :homepage: https://www.geenivaramu.ee/en/tools/gwama
   :license: BSD-3-clause
   :recipe: /`gwama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gwama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gwama/meta.yaml>`_
   :links: biotools: :biotools:`GWAMA`, doi: :doi:`10.1186/1471-2105-11-288`

   


.. conda:package:: gwama

   |downloads_gwama| |docker_gwama|

   :versions:
      
      

      ``2.2.2-5``,  ``2.2.2-4``,  ``2.2.2-3``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install gwama

   and update with::

      mamba update gwama

  To create a new environment, run::

      mamba create --name myenvname gwama

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gwama:<tag>

   (see `gwama/tags`_ for valid values for ``<tag>``)


.. |downloads_gwama| image:: https://img.shields.io/conda/dn/bioconda/gwama.svg?style=flat
   :target: https://anaconda.org/bioconda/gwama
   :alt:   (downloads)
.. |docker_gwama| image:: https://quay.io/repository/biocontainers/gwama/status
   :target: https://quay.io/repository/biocontainers/gwama
.. _`gwama/tags`: https://quay.io/repository/biocontainers/gwama?tab=tags


.. raw:: html

    <script>
        var package = "gwama";
        var versions = ["2.2.2","2.2.2","2.2.2","2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gwama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gwama/README.html