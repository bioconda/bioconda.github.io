:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sak'
.. highlight: bash

sak
===

.. conda:recipe:: sak
   :replaces_section_title:
   :noindex:

   This tool allows one to cut sequences and parts of sequences out of sequence files.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/sak
   :documentation: https://github.com/seqan/seqan/tree/master/apps/sak/README
   
   :license: https://github.com/seqan/seqan/tree/master/apps/sak/LICENSE
   :recipe: /`sak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sak/meta.yaml>`_

   


.. conda:package:: sak

   |downloads_sak| |docker_sak|

   :versions:
      
      

      ``0.4.8-0``,  ``0.4.6-2``,  ``0.4.6-1``,  ``0.4.6-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install sak

   and update with::

      mamba update sak

  To create a new environment, run::

      mamba create --name myenvname sak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sak:<tag>

   (see `sak/tags`_ for valid values for ``<tag>``)


.. |downloads_sak| image:: https://img.shields.io/conda/dn/bioconda/sak.svg?style=flat
   :target: https://anaconda.org/bioconda/sak
   :alt:   (downloads)
.. |docker_sak| image:: https://quay.io/repository/biocontainers/sak/status
   :target: https://quay.io/repository/biocontainers/sak
.. _`sak/tags`: https://quay.io/repository/biocontainers/sak?tab=tags


.. raw:: html

    <script>
        var package = "sak";
        var versions = ["0.4.8","0.4.6","0.4.6","0.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sak/README.html