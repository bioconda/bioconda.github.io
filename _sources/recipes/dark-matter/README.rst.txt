:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dark-matter'
.. highlight: bash

dark-matter
===========

.. conda:recipe:: dark-matter
   :replaces_section_title:
   :noindex:

   Python library and utility scripts for working with genetic sequence data.

   :homepage: https://github.com/acorg/dark-matter
   :license: MIT
   :recipe: /`dark-matter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dark-matter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dark-matter/meta.yaml>`_

   


.. conda:package:: dark-matter

   |downloads_dark-matter| |docker_dark-matter|

   :versions:
      
      

      ``5.1.2-0``

      

   
   :depends biopython: ``>=1.83``
   :depends bz2file: ``>=0.98``
   :depends cachetools: ``>=5.5.2``
   :depends cython: ``>=0.29.16``
   :depends dendropy: ``>=5.0.1``
   :depends ete3: ``>=3.1.3``
   :depends ipython: ``>=8.12.3``
   :depends libgcc: ``>=13``
   :depends matplotlib-base: ``>=3.7.5``
   :depends mysql-connector-python: ``>=9.0.0``
   :depends numpy: ``>=1.14.2``
   :depends progressbar: ``>=2.5``
   :depends pysam: ``>=0.23.0``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python-edlib: ``>=1.3.9``
   :depends python_abi: ``3.12.* *_cp312``
   :depends pyzmq: ``>=14.3.1``
   :depends requests: ``>=2.32.3``
   :depends rich: ``>=14.0.0``
   :depends scikit-learn: ``>=1.3.2``
   :depends simplejson: ``>=3.5.3``
   :depends types-cachetools: ``>=5.5.0``
   :depends types-requests: ``>=2.32.0``
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

      mamba install dark-matter

   and update with::

      mamba update dark-matter

  To create a new environment, run::

      mamba create --name myenvname dark-matter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dark-matter:<tag>

   (see `dark-matter/tags`_ for valid values for ``<tag>``)


.. |downloads_dark-matter| image:: https://img.shields.io/conda/dn/bioconda/dark-matter.svg?style=flat
   :target: https://anaconda.org/bioconda/dark-matter
   :alt:   (downloads)
.. |docker_dark-matter| image:: https://quay.io/repository/biocontainers/dark-matter/status
   :target: https://quay.io/repository/biocontainers/dark-matter
.. _`dark-matter/tags`: https://quay.io/repository/biocontainers/dark-matter?tab=tags


.. raw:: html

    <script>
        var package = "dark-matter";
        var versions = ["5.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dark-matter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dark-matter/README.html