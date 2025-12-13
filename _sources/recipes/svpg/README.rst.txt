:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svpg'
.. highlight: bash

svpg
====

.. conda:recipe:: svpg
   :replaces_section_title:
   :noindex:

   Pangenome\-based structural variation caller

   :homepage: https://github.com/coopsor/SVPG
   :license: MIT / MIT
   :recipe: /`svpg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svpg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svpg/meta.yaml>`_

   


.. conda:package:: svpg

   |downloads_svpg| |docker_svpg|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``,  ``1.1-0``

      

   
   :depends mappy: 
   :depends numpy: 
   :depends pyabpoa: 
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: 
   :depends truvari: 
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

      mamba install svpg

   and update with::

      mamba update svpg

  To create a new environment, run::

      mamba create --name myenvname svpg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svpg:<tag>

   (see `svpg/tags`_ for valid values for ``<tag>``)


.. |downloads_svpg| image:: https://img.shields.io/conda/dn/bioconda/svpg.svg?style=flat
   :target: https://anaconda.org/bioconda/svpg
   :alt:   (downloads)
.. |docker_svpg| image:: https://quay.io/repository/biocontainers/svpg/status
   :target: https://quay.io/repository/biocontainers/svpg
.. _`svpg/tags`: https://quay.io/repository/biocontainers/svpg?tab=tags


.. raw:: html

    <script>
        var package = "svpg";
        var versions = ["1.3.0","1.2.0","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svpg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svpg/README.html