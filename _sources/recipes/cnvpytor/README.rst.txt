:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvpytor'
.. highlight: bash

cnvpytor
========

.. conda:recipe:: cnvpytor
   :replaces_section_title:
   :noindex:

   Python extension of CNVnator.

   :homepage: https://github.com/abyzovlab/CNVpytor
   :documentation: https://abyzovlab.github.io/CNVpytor
   
   :license: MIT / MIT
   :recipe: /`cnvpytor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvpytor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvpytor/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giab074`, biotools: :biotools:`cnvpytor`

   


.. conda:package:: cnvpytor

   |downloads_cnvpytor| |docker_cnvpytor|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``1.0b3-1``,  ``1.0b3-0``

      

   
   :depends chardet: 
   :depends h5py: ``>=2.9``
   :depends matplotlib-base: ``>=2.2``
   :depends numpy: ``>=1.16``
   :depends pathlib: ``>=1.0``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.0``
   :depends scipy: ``>=1.1``
   :depends xlsxwriter: ``>=1.3``
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

      mamba install cnvpytor

   and update with::

      mamba update cnvpytor

  To create a new environment, run::

      mamba create --name myenvname cnvpytor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnvpytor:<tag>

   (see `cnvpytor/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvpytor| image:: https://img.shields.io/conda/dn/bioconda/cnvpytor.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvpytor
   :alt:   (downloads)
.. |docker_cnvpytor| image:: https://quay.io/repository/biocontainers/cnvpytor/status
   :target: https://quay.io/repository/biocontainers/cnvpytor
.. _`cnvpytor/tags`: https://quay.io/repository/biocontainers/cnvpytor?tab=tags


.. raw:: html

    <script>
        var package = "cnvpytor";
        var versions = ["1.3.2","1.3.1","1.3.1","1.2.1","1.0"];
    </script>





Notes
-----
The package comes with downloaded reference data\, such that \`cnvpytor \-download\` can be omitted.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvpytor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvpytor/README.html