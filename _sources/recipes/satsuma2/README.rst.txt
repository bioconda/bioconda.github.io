:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'satsuma2'
.. highlight: bash

satsuma2
========

.. conda:recipe:: satsuma2
   :replaces_section_title:
   :noindex:

   FFT cross\-correlation based synteny aligner\, \(re\)designed to make full use of parallel computing

   :homepage: https://github.com/bioinfologics/satsuma2
   :license: GPL3
   :recipe: /`satsuma2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satsuma2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satsuma2/meta.yaml>`_

   


.. conda:package:: satsuma2

   |downloads_satsuma2| |docker_satsuma2|

   :versions:
      
      

      ``20161123-5``,  ``20161123-4``,  ``20161123-3``,  ``20161123-2``,  ``20161123-1``,  ``20161123-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install satsuma2

   and update with::

      mamba update satsuma2

  To create a new environment, run::

      mamba create --name myenvname satsuma2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/satsuma2:<tag>

   (see `satsuma2/tags`_ for valid values for ``<tag>``)


.. |downloads_satsuma2| image:: https://img.shields.io/conda/dn/bioconda/satsuma2.svg?style=flat
   :target: https://anaconda.org/bioconda/satsuma2
   :alt:   (downloads)
.. |docker_satsuma2| image:: https://quay.io/repository/biocontainers/satsuma2/status
   :target: https://quay.io/repository/biocontainers/satsuma2
.. _`satsuma2/tags`: https://quay.io/repository/biocontainers/satsuma2?tab=tags


.. raw:: html

    <script>
        var package = "satsuma2";
        var versions = ["20161123","20161123","20161123","20161123","20161123"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/satsuma2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/satsuma2/README.html