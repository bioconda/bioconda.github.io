:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matchms'
.. highlight: bash

matchms
=======

.. conda:recipe:: matchms
   :replaces_section_title:
   :noindex:

   Python library for fuzzy comparison of mass spectrum data and other Python objects

   :homepage: https://github.com/matchms/matchms
   :documentation: https://matchms.readthedocs.io/en/latest/
   
   :license: APACHE / Apache-2.0
   :recipe: /`matchms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchms/meta.yaml>`_

   


.. conda:package:: matchms

   |downloads_matchms| |docker_matchms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.24.4-0</code>,  <code>0.24.3-0</code>,  <code>0.24.2-0</code>,  <code>0.24.1-0</code>,  <code>0.24.0-1</code>,  <code>0.24.0-0</code>,  <code>0.23.1-0</code>,  <code>0.22.0-0</code>,  <code>0.21.2-0</code>,  </span></summary>
      

      ``0.24.4-0``,  ``0.24.3-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.22.0-0``,  ``0.21.2-0``,  ``0.21.1-1``,  ``0.21.1-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends deprecated: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numba: ``>=0.47``
   :depends numpy: ``<1.25``
   :depends pandas: 
   :depends pickydict: ``>=0.4.0``
   :depends pillow: ``9.5.*``
   :depends pubchempy: 
   :depends pyteomics: ``>=4.6``
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends rdkit: ``>=2020.03.1``
   :depends requests: 
   :depends scipy: ``>=1.4.0,<1.11``
   :depends sparsestack: ``>=0.4.1``
   :depends tqdm: 
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

      mamba install matchms

   and update with::

      mamba update matchms

  To create a new environment, run::

      mamba create --name myenvname matchms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/matchms:<tag>

   (see `matchms/tags`_ for valid values for ``<tag>``)


.. |downloads_matchms| image:: https://img.shields.io/conda/dn/bioconda/matchms.svg?style=flat
   :target: https://anaconda.org/bioconda/matchms
   :alt:   (downloads)
.. |docker_matchms| image:: https://quay.io/repository/biocontainers/matchms/status
   :target: https://quay.io/repository/biocontainers/matchms
.. _`matchms/tags`: https://quay.io/repository/biocontainers/matchms?tab=tags


.. raw:: html

    <script>
        var package = "matchms";
        var versions = ["0.24.4","0.24.3","0.24.2","0.24.1","0.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matchms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matchms/README.html