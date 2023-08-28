:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cd-hit-auxtools'
.. highlight: bash

cd-hit-auxtools
===============

.. conda:recipe:: cd-hit-auxtools
   :replaces_section_title:
   :noindex:

   Clusters and compares protein or nucleotide sequences

   :homepage: https://github.com/weizhongli/cdhit
   :license: GPLv2
   :recipe: /`cd-hit-auxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit-auxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit-auxtools/meta.yaml>`_

   


.. conda:package:: cd-hit-auxtools

   |downloads_cd-hit-auxtools| |docker_cd-hit-auxtools|

   :versions:
      
      

      ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``,  ``4.8.1-0``,  ``4.6.8-2``,  ``4.6.8-1``,  ``4.6.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cd-hit-auxtools

   and update with::

      mamba update cd-hit-auxtools

  To create a new environment, run::

      mamba create --name myenvname cd-hit-auxtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cd-hit-auxtools:<tag>

   (see `cd-hit-auxtools/tags`_ for valid values for ``<tag>``)


.. |downloads_cd-hit-auxtools| image:: https://img.shields.io/conda/dn/bioconda/cd-hit-auxtools.svg?style=flat
   :target: https://anaconda.org/bioconda/cd-hit-auxtools
   :alt:   (downloads)
.. |docker_cd-hit-auxtools| image:: https://quay.io/repository/biocontainers/cd-hit-auxtools/status
   :target: https://quay.io/repository/biocontainers/cd-hit-auxtools
.. _`cd-hit-auxtools/tags`: https://quay.io/repository/biocontainers/cd-hit-auxtools?tab=tags


.. raw:: html

    <script>
        var package = "cd-hit-auxtools";
        var versions = ["4.8.1","4.8.1","4.8.1","4.8.1","4.6.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cd-hit-auxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cd-hit-auxtools/README.html