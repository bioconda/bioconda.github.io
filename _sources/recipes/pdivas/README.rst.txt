:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdivas'
.. highlight: bash

pdivas
======

.. conda:recipe:: pdivas
   :replaces_section_title:
   :noindex:

   PDIVAS\: Pathogenicity predictor of Deep\-Intronic Variants causing Aberrant Splicing

   :homepage: https://github.com/shiro-kur/PDIVAS
   :license: MIT
   :recipe: /`pdivas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdivas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdivas/meta.yaml>`_

   


.. conda:package:: pdivas

   |downloads_pdivas| |docker_pdivas|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends cyvcf2: ``>=0.11``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.3``
   :depends python: 
   :depends scikit-learn: ``1.0.2.*``
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

      mamba install pdivas

   and update with::

      mamba update pdivas

  To create a new environment, run::

      mamba create --name myenvname pdivas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pdivas:<tag>

   (see `pdivas/tags`_ for valid values for ``<tag>``)


.. |downloads_pdivas| image:: https://img.shields.io/conda/dn/bioconda/pdivas.svg?style=flat
   :target: https://anaconda.org/bioconda/pdivas
   :alt:   (downloads)
.. |docker_pdivas| image:: https://quay.io/repository/biocontainers/pdivas/status
   :target: https://quay.io/repository/biocontainers/pdivas
.. _`pdivas/tags`: https://quay.io/repository/biocontainers/pdivas?tab=tags


.. raw:: html

    <script>
        var package = "pdivas";
        var versions = ["1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdivas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdivas/README.html