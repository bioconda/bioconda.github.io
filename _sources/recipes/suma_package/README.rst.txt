:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suma_package'
.. highlight: bash

suma_package
============

.. conda:recipe:: suma_package
   :replaces_section_title:
   :noindex:

   Fast and exact comparison of sequences

   :homepage: http://metabarcoding.org/sumatra
   :license: CeCILL FSLA
   :recipe: /`suma_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suma_package/meta.yaml>`_

   


.. conda:package:: suma_package

   |downloads_suma_package| |docker_suma_package|

   :versions:
      
      

      ``1.0.00-7``,  ``1.0.00-6``,  ``1.0.00-5``,  ``1.0.00-4``,  ``1.0.00-3``,  ``1.0.00-2``,  ``1.0.00-1``,  ``1.0.00-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install suma_package

   and update with::

      mamba update suma_package

  To create a new environment, run::

      mamba create --name myenvname suma_package

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/suma_package:<tag>

   (see `suma_package/tags`_ for valid values for ``<tag>``)


.. |downloads_suma_package| image:: https://img.shields.io/conda/dn/bioconda/suma_package.svg?style=flat
   :target: https://anaconda.org/bioconda/suma_package
   :alt:   (downloads)
.. |docker_suma_package| image:: https://quay.io/repository/biocontainers/suma_package/status
   :target: https://quay.io/repository/biocontainers/suma_package
.. _`suma_package/tags`: https://quay.io/repository/biocontainers/suma_package?tab=tags


.. raw:: html

    <script>
        var package = "suma_package";
        var versions = ["1.0.00","1.0.00","1.0.00","1.0.00","1.0.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suma_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suma_package/README.html