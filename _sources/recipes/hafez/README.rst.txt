:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hafez'
.. highlight: bash

hafez
=====

.. conda:recipe:: hafez
   :replaces_section_title:
   :noindex:

   A tool for identifying active prophage elements through read mapping

   :homepage: https://github.com/Chrisjrt/hafeZ
   :documentation: https://github.com/Chrisjrt/hafeZ/blob/master/README.md
   
   :developer docs: https://github.com/Chrisjrt/hafeZ/
   :license: GPL-3 / GPL-3
   :recipe: /`hafez <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hafez>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hafez/meta.yaml>`_

   


.. conda:package:: hafez

   |downloads_hafez| |docker_hafez|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bbmap: ``>=38.90``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.5.0``
   :depends hhsuite: ``>=3.3.0``
   :depends hmmer: ``>=3.3.2``
   :depends matplotlib-base: ``>=3.3.4``
   :depends minimap2: ``>=2.18``
   :depends mosdepth: ``>=0.3.1``
   :depends numpy: ``>=1.20.1``
   :depends pandas: ``>=1.2.4``
   :depends pyrodigal: ``>=0.4.7``
   :depends pysam: ``>=0.16.0.1``
   :depends python: 
   :depends sambamba: ``>=0.6.8``
   :depends samtools: ``>=1.11``
   :depends scipy: ``>=1.6.2``
   :depends seaborn: ``>=0.11.1``
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

      mamba install hafez

   and update with::

      mamba update hafez

  To create a new environment, run::

      mamba create --name myenvname hafez

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hafez:<tag>

   (see `hafez/tags`_ for valid values for ``<tag>``)


.. |downloads_hafez| image:: https://img.shields.io/conda/dn/bioconda/hafez.svg?style=flat
   :target: https://anaconda.org/bioconda/hafez
   :alt:   (downloads)
.. |docker_hafez| image:: https://quay.io/repository/biocontainers/hafez/status
   :target: https://quay.io/repository/biocontainers/hafez
.. _`hafez/tags`: https://quay.io/repository/biocontainers/hafez?tab=tags


.. raw:: html

    <script>
        var package = "hafez";
        var versions = ["1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hafez/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hafez/README.html