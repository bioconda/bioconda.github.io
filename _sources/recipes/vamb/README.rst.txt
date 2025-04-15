:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vamb'
.. highlight: bash

vamb
====

.. conda:recipe:: vamb
   :replaces_section_title:
   :noindex:

   Variational autoencoder for metagenomic binning.

   :homepage: https://github.com/RasmussenLab/vamb
   :documentation: https://vamb.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`vamb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamb/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.10.25.620172`, biotools: :biotools:`vamb`

   


.. conda:package:: vamb

   |downloads_vamb| |docker_vamb|

   :versions:
      
      

      ``5.0.3-0``,  ``4.1.3-0``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``2.1.0-0``,  ``2.0.1-0``

      

   
   :depends dadaptation: ``>=3.2``
   :depends loguru: ``>=0.7.0,<0.8``
   :depends networkx: ``>=3.4.2``
   :depends numpy: ``>=1.26.4,<3``
   :depends pycoverm: ``>=0.6.2``
   :depends pyhmmer: ``>=0.10.15``
   :depends pyrodigal: ``>=3.6.3``
   :depends python: ``>=3.10,<4``
   :depends pytorch: ``>=2.6.0``
   :depends scikit-learn: ``>=1.6.1``
   :depends vambcore: ``>=0.1.2,<0.2``
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

      mamba install vamb

   and update with::

      mamba update vamb

  To create a new environment, run::

      mamba create --name myenvname vamb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vamb:<tag>

   (see `vamb/tags`_ for valid values for ``<tag>``)


.. |downloads_vamb| image:: https://img.shields.io/conda/dn/bioconda/vamb.svg?style=flat
   :target: https://anaconda.org/bioconda/vamb
   :alt:   (downloads)
.. |docker_vamb| image:: https://quay.io/repository/biocontainers/vamb/status
   :target: https://quay.io/repository/biocontainers/vamb
.. _`vamb/tags`: https://quay.io/repository/biocontainers/vamb?tab=tags


.. raw:: html

    <script>
        var package = "vamb";
        var versions = ["5.0.3","4.1.3","3.0.2","3.0.2","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vamb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vamb/README.html