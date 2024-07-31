:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigslice'
.. highlight: bash

bigslice
========

.. conda:recipe:: bigslice
   :replaces_section_title:
   :noindex:

   A highly scalable\, user\-interactive tool for the large scale analysis of Biosynthetic Gene Clusters data.

   :homepage: https://github.com/satriaphd/bigslice
   :documentation: https://github.com/medema-group/bigslice/blob/v2.0/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`bigslice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigslice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigslice/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giaa154`

   


.. conda:package:: bigslice

   |downloads_bigslice| |docker_bigslice|

   :versions:
      
      

      ``2.0-0``

      

   
   :depends biopython: ``>=1.73,<=1.83``
   :depends numpy: 
   :depends pandas: 
   :depends psutil: ``<=5.8``
   :depends pyarrow: 
   :depends pyhmmer: 
   :depends python: ``>=3.7``
   :depends scikit-learn: 
   :depends tqdm: 
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

      mamba install bigslice

   and update with::

      mamba update bigslice

  To create a new environment, run::

      mamba create --name myenvname bigslice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigslice:<tag>

   (see `bigslice/tags`_ for valid values for ``<tag>``)


.. |downloads_bigslice| image:: https://img.shields.io/conda/dn/bioconda/bigslice.svg?style=flat
   :target: https://anaconda.org/bioconda/bigslice
   :alt:   (downloads)
.. |docker_bigslice| image:: https://quay.io/repository/biocontainers/bigslice/status
   :target: https://quay.io/repository/biocontainers/bigslice
.. _`bigslice/tags`: https://quay.io/repository/biocontainers/bigslice?tab=tags


.. raw:: html

    <script>
        var package = "bigslice";
        var versions = ["2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigslice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigslice/README.html