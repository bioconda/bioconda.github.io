:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'find_circ'
.. highlight: bash

find_circ
=========

.. conda:recipe:: find_circ
   :replaces_section_title:
   :noindex:

   Detect head\-to\-tail spliced \(back\-spliced\) sequencing reads\, indicative of circular RNA \(circRNA\) in RNA\-seq data.

   :homepage: https://github.com/marvin-jens/find_circ
   :license: GPL-3
   :recipe: /`find_circ <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_circ>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_circ/meta.yaml>`_

   


.. conda:package:: find_circ

   |downloads_find_circ| |docker_find_circ|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends numpy: ``>=1.16.4``
   :depends pysam: ``>=0.15.2``
   :depends python: ``2.7.*``
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

      mamba install find_circ

   and update with::

      mamba update find_circ

  To create a new environment, run::

      mamba create --name myenvname find_circ

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/find_circ:<tag>

   (see `find_circ/tags`_ for valid values for ``<tag>``)


.. |downloads_find_circ| image:: https://img.shields.io/conda/dn/bioconda/find_circ.svg?style=flat
   :target: https://anaconda.org/bioconda/find_circ
   :alt:   (downloads)
.. |docker_find_circ| image:: https://quay.io/repository/biocontainers/find_circ/status
   :target: https://quay.io/repository/biocontainers/find_circ
.. _`find_circ/tags`: https://quay.io/repository/biocontainers/find_circ?tab=tags


.. raw:: html

    <script>
        var package = "find_circ";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/find_circ/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/find_circ/README.html