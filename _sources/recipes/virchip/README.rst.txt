:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virchip'
.. highlight: bash

virchip
=======

.. conda:recipe:: virchip
   :replaces_section_title:
   :noindex:

   Virtual ChIP\-seq predicts transcription factor binding in any cell type with chromatin accessibility and transcriptome data. Manuscript DOI\: https\:\/\/doi.org\/10.1101\/168419

   :homepage: https://virchip.hoffmanlab.org
   :license: General Public License version 3
   :recipe: /`virchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virchip/meta.yaml>`_

   


.. conda:package:: virchip

   |downloads_virchip| |docker_virchip|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends numpy: ``>=1.4.15``
   :depends pandas: ``0.23.*``
   :depends python: ``<3``
   :depends r-base: 
   :depends scikit-learn: ``>=0.18.1``
   :depends scipy: ``1.1.0.*``
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

      mamba install virchip

   and update with::

      mamba update virchip

  To create a new environment, run::

      mamba create --name myenvname virchip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virchip:<tag>

   (see `virchip/tags`_ for valid values for ``<tag>``)


.. |downloads_virchip| image:: https://img.shields.io/conda/dn/bioconda/virchip.svg?style=flat
   :target: https://anaconda.org/bioconda/virchip
   :alt:   (downloads)
.. |docker_virchip| image:: https://quay.io/repository/biocontainers/virchip/status
   :target: https://quay.io/repository/biocontainers/virchip
.. _`virchip/tags`: https://quay.io/repository/biocontainers/virchip?tab=tags


.. raw:: html

    <script>
        var package = "virchip";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virchip/README.html