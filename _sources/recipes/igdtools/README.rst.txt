:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igdtools'
.. highlight: bash

igdtools
========

.. conda:recipe:: igdtools
   :replaces_section_title:
   :noindex:

   Tools for converting VCF to IGD files and processing them.

   :homepage: https://aprilweilab.github.io/
   :documentation: https://picovcf.readthedocs.io/en/latest/igdtools.html
   
   :developer docs: https://github.com/aprilweilab/picovcf
   :license: MIT / MIT
   :recipe: /`igdtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdtools/meta.yaml>`_

   


.. conda:package:: igdtools

   |downloads_igdtools| |docker_igdtools|

   :versions:
      
      

      ``2.6-0``,  ``2.5-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install igdtools

   and update with::

      mamba update igdtools

  To create a new environment, run::

      mamba create --name myenvname igdtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igdtools:<tag>

   (see `igdtools/tags`_ for valid values for ``<tag>``)


.. |downloads_igdtools| image:: https://img.shields.io/conda/dn/bioconda/igdtools.svg?style=flat
   :target: https://anaconda.org/bioconda/igdtools
   :alt:   (downloads)
.. |docker_igdtools| image:: https://quay.io/repository/biocontainers/igdtools/status
   :target: https://quay.io/repository/biocontainers/igdtools
.. _`igdtools/tags`: https://quay.io/repository/biocontainers/igdtools?tab=tags


.. raw:: html

    <script>
        var package = "igdtools";
        var versions = ["2.6","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igdtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igdtools/README.html