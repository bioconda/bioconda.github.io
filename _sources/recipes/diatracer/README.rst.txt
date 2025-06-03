:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diatracer'
.. highlight: bash

diatracer
=========

.. conda:recipe:: diatracer
   :replaces_section_title:
   :noindex:

   A diaPASEF spectrum\-centric analysis tool

   :homepage: https://diatracer.nesvilab.org/
   :license: Academic License
   :recipe: /`diatracer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diatracer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diatracer/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-024-55448-8`

   diaTracer is a computational tool that enables spectrum\-centric analysis of Bruker’s diaPASEF data\-independent acquisition proteomics data\,
   facilitating direct \(“spectral\-library free”\) peptide identification and quantification

   diaTracer is available freely for academic research and educational purposes only\, in accordance with the terms at https\:\/\/msfragger.arsci.com\/diatracer\/LICENSE\-ACADEMIC.pdf.



.. conda:package:: diatracer

   |downloads_diatracer| |docker_diatracer|

   :versions:
      
      

      ``1.2.5-0``

      

   
   :depends msfragger: ``>=4.2``
   :depends openjdk: ``>=11``
   :depends python_abi: ``3.11.* *_cp311``
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

      mamba install diatracer

   and update with::

      mamba update diatracer

  To create a new environment, run::

      mamba create --name myenvname diatracer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/diatracer:<tag>

   (see `diatracer/tags`_ for valid values for ``<tag>``)


.. |downloads_diatracer| image:: https://img.shields.io/conda/dn/bioconda/diatracer.svg?style=flat
   :target: https://anaconda.org/bioconda/diatracer
   :alt:   (downloads)
.. |docker_diatracer| image:: https://quay.io/repository/biocontainers/diatracer/status
   :target: https://quay.io/repository/biocontainers/diatracer
.. _`diatracer/tags`: https://quay.io/repository/biocontainers/diatracer?tab=tags


.. raw:: html

    <script>
        var package = "diatracer";
        var versions = ["1.2.5"];
    </script>





Notes
-----
The \"diatracer\" command runs the diaTracer java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diatracer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diatracer/README.html