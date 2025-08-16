:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homopolish'
.. highlight: bash

homopolish
==========

.. conda:recipe:: homopolish
   :replaces_section_title:
   :noindex:

   High\-quality Nanopore\-only genome polisher.

   :homepage: https://github.com/ythuang0522/homopolish
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`homopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homopolish/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-021-02282-6`, biotools: :biotools:`homopolish`

   


.. conda:package:: homopolish

   |downloads_homopolish| |docker_homopolish|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.2.1-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: ``>=1.76``
   :depends fastani: 
   :depends feather-format: 
   :depends joblib: ``>=0.15.1``
   :depends mash: 
   :depends minimap2: 
   :depends more-itertools: ``>=8.4.0``
   :depends numpy: ``<2``
   :depends pandas: ``>=0.23.4``
   :depends pyarrow: ``>=0.15.1``
   :depends pycurl: ``>=7.43.0.6``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.7,<3.13``
   :depends python-wget: 
   :depends requests: ``>=2.24.0``
   :depends scikit-learn: 
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

      mamba install homopolish

   and update with::

      mamba update homopolish

  To create a new environment, run::

      mamba create --name myenvname homopolish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/homopolish:<tag>

   (see `homopolish/tags`_ for valid values for ``<tag>``)


.. |downloads_homopolish| image:: https://img.shields.io/conda/dn/bioconda/homopolish.svg?style=flat
   :target: https://anaconda.org/bioconda/homopolish
   :alt:   (downloads)
.. |docker_homopolish| image:: https://quay.io/repository/biocontainers/homopolish/status
   :target: https://quay.io/repository/biocontainers/homopolish
.. _`homopolish/tags`: https://quay.io/repository/biocontainers/homopolish?tab=tags


.. raw:: html

    <script>
        var package = "homopolish";
        var versions = ["0.4.2","0.4.1","0.4.1","0.3.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homopolish/README.html