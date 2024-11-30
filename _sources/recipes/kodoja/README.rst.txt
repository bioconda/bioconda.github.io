:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kodoja'
.. highlight: bash

kodoja
======

.. conda:recipe:: kodoja
   :replaces_section_title:
   :noindex:

   Kodoja\: identifying viruses from plant RNA sequencing data

   :homepage: https://github.com/abaizan/kodoja/
   :license: MIT
   :recipe: /`kodoja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kodoja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kodoja/meta.yaml>`_

   


.. conda:package:: kodoja

   |downloads_kodoja| |docker_kodoja|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.10-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-1</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends fastqc: 
   :depends kaiju: 
   :depends kraken: 
   :depends ncbi-genome-download: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends trimmomatic: 
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

      mamba install kodoja

   and update with::

      mamba update kodoja

  To create a new environment, run::

      mamba create --name myenvname kodoja

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kodoja:<tag>

   (see `kodoja/tags`_ for valid values for ``<tag>``)


.. |downloads_kodoja| image:: https://img.shields.io/conda/dn/bioconda/kodoja.svg?style=flat
   :target: https://anaconda.org/bioconda/kodoja
   :alt:   (downloads)
.. |docker_kodoja| image:: https://quay.io/repository/biocontainers/kodoja/status
   :target: https://quay.io/repository/biocontainers/kodoja
.. _`kodoja/tags`: https://quay.io/repository/biocontainers/kodoja?tab=tags


.. raw:: html

    <script>
        var package = "kodoja";
        var versions = ["0.0.10","0.0.9","0.0.8","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kodoja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kodoja/README.html