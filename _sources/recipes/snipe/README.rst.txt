:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snipe'
.. highlight: bash

snipe
=====

.. conda:recipe:: snipe
   :replaces_section_title:
   :noindex:

   SRA\-Scale sequence QC and analysis

   :homepage: https://github.com/snipe-bio/snipe
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`snipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snipe/meta.yaml>`_

   


.. conda:package:: snipe

   |downloads_snipe| |docker_snipe|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends click: ``>=8.0.0``
   :depends lzstring: 
   :depends numpy: ``>=1.22,<2``
   :depends pandas: 
   :depends pathos: 
   :depends pyfastx: ``>=2.1.0,<3.0a0``
   :depends python: ``>=3.7,<3.12``
   :depends rapidfuzz: 
   :depends requests: ``>=2.25.1``
   :depends sourmash: ``>=4.8.11``
   :depends tqdm: 
   :depends zlib: 
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

      mamba install snipe

   and update with::

      mamba update snipe

  To create a new environment, run::

      mamba create --name myenvname snipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snipe:<tag>

   (see `snipe/tags`_ for valid values for ``<tag>``)


.. |downloads_snipe| image:: https://img.shields.io/conda/dn/bioconda/snipe.svg?style=flat
   :target: https://anaconda.org/bioconda/snipe
   :alt:   (downloads)
.. |docker_snipe| image:: https://quay.io/repository/biocontainers/snipe/status
   :target: https://quay.io/repository/biocontainers/snipe
.. _`snipe/tags`: https://quay.io/repository/biocontainers/snipe?tab=tags


.. raw:: html

    <script>
        var package = "snipe";
        var versions = ["0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snipe/README.html