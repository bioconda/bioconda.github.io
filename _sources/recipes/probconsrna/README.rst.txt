:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probconsrna'
.. highlight: bash

probconsrna
===========

.. conda:recipe:: probconsrna
   :replaces_section_title:
   :noindex:

   PROBCONSRNA is an experimental version of PROBCONS for nucleotide sequences

   :homepage: http://probcons.stanford.edu/
   :license: Public Domain Software
   :recipe: /`probconsrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probconsrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probconsrna/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.2821705`

   


.. conda:package:: probconsrna

   |downloads_probconsrna| |docker_probconsrna|

   :versions:
      
      

      ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
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

      mamba install probconsrna

   and update with::

      mamba update probconsrna

  To create a new environment, run::

      mamba create --name myenvname probconsrna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/probconsrna:<tag>

   (see `probconsrna/tags`_ for valid values for ``<tag>``)


.. |downloads_probconsrna| image:: https://img.shields.io/conda/dn/bioconda/probconsrna.svg?style=flat
   :target: https://anaconda.org/bioconda/probconsrna
   :alt:   (downloads)
.. |docker_probconsrna| image:: https://quay.io/repository/biocontainers/probconsrna/status
   :target: https://quay.io/repository/biocontainers/probconsrna
.. _`probconsrna/tags`: https://quay.io/repository/biocontainers/probconsrna?tab=tags


.. raw:: html

    <script>
        var package = "probconsrna";
        var versions = ["1.10","1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probconsrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probconsrna/README.html