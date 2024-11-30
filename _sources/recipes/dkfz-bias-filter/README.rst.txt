:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dkfz-bias-filter'
.. highlight: bash

dkfz-bias-filter
================

.. conda:recipe:: dkfz-bias-filter
   :replaces_section_title:
   :noindex:

   The DKFZ bias filter flags SNVs that appear to be biased based on the variant read support

   :homepage: https://github.com/eilslabs/DKFZBiasFilter
   :license: GPLv3
   :recipe: /`dkfz-bias-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dkfz-bias-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dkfz-bias-filter/meta.yaml>`_

   


.. conda:package:: dkfz-bias-filter

   |downloads_dkfz-bias-filter| |docker_dkfz-bias-filter|

   :versions:
      
      

      ``1.2.3a-9``,  ``1.2.3a-8``,  ``1.2.3a-7``,  ``1.2.3a-5``,  ``1.2.3a-4``,  ``1.2.3a-3``,  ``1.2.3a-2``,  ``1.2.3a-1``,  ``1.2.3a-0``

      

   
   :depends matplotlib: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install dkfz-bias-filter

   and update with::

      mamba update dkfz-bias-filter

  To create a new environment, run::

      mamba create --name myenvname dkfz-bias-filter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dkfz-bias-filter:<tag>

   (see `dkfz-bias-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_dkfz-bias-filter| image:: https://img.shields.io/conda/dn/bioconda/dkfz-bias-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/dkfz-bias-filter
   :alt:   (downloads)
.. |docker_dkfz-bias-filter| image:: https://quay.io/repository/biocontainers/dkfz-bias-filter/status
   :target: https://quay.io/repository/biocontainers/dkfz-bias-filter
.. _`dkfz-bias-filter/tags`: https://quay.io/repository/biocontainers/dkfz-bias-filter?tab=tags


.. raw:: html

    <script>
        var package = "dkfz-bias-filter";
        var versions = ["1.2.3a","1.2.3a","1.2.3a","1.2.3a","1.2.3a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dkfz-bias-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dkfz-bias-filter/README.html