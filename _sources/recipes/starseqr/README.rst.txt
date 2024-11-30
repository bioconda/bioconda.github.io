:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starseqr'
.. highlight: bash

starseqr
========

.. conda:recipe:: starseqr
   :replaces_section_title:
   :noindex:

   RNA Fusion Detection and Quantification

   :homepage: https://github.com/ExpressionAnalysis/STAR-SEQR
   :license: ../../LICENSE
   :recipe: /`starseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starseqr/meta.yaml>`_

   


.. conda:package:: starseqr

   |downloads_starseqr| |docker_starseqr|

   :versions:
      
      

      ``0.6.7-5``,  ``0.6.7-4``,  ``0.6.7-3``,  ``0.6.7-2``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.3-0``,  ``0.5.0-0``

      

   
   :depends gffread: 
   :depends intervaltree_bio: 
   :depends libgcc-ng: ``>=12``
   :depends networkx: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: ``>=0.18.1``
   :depends primer3-py: 
   :depends pysam: ``>=0.9.1.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends six: 
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

      mamba install starseqr

   and update with::

      mamba update starseqr

  To create a new environment, run::

      mamba create --name myenvname starseqr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/starseqr:<tag>

   (see `starseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_starseqr| image:: https://img.shields.io/conda/dn/bioconda/starseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/starseqr
   :alt:   (downloads)
.. |docker_starseqr| image:: https://quay.io/repository/biocontainers/starseqr/status
   :target: https://quay.io/repository/biocontainers/starseqr
.. _`starseqr/tags`: https://quay.io/repository/biocontainers/starseqr?tab=tags


.. raw:: html

    <script>
        var package = "starseqr";
        var versions = ["0.6.7","0.6.7","0.6.7","0.6.7","0.6.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starseqr/README.html