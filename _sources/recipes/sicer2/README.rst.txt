:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sicer2'
.. highlight: bash

sicer2
======

.. conda:recipe:: sicer2
   :replaces_section_title:
   :noindex:

   Redesigned and improved ChIP\-seq broad peak calling tool SICER.

   :homepage: https://pypi.org/project/SICER2/
   :developer docs: https://github.com/zanglab/SICER2
   :license: MIT / MIT
   :recipe: /`sicer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer2/meta.yaml>`_

   


.. conda:package:: sicer2

   |downloads_sicer2| |docker_sicer2|

   :versions:
      
      

      ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: ``>=1``
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

      mamba install sicer2

   and update with::

      mamba update sicer2

  To create a new environment, run::

      mamba create --name myenvname sicer2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sicer2:<tag>

   (see `sicer2/tags`_ for valid values for ``<tag>``)


.. |downloads_sicer2| image:: https://img.shields.io/conda/dn/bioconda/sicer2.svg?style=flat
   :target: https://anaconda.org/bioconda/sicer2
   :alt:   (downloads)
.. |docker_sicer2| image:: https://quay.io/repository/biocontainers/sicer2/status
   :target: https://quay.io/repository/biocontainers/sicer2
.. _`sicer2/tags`: https://quay.io/repository/biocontainers/sicer2?tab=tags


.. raw:: html

    <script>
        var package = "sicer2";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sicer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sicer2/README.html