:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'angsd'
.. highlight: bash

angsd
=====

.. conda:recipe:: angsd
   :replaces_section_title:
   :noindex:

   ANGSD\: Analysis of next generation Sequencing Data

   :homepage: http://www.popgen.dk/angsd/index.php/ANGSD
   :license: GPLv3, MIT
   :recipe: /`angsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd/meta.yaml>`_
   :links: biotools: :biotools:`angsd`, doi: :doi:`10.1186/s12859-014-0356-4`

   


.. conda:package:: angsd

   |downloads_angsd| |docker_angsd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.940-3</code>,  <code>0.940-2</code>,  <code>0.940-1</code>,  <code>0.940-0</code>,  <code>0.939-1</code>,  <code>0.939-0</code>,  <code>0.937-0</code>,  <code>0.935-3</code>,  <code>0.935-2</code>,  </span></summary>
      

      ``0.940-3``,  ``0.940-2``,  ``0.940-1``,  ``0.940-0``,  ``0.939-1``,  ``0.939-0``,  ``0.937-0``,  ``0.935-3``,  ``0.935-2``,  ``0.935-1``,  ``0.935-0``,  ``0.933-1``,  ``0.933-0``,  ``0.931-1``,  ``0.931-0``,  ``0.923-0``,  ``0.921-2``,  ``0.921-1``,  ``0.921-0``,  ``0.910-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.19.1,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install angsd

   and update with::

      mamba update angsd

  To create a new environment, run::

      mamba create --name myenvname angsd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/angsd:<tag>

   (see `angsd/tags`_ for valid values for ``<tag>``)


.. |downloads_angsd| image:: https://img.shields.io/conda/dn/bioconda/angsd.svg?style=flat
   :target: https://anaconda.org/bioconda/angsd
   :alt:   (downloads)
.. |docker_angsd| image:: https://quay.io/repository/biocontainers/angsd/status
   :target: https://quay.io/repository/biocontainers/angsd
.. _`angsd/tags`: https://quay.io/repository/biocontainers/angsd?tab=tags


.. raw:: html

    <script>
        var package = "angsd";
        var versions = ["0.940","0.940","0.940","0.940","0.939"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/angsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/angsd/README.html