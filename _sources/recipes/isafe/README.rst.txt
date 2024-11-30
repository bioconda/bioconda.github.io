:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isafe'
.. highlight: bash

isafe
=====

.. conda:recipe:: isafe
   :replaces_section_title:
   :noindex:

   A program for identifying a favored mutation in positive selective sweep.

   :homepage: https://github.com/alek0991/iSAFE
   :license: BSD / BSD-3-Clause
   :recipe: /`isafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isafe/meta.yaml>`_
   :links: biotools: :biotools:`isafe`, doi: :doi:`10.1038/nmeth.4606`

   A program for identifying a favored mutation in positive selective sweep. It enables researchers to accurately pinpoint the favored mutation in a large region \(∼5 Mbp\) by using a statistic derived solely from population genetics signals.



.. conda:package:: isafe

   |downloads_isafe| |docker_isafe|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.7-0``

      

   
   :depends bcftools: ``>=1.2``
   :depends numpy: ``>=1.9.0``
   :depends pandas: ``>=0.18.0``
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

      mamba install isafe

   and update with::

      mamba update isafe

  To create a new environment, run::

      mamba create --name myenvname isafe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isafe:<tag>

   (see `isafe/tags`_ for valid values for ``<tag>``)


.. |downloads_isafe| image:: https://img.shields.io/conda/dn/bioconda/isafe.svg?style=flat
   :target: https://anaconda.org/bioconda/isafe
   :alt:   (downloads)
.. |docker_isafe| image:: https://quay.io/repository/biocontainers/isafe/status
   :target: https://quay.io/repository/biocontainers/isafe
.. _`isafe/tags`: https://quay.io/repository/biocontainers/isafe?tab=tags


.. raw:: html

    <script>
        var package = "isafe";
        var versions = ["1.1.1","1.1.0","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isafe/README.html