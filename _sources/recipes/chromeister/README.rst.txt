:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromeister'
.. highlight: bash

chromeister
===========

.. conda:recipe:: chromeister
   :replaces_section_title:
   :noindex:

   An ultra fast\, heuristic approach to detect conserved signals in extremely large pairwise genome comparisons

   :homepage: https://github.com/estebanpw/chromeister
   :license: GPL / GPL-3.0
   :recipe: /`chromeister <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromeister>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromeister/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41598-019-46773-w`

   


.. conda:package:: chromeister

   |downloads_chromeister| |docker_chromeister|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.a-5</code>,  <code>1.5.a-4</code>,  <code>1.5.a-3</code>,  <code>1.5.a-2</code>,  <code>1.5.a-1</code>,  <code>1.5.a-0</code>,  <code>1.4-0</code>,  <code>1.3.c-0</code>,  <code>1.2-0</code>,  </span></summary>
      

      ``1.5.a-5``,  ``1.5.a-4``,  ``1.5.a-3``,  ``1.5.a-2``,  ``1.5.a-1``,  ``1.5.a-0``,  ``1.4-0``,  ``1.3.c-0``,  ``1.2-0``,  ``1.1.c-0``,  ``1.1.b-0``,  ``1.1.a-0``

      
      .. raw:: html

         </details>
      

   
   :depends cycler: 
   :depends kiwisolver: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends opencv: 
   :depends pillow: 
   :depends pyparsing: 
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends r-ape: 
   :depends r-base: 
   :depends scikit-build: 
   :depends six: 
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

      mamba install chromeister

   and update with::

      mamba update chromeister

  To create a new environment, run::

      mamba create --name myenvname chromeister

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromeister:<tag>

   (see `chromeister/tags`_ for valid values for ``<tag>``)


.. |downloads_chromeister| image:: https://img.shields.io/conda/dn/bioconda/chromeister.svg?style=flat
   :target: https://anaconda.org/bioconda/chromeister
   :alt:   (downloads)
.. |docker_chromeister| image:: https://quay.io/repository/biocontainers/chromeister/status
   :target: https://quay.io/repository/biocontainers/chromeister
.. _`chromeister/tags`: https://quay.io/repository/biocontainers/chromeister?tab=tags


.. raw:: html

    <script>
        var package = "chromeister";
        var versions = ["1.5.a","1.5.a","1.5.a","1.5.a","1.5.a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromeister/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromeister/README.html