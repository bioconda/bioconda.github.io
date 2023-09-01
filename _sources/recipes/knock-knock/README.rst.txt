:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knock-knock'
.. highlight: bash

knock-knock
===========

.. conda:recipe:: knock-knock
   :replaces_section_title:
   :noindex:

   toolkit for analyzing CRISPR knock\-in experiments

   :homepage: https://github.com/jeffhussmann/knock-knock
   :license: GPL-3
   :recipe: /`knock-knock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knock-knock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knock-knock/meta.yaml>`_

   


.. conda:package:: knock-knock

   |downloads_knock-knock| |docker_knock-knock|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends blast: ``2.7.1``
   :depends bokeh: ``>=0.12.14``
   :depends hits: ``>=0.1``
   :depends ipywidgets: ``>=7.1.2``
   :depends matplotlib: ``>=2.1.2``
   :depends minimap2: ``2.16``
   :depends nbconvert: ``>=5.3.1``
   :depends nbformat: ``>=4.4.0``
   :depends numpy: ``>=1.14.2``
   :depends pandas: ``>=0.22.0``
   :depends parallel: ``>=20190522``
   :depends pillow: ``>=5.0.0``
   :depends pysam: ``>=0.14``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=3.12``
   :depends samtools: ``>=1.9``
   :depends star: ``>=2.7.1``
   :depends tqdm: ``>=4.31.1``
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

      mamba install knock-knock

   and update with::

      mamba update knock-knock

  To create a new environment, run::

      mamba create --name myenvname knock-knock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/knock-knock:<tag>

   (see `knock-knock/tags`_ for valid values for ``<tag>``)


.. |downloads_knock-knock| image:: https://img.shields.io/conda/dn/bioconda/knock-knock.svg?style=flat
   :target: https://anaconda.org/bioconda/knock-knock
   :alt:   (downloads)
.. |docker_knock-knock| image:: https://quay.io/repository/biocontainers/knock-knock/status
   :target: https://quay.io/repository/biocontainers/knock-knock
.. _`knock-knock/tags`: https://quay.io/repository/biocontainers/knock-knock?tab=tags


.. raw:: html

    <script>
        var package = "knock-knock";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knock-knock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knock-knock/README.html