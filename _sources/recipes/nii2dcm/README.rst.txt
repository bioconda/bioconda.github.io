:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nii2dcm'
.. highlight: bash

nii2dcm
=======

.. conda:recipe:: nii2dcm
   :replaces_section_title:
   :noindex:

   nii2dcm\: NIfTI to DICOM creation with Python

   :homepage: https://github.com/tomaroberts/nii2dcm
   :license: BSD / BSD-3
   :recipe: /`nii2dcm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nii2dcm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nii2dcm/meta.yaml>`_

   


.. conda:package:: nii2dcm

   |downloads_nii2dcm| |docker_nii2dcm|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends dunamai: ``1.18.0``
   :depends matplotlib-base: ``3.6.2``
   :depends nibabel: ``5.0.0``
   :depends numpy: ``1.23.2``
   :depends pydicom: ``2.3.0``
   :depends python: ``<3.11``
   :depends twine: ``4.0.2``
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

      mamba install nii2dcm

   and update with::

      mamba update nii2dcm

  To create a new environment, run::

      mamba create --name myenvname nii2dcm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nii2dcm:<tag>

   (see `nii2dcm/tags`_ for valid values for ``<tag>``)


.. |downloads_nii2dcm| image:: https://img.shields.io/conda/dn/bioconda/nii2dcm.svg?style=flat
   :target: https://anaconda.org/bioconda/nii2dcm
   :alt:   (downloads)
.. |docker_nii2dcm| image:: https://quay.io/repository/biocontainers/nii2dcm/status
   :target: https://quay.io/repository/biocontainers/nii2dcm
.. _`nii2dcm/tags`: https://quay.io/repository/biocontainers/nii2dcm?tab=tags


.. raw:: html

    <script>
        var package = "nii2dcm";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nii2dcm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nii2dcm/README.html