:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isocor'
.. highlight: bash

isocor
======

.. conda:recipe:: isocor
   :replaces_section_title:
   :noindex:

   A Isotope Correction for mass spectrometry labeling experiments

   :homepage: https://github.com/MetaSys-LISBP/IsoCor/
   :documentation: https://isocor.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`isocor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isocor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isocor/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz209`

   


.. conda:package:: isocor

   |downloads_isocor| |docker_isocor|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.0-1``,  ``2.1.0-0``

      

   
   :depends numpy: ``>=1.15``
   :depends pandas: ``>=0.17.1``
   :depends python: ``>=3.7``
   :depends scipy: ``>=0.12.1``
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

      mamba install isocor

   and update with::

      mamba update isocor

  To create a new environment, run::

      mamba create --name myenvname isocor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isocor:<tag>

   (see `isocor/tags`_ for valid values for ``<tag>``)


.. |downloads_isocor| image:: https://img.shields.io/conda/dn/bioconda/isocor.svg?style=flat
   :target: https://anaconda.org/bioconda/isocor
   :alt:   (downloads)
.. |docker_isocor| image:: https://quay.io/repository/biocontainers/isocor/status
   :target: https://quay.io/repository/biocontainers/isocor
.. _`isocor/tags`: https://quay.io/repository/biocontainers/isocor?tab=tags


.. raw:: html

    <script>
        var package = "isocor";
        var versions = ["2.2.2","2.2.1","2.2.0","2.1.4","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isocor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isocor/README.html