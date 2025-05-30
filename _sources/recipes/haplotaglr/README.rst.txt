:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplotaglr'
.. highlight: bash

haplotaglr
==========

.. conda:recipe:: haplotaglr
   :replaces_section_title:
   :noindex:

   Haplotagging individual long reads using known haplotype information.

   :homepage: https://github.com/Boyle-Lab/HaplotagLR.git
   :license: MIT / MIT
   :recipe: /`haplotaglr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotaglr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotaglr/meta.yaml>`_

   


.. conda:package:: haplotaglr

   |downloads_haplotaglr| |docker_haplotaglr|

   :versions:
      
      

      ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.5-0``,  ``1.1.4-0``

      

   
   :depends biopython: ``>=1.78``
   :depends numpy: ``>=1.20.1``
   :depends powerlaw: ``>=1.4.6``
   :depends pyliftover: ``>=0.4``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.7,<3.13``
   :depends requests: ``>=2.26.0``
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

      mamba install haplotaglr

   and update with::

      mamba update haplotaglr

  To create a new environment, run::

      mamba create --name myenvname haplotaglr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haplotaglr:<tag>

   (see `haplotaglr/tags`_ for valid values for ``<tag>``)


.. |downloads_haplotaglr| image:: https://img.shields.io/conda/dn/bioconda/haplotaglr.svg?style=flat
   :target: https://anaconda.org/bioconda/haplotaglr
   :alt:   (downloads)
.. |docker_haplotaglr| image:: https://quay.io/repository/biocontainers/haplotaglr/status
   :target: https://quay.io/repository/biocontainers/haplotaglr
.. _`haplotaglr/tags`: https://quay.io/repository/biocontainers/haplotaglr?tab=tags


.. raw:: html

    <script>
        var package = "haplotaglr";
        var versions = ["1.1.10","1.1.9","1.1.8","1.1.7","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplotaglr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplotaglr/README.html