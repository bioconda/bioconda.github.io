:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mquad'
.. highlight: bash

mquad
=====

.. conda:recipe:: mquad
   :replaces_section_title:
   :noindex:

   MQuad\: Mixture Model for Mitochondrial Mutation detection in single\-cell omics data.

   :homepage: https://github.com/aaronkwc/MQuad
   :documentation: https://github.com/single-cell-genetics/MQuad/blob/main/README.rst
   
   :license: APACHE / Apache-2.0
   :recipe: /`mquad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mquad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mquad/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-022-28845-0`, biotools: :biotools:`mquad`

   


.. conda:package:: mquad

   |downloads_mquad| |docker_mquad|

   :versions:
      
      

      ``0.1.8b-0``

      

   
   :depends bbmix: ``>=0.2.2``
   :depends kneed: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.9.0``
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends scikit-learn: 
   :depends scipy: ``>=1.4.0``
   :depends seaborn-base: 
   :depends vireosnp: 
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

      mamba install mquad

   and update with::

      mamba update mquad

  To create a new environment, run::

      mamba create --name myenvname mquad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mquad:<tag>

   (see `mquad/tags`_ for valid values for ``<tag>``)


.. |downloads_mquad| image:: https://img.shields.io/conda/dn/bioconda/mquad.svg?style=flat
   :target: https://anaconda.org/bioconda/mquad
   :alt:   (downloads)
.. |docker_mquad| image:: https://quay.io/repository/biocontainers/mquad/status
   :target: https://quay.io/repository/biocontainers/mquad
.. _`mquad/tags`: https://quay.io/repository/biocontainers/mquad?tab=tags


.. raw:: html

    <script>
        var package = "mquad";
        var versions = ["0.1.8b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mquad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mquad/README.html