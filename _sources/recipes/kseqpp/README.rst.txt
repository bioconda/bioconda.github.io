:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kseqpp'
.. highlight: bash

kseqpp
======

.. conda:recipe:: kseqpp
   :replaces_section_title:
   :noindex:

   C\+\+11 re\-implementation of kseq by Heng Li

   :homepage: https://github.com/cartoonist/kseqpp
   :license: MIT / MIT
   :recipe: /`kseqpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kseqpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kseqpp/meta.yaml>`_

   The goal for re\-implementation of kseq is providing modern API and resource
   management while preserving its flexibility and performance. Like original
   kseq\, this parser is based on generic stream buffer and works with different
   file types.



.. conda:package:: kseqpp

   |downloads_kseqpp| |docker_kseqpp|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install kseqpp

   and update with::

      mamba update kseqpp

  To create a new environment, run::

      mamba create --name myenvname kseqpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kseqpp:<tag>

   (see `kseqpp/tags`_ for valid values for ``<tag>``)


.. |downloads_kseqpp| image:: https://img.shields.io/conda/dn/bioconda/kseqpp.svg?style=flat
   :target: https://anaconda.org/bioconda/kseqpp
   :alt:   (downloads)
.. |docker_kseqpp| image:: https://quay.io/repository/biocontainers/kseqpp/status
   :target: https://quay.io/repository/biocontainers/kseqpp
.. _`kseqpp/tags`: https://quay.io/repository/biocontainers/kseqpp?tab=tags


.. raw:: html

    <script>
        var package = "kseqpp";
        var versions = ["1.1.1","1.1.1","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kseqpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kseqpp/README.html