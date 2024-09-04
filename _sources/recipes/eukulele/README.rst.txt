:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukulele'
.. highlight: bash

eukulele
========

.. conda:recipe:: eukulele
   :replaces_section_title:
   :noindex:

   Easy taxonomic annotation for eukaryotic microbes.

   :homepage: https://github.com/AlexanderLabWHOI/EUKulele
   :documentation: https://github.com/AlexanderLabWHOI/EUKulele/blob/2.0.9/README.md
   
   :license: MIT / MIT
   :recipe: /`eukulele <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukulele>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukulele/meta.yaml>`_

   


.. conda:package:: eukulele

   |downloads_eukulele| |docker_eukulele|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.9-0</code>,  <code>2.0.7-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.3-3</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.0.9-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-3``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends blast: 
   :depends boost-cpp: 
   :depends chardet: 
   :depends diamond: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends multiprocess: 
   :depends numpy: 
   :depends pandas: 
   :depends pytest-cov: 
   :depends pytest-xdist: 
   :depends python: ``>=3.6``
   :depends python-coveralls: 
   :depends pyyaml: 
   :depends seaborn-base: 
   :depends sphinxcontrib-bibtex: ``1.0.0``
   :depends ujson: 
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

      mamba install eukulele

   and update with::

      mamba update eukulele

  To create a new environment, run::

      mamba create --name myenvname eukulele

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eukulele:<tag>

   (see `eukulele/tags`_ for valid values for ``<tag>``)


.. |downloads_eukulele| image:: https://img.shields.io/conda/dn/bioconda/eukulele.svg?style=flat
   :target: https://anaconda.org/bioconda/eukulele
   :alt:   (downloads)
.. |docker_eukulele| image:: https://quay.io/repository/biocontainers/eukulele/status
   :target: https://quay.io/repository/biocontainers/eukulele
.. _`eukulele/tags`: https://quay.io/repository/biocontainers/eukulele?tab=tags


.. raw:: html

    <script>
        var package = "eukulele";
        var versions = ["2.0.9","2.0.7","2.0.6","2.0.5","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukulele/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukulele/README.html