:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploview'
.. highlight: bash

haploview
=========

.. conda:recipe:: haploview
   :replaces_section_title:
   :noindex:

   Haploview is designed to simplify and expedite the process of haplotype analysis by 
   providing a common interface to several tasks relating to such analyses.


   :homepage: https://www.broadinstitute.org/haploview/haploview
   :license: MIT
   :recipe: /`haploview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploview/meta.yaml>`_
   :links: biotools: :biotools:`haploview`, doi: :doi:`10.1093/bioinformatics/bth457`

   


.. conda:package:: haploview

   |downloads_haploview| |docker_haploview|

   :versions:
      
      

      ``4.2-1``,  ``4.2-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: 
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

      mamba install haploview

   and update with::

      mamba update haploview

  To create a new environment, run::

      mamba create --name myenvname haploview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haploview:<tag>

   (see `haploview/tags`_ for valid values for ``<tag>``)


.. |downloads_haploview| image:: https://img.shields.io/conda/dn/bioconda/haploview.svg?style=flat
   :target: https://anaconda.org/bioconda/haploview
   :alt:   (downloads)
.. |docker_haploview| image:: https://quay.io/repository/biocontainers/haploview/status
   :target: https://quay.io/repository/biocontainers/haploview
.. _`haploview/tags`: https://quay.io/repository/biocontainers/haploview?tab=tags


.. raw:: html

    <script>
        var package = "haploview";
        var versions = ["4.2","4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploview/README.html