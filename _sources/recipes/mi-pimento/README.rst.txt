:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mi-pimento'
.. highlight: bash

mi-pimento
==========

.. conda:recipe:: mi-pimento
   :replaces_section_title:
   :noindex:

   A PrIMEr infereNce TOolkit to facilitate large\-scale calling of metabarcoding amplicon sequence variants.

   :homepage: https://github.com/EBI-Metagenomics/PIMENTO
   :license: APACHE / Apache-2.0
   :recipe: /`mi-pimento <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mi-pimento>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mi-pimento/meta.yaml>`_

   A toolkit for performing primer inference in sequencing reads.



.. conda:package:: mi-pimento

   |downloads_mi-pimento| |docker_mi-pimento|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.4-0``

      

   
   :depends biopython: ``1.82``
   :depends click: ``8.1.7``
   :depends numpy: ``1.26.0``
   :depends pandas: ``2.0.2``
   :depends pyfastx: ``>=2.2.0``
   :depends python: ``>=3.10``
   :depends regex: ``2023.12.25``
   :depends rich: ``13.9.4``
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

      mamba install mi-pimento

   and update with::

      mamba update mi-pimento

  To create a new environment, run::

      mamba create --name myenvname mi-pimento

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mi-pimento:<tag>

   (see `mi-pimento/tags`_ for valid values for ``<tag>``)


.. |downloads_mi-pimento| image:: https://img.shields.io/conda/dn/bioconda/mi-pimento.svg?style=flat
   :target: https://anaconda.org/bioconda/mi-pimento
   :alt:   (downloads)
.. |docker_mi-pimento| image:: https://quay.io/repository/biocontainers/mi-pimento/status
   :target: https://quay.io/repository/biocontainers/mi-pimento
.. _`mi-pimento/tags`: https://quay.io/repository/biocontainers/mi-pimento?tab=tags


.. raw:: html

    <script>
        var package = "mi-pimento";
        var versions = ["1.0.2","1.0.1","1.0.0","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mi-pimento/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mi-pimento/README.html