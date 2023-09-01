:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-daisy'
.. highlight: bash

cgat-daisy
==========

.. conda:recipe:: cgat-daisy
   :replaces_section_title:
   :noindex:

   A system to design and execute benchmarks

   :homepage: https://github.com/cgat-developers/cgat-daisy
   :license: MIT
   :recipe: /`cgat-daisy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-daisy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-daisy/meta.yaml>`_

   


.. conda:package:: cgat-daisy

   |downloads_cgat-daisy| |docker_cgat-daisy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.12-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-2</code>,  <code>0.1.9-1</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  </span></summary>
      

      ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends cgatcore: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends ruamel_yaml: 
   :depends ruffus: 
   :depends sqlalchemy: 
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

      mamba install cgat-daisy

   and update with::

      mamba update cgat-daisy

  To create a new environment, run::

      mamba create --name myenvname cgat-daisy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgat-daisy:<tag>

   (see `cgat-daisy/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-daisy| image:: https://img.shields.io/conda/dn/bioconda/cgat-daisy.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-daisy
   :alt:   (downloads)
.. |docker_cgat-daisy| image:: https://quay.io/repository/biocontainers/cgat-daisy/status
   :target: https://quay.io/repository/biocontainers/cgat-daisy
.. _`cgat-daisy/tags`: https://quay.io/repository/biocontainers/cgat-daisy?tab=tags


.. raw:: html

    <script>
        var package = "cgat-daisy";
        var versions = ["0.1.12","0.1.11","0.1.10","0.1.9","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-daisy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-daisy/README.html