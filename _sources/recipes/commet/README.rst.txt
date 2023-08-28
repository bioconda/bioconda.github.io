:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'commet'
.. highlight: bash

commet
======

.. conda:recipe:: commet
   :replaces_section_title:
   :noindex:

   Comparing and combining multiple metagenomic datasets

   :homepage: https://colibread.inria.fr/software/commet/
   :license: GNU Affero General Public License
   :recipe: /`commet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commet/meta.yaml>`_
   :links: biotools: :biotools:`commet`, doi: :doi:`10.1109/BIBM.2014.6999135`

   


.. conda:package:: commet

   |downloads_commet| |docker_commet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>24.7.14-10</code>,  <code>24.7.14-9</code>,  <code>24.7.14-8</code>,  <code>24.7.14-7</code>,  <code>24.7.14-6</code>,  <code>24.7.14-5</code>,  <code>24.7.14-4</code>,  <code>24.7.14-3</code>,  <code>24.7.14-2</code>,  </span></summary>
      

      ``24.7.14-10``,  ``24.7.14-9``,  ``24.7.14-8``,  ``24.7.14-7``,  ``24.7.14-6``,  ``24.7.14-5``,  ``24.7.14-4``,  ``24.7.14-3``,  ``24.7.14-2``,  ``24.7.14-1``,  ``24.7.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gplots: 
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

      mamba install commet

   and update with::

      mamba update commet

  To create a new environment, run::

      mamba create --name myenvname commet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/commet:<tag>

   (see `commet/tags`_ for valid values for ``<tag>``)


.. |downloads_commet| image:: https://img.shields.io/conda/dn/bioconda/commet.svg?style=flat
   :target: https://anaconda.org/bioconda/commet
   :alt:   (downloads)
.. |docker_commet| image:: https://quay.io/repository/biocontainers/commet/status
   :target: https://quay.io/repository/biocontainers/commet
.. _`commet/tags`: https://quay.io/repository/biocontainers/commet?tab=tags


.. raw:: html

    <script>
        var package = "commet";
        var versions = ["24.7.14","24.7.14","24.7.14","24.7.14","24.7.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/commet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/commet/README.html