:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haphic'
.. highlight: bash

haphic
======

.. conda:recipe:: haphic
   :replaces_section_title:
   :noindex:

   HapHiC\: a fast\, reference\-independent\, allele\-aware scaffolding tool based on Hi\-C data

   :homepage: https://github.com/zengxiaofei/HapHiC
   :license: BSD 3-Clause License
   :recipe: /`haphic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphic/meta.yaml>`_

   


.. conda:package:: haphic

   |downloads_haphic| |docker_haphic|

   :versions:
      
      

      ``1.0.7-0``

      

   
   :depends matplotlib-base: 
   :depends mkl: 
   :depends networkx: 
   :depends numpy: ``<2.0.0``
   :depends portion: 
   :depends pysam: 
   :depends python: ``>=3.12``
   :depends scikit-learn: 
   :depends scipy: 
   :depends sparse_dot_mkl: 
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

      mamba install haphic

   and update with::

      mamba update haphic

  To create a new environment, run::

      mamba create --name myenvname haphic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haphic:<tag>

   (see `haphic/tags`_ for valid values for ``<tag>``)


.. |downloads_haphic| image:: https://img.shields.io/conda/dn/bioconda/haphic.svg?style=flat
   :target: https://anaconda.org/bioconda/haphic
   :alt:   (downloads)
.. |docker_haphic| image:: https://quay.io/repository/biocontainers/haphic/status
   :target: https://quay.io/repository/biocontainers/haphic
.. _`haphic/tags`: https://quay.io/repository/biocontainers/haphic?tab=tags


.. raw:: html

    <script>
        var package = "haphic";
        var versions = ["1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haphic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haphic/README.html