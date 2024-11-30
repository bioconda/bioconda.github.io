:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mauvealigner'
.. highlight: bash

mauvealigner
============

.. conda:recipe:: mauvealigner
   :replaces_section_title:
   :noindex:

   The mauveAligner and progressiveMauve command\-line tools for generating multiple genome alignments in the presence of large\-scale evolutionary events

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauvealigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner/meta.yaml>`_

   


.. conda:package:: mauvealigner

   |downloads_mauvealigner| |docker_mauvealigner|

   :versions:
      
      

      ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgenome: ``>=1.3.1,<1.4.0a0``
   :depends libmems: ``>=1.6.0,<1.7.0a0``
   :depends libmuscle: 
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

      mamba install mauvealigner

   and update with::

      mamba update mauvealigner

  To create a new environment, run::

      mamba create --name myenvname mauvealigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mauvealigner:<tag>

   (see `mauvealigner/tags`_ for valid values for ``<tag>``)


.. |downloads_mauvealigner| image:: https://img.shields.io/conda/dn/bioconda/mauvealigner.svg?style=flat
   :target: https://anaconda.org/bioconda/mauvealigner
   :alt:   (downloads)
.. |docker_mauvealigner| image:: https://quay.io/repository/biocontainers/mauvealigner/status
   :target: https://quay.io/repository/biocontainers/mauvealigner
.. _`mauvealigner/tags`: https://quay.io/repository/biocontainers/mauvealigner?tab=tags


.. raw:: html

    <script>
        var package = "mauvealigner";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauvealigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauvealigner/README.html