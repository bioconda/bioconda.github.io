:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmm-demux'
.. highlight: bash

gmm-demux
=========

.. conda:recipe:: gmm-demux
   :replaces_section_title:
   :noindex:

   GMM\-Demux is a Gaussian\-Mixture\-Model\-based software for processing sample barcoding data \(cell hashing and MULTI\-seq\).

   :homepage: https://github.com/CHPGenetics/GMM-demux
   :license: MIT / MIT
   :recipe: /`gmm-demux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmm-demux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmm-demux/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02084-2`

   


.. conda:package:: gmm-demux

   |downloads_gmm-demux| |docker_gmm-demux|

   :versions:
      
      

      ``0.2.2.3-0``

      

   
   :depends bitvector: 
   :depends numpy: ``>=1.22.4``
   :depends pandas: ``>=1.4.3``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: ``>=1.12.0``
   :depends tabulate: 
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

      mamba install gmm-demux

   and update with::

      mamba update gmm-demux

  To create a new environment, run::

      mamba create --name myenvname gmm-demux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gmm-demux:<tag>

   (see `gmm-demux/tags`_ for valid values for ``<tag>``)


.. |downloads_gmm-demux| image:: https://img.shields.io/conda/dn/bioconda/gmm-demux.svg?style=flat
   :target: https://anaconda.org/bioconda/gmm-demux
   :alt:   (downloads)
.. |docker_gmm-demux| image:: https://quay.io/repository/biocontainers/gmm-demux/status
   :target: https://quay.io/repository/biocontainers/gmm-demux
.. _`gmm-demux/tags`: https://quay.io/repository/biocontainers/gmm-demux?tab=tags


.. raw:: html

    <script>
        var package = "gmm-demux";
        var versions = ["0.2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmm-demux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmm-demux/README.html