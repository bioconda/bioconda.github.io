:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scbio'
.. highlight: bash

r-scbio
=======

.. conda:recipe:: r-scbio
   :replaces_section_title:
   :noindex:

   Cellular population mapping \(CPM\) a deconvolution algorithm in which single\-cell genomics is required in only one or a few samples\, where in other samples of the same tissue\, only bulk genomics is measured and the underlying fine resolution cellular heterogeneity is inferred.

   :homepage: https://github.com/amitfrish/scBio
   :license: GPL / GPL-2
   :recipe: /`r-scbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scbio/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0355-5`

   


.. conda:package:: r-scbio

   |downloads_r-scbio| |docker_r-scbio|

   :versions:
      
      

      ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dosnow: 
   :depends r-fields: 
   :depends r-foreach: 
   :depends r-liblinear: 
   :depends r-raster: 
   :depends r-sp: 
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

      mamba install r-scbio

   and update with::

      mamba update r-scbio

  To create a new environment, run::

      mamba create --name myenvname r-scbio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scbio:<tag>

   (see `r-scbio/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scbio| image:: https://img.shields.io/conda/dn/bioconda/r-scbio.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scbio
   :alt:   (downloads)
.. |docker_r-scbio| image:: https://quay.io/repository/biocontainers/r-scbio/status
   :target: https://quay.io/repository/biocontainers/r-scbio
.. _`r-scbio/tags`: https://quay.io/repository/biocontainers/r-scbio?tab=tags


.. raw:: html

    <script>
        var package = "r-scbio";
        var versions = ["0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scbio/README.html