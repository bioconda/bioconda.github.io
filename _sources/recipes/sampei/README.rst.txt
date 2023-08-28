:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sampei'
.. highlight: bash

sampei
======

.. conda:recipe:: sampei
   :replaces_section_title:
   :noindex:

   SAMPEI\, a searching method leveraging high quality query spectra within the same or different dataset to assign target spectra with peptide sequence and undefined modification \(mass shift\)

   :homepage: https://github.com/FenyoLab/SAMPEI
   :license: MIT / MIT License
   :recipe: /`sampei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sampei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sampei/meta.yaml>`_

   


.. conda:package:: sampei

   |downloads_sampei| |docker_sampei|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends numba: ``>=0.49.0``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.1``
   :depends pyteomics: ``>=4.2``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sampei

   and update with::

      mamba update sampei

  To create a new environment, run::

      mamba create --name myenvname sampei

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sampei:<tag>

   (see `sampei/tags`_ for valid values for ``<tag>``)


.. |downloads_sampei| image:: https://img.shields.io/conda/dn/bioconda/sampei.svg?style=flat
   :target: https://anaconda.org/bioconda/sampei
   :alt:   (downloads)
.. |docker_sampei| image:: https://quay.io/repository/biocontainers/sampei/status
   :target: https://quay.io/repository/biocontainers/sampei
.. _`sampei/tags`: https://quay.io/repository/biocontainers/sampei?tab=tags


.. raw:: html

    <script>
        var package = "sampei";
        var versions = ["0.0.9","0.0.8","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sampei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sampei/README.html