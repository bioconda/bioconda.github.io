:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riassigner'
.. highlight: bash

riassigner
==========

.. conda:recipe:: riassigner
   :replaces_section_title:
   :noindex:

   GC\-MS retention index calculation

   :homepage: https://github.com/RECETOX/RIAssigner
   :license: MIT / MIT
   :recipe: /`riassigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riassigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riassigner/meta.yaml>`_

   RIAssigner is a python tool for retention index \(RI\) computation for GC\-MS data



.. conda:package:: riassigner

   |downloads_riassigner| |docker_riassigner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.4-4</code>,  <code>0.3.4-3</code>,  <code>0.3.4-2</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-1</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-4``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends fastparquet: ``>=2023.10.1,<2024.0.0``
   :depends matchms: ``>=0.24.1,<0.25.0``
   :depends numpy: 
   :depends pandas: 
   :depends pint: ``>=0.23.0,<0.24.0``
   :depends python: ``>=3.10,<3.13``
   :depends scipy: 
   :depends urllib3: ``1.26.15.*``
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

      mamba install riassigner

   and update with::

      mamba update riassigner

  To create a new environment, run::

      mamba create --name myenvname riassigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/riassigner:<tag>

   (see `riassigner/tags`_ for valid values for ``<tag>``)


.. |downloads_riassigner| image:: https://img.shields.io/conda/dn/bioconda/riassigner.svg?style=flat
   :target: https://anaconda.org/bioconda/riassigner
   :alt:   (downloads)
.. |docker_riassigner| image:: https://quay.io/repository/biocontainers/riassigner/status
   :target: https://quay.io/repository/biocontainers/riassigner
.. _`riassigner/tags`: https://quay.io/repository/biocontainers/riassigner?tab=tags


.. raw:: html

    <script>
        var package = "riassigner";
        var versions = ["0.5.0","0.4.1","0.4.0","0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riassigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riassigner/README.html