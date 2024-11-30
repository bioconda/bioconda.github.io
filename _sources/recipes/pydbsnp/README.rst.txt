:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydbsnp'
.. highlight: bash

pydbsnp
=======

.. conda:recipe:: pydbsnp
   :replaces_section_title:
   :noindex:

   Interface with dbSNP VCF data

   :homepage: https://gitlab.com/aaylward/pydbsnp
   :license: MIT
   :recipe: /`pydbsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydbsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydbsnp/meta.yaml>`_

   


.. conda:package:: pydbsnp

   |downloads_pydbsnp| |docker_pydbsnp|

   :versions:
      
      

      ``2.0.2-0``

      

   
   :depends pysam: 
   :depends python: 
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

      mamba install pydbsnp

   and update with::

      mamba update pydbsnp

  To create a new environment, run::

      mamba create --name myenvname pydbsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydbsnp:<tag>

   (see `pydbsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_pydbsnp| image:: https://img.shields.io/conda/dn/bioconda/pydbsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/pydbsnp
   :alt:   (downloads)
.. |docker_pydbsnp| image:: https://quay.io/repository/biocontainers/pydbsnp/status
   :target: https://quay.io/repository/biocontainers/pydbsnp
.. _`pydbsnp/tags`: https://quay.io/repository/biocontainers/pydbsnp?tab=tags


.. raw:: html

    <script>
        var package = "pydbsnp";
        var versions = ["2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydbsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydbsnp/README.html