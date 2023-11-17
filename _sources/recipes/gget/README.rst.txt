:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gget'
.. highlight: bash

gget
====

.. conda:recipe:: gget
   :replaces_section_title:
   :noindex:

   gget enables efficient querying of genomic databases

   :homepage: https://github.com/pachterlab/gget
   :license: BSD / BSD-2-Clause
   :recipe: /`gget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gget/meta.yaml>`_

   gget enables efficient querying of genomic databases\, such as Ensembl\, UniProt\, 
   NCBI\, directly into a Python or terminal programming environment. It was 
   designed to support genomic data analysis.



.. conda:package:: gget

   |downloads_gget| |docker_gget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.28.2-0</code>,  <code>0.28.1-0</code>,  <code>0.27.9-0</code>,  <code>0.27.8-0</code>,  <code>0.27.7-0</code>,  <code>0.27.5-0</code>,  <code>0.27.4-0</code>,  <code>0.27.3-0</code>,  <code>0.27.2-2</code>,  </span></summary>
      

      ``0.28.2-0``,  ``0.28.1-0``,  ``0.27.9-0``,  ``0.27.8-0``,  ``0.27.7-0``,  ``0.27.5-0``,  ``0.27.4-0``,  ``0.27.3-0``,  ``0.27.2-2``,  ``0.27.2-1``,  ``0.27.2-0``,  ``0.27.0-0``,  ``0.3.13-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.7-0``,  ``0.3.5-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.24-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: ``>=4.10.0``
   :depends curl: 
   :depends ipython: 
   :depends ipywidgets: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends mysql-connector-python: ``>=8.0.5,<=8.0.29``
   :depends numpy: ``>=1.17.2``
   :depends openai: 
   :depends openmm: ``7.5.1``
   :depends pandas: ``>=1.0.0``
   :depends py3dmol: ``>=1.8.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.22.0``
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

      mamba install gget

   and update with::

      mamba update gget

  To create a new environment, run::

      mamba create --name myenvname gget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gget:<tag>

   (see `gget/tags`_ for valid values for ``<tag>``)


.. |downloads_gget| image:: https://img.shields.io/conda/dn/bioconda/gget.svg?style=flat
   :target: https://anaconda.org/bioconda/gget
   :alt:   (downloads)
.. |docker_gget| image:: https://quay.io/repository/biocontainers/gget/status
   :target: https://quay.io/repository/biocontainers/gget
.. _`gget/tags`: https://quay.io/repository/biocontainers/gget?tab=tags


.. raw:: html

    <script>
        var package = "gget";
        var versions = ["0.28.2","0.28.1","0.27.9","0.27.8","0.27.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gget/README.html