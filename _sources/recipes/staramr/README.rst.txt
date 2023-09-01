:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staramr'
.. highlight: bash

staramr
=======

.. conda:recipe:: staramr
   :replaces_section_title:
   :noindex:

   Scan genome contigs against the ResFinder and PointFinder databases

   :homepage: https://github.com/phac-nml/staramr
   :license: APACHE / Apache Software License
   :recipe: /`staramr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staramr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staramr/meta.yaml>`_

   


.. conda:package:: staramr

   |downloads_staramr| |docker_staramr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.70``
   :depends blast: ``>=2.2.31``
   :depends coloredlogs: ``>=10.0``
   :depends file: 
   :depends git: 
   :depends gitpython: ``>=2.1.3``
   :depends green: ``>=2.13.0``
   :depends mlst: 
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.23.0``
   :depends python: ``>=3``
   :depends xlsxwriter: ``>=1.0.2``
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

      mamba install staramr

   and update with::

      mamba update staramr

  To create a new environment, run::

      mamba create --name myenvname staramr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/staramr:<tag>

   (see `staramr/tags`_ for valid values for ``<tag>``)


.. |downloads_staramr| image:: https://img.shields.io/conda/dn/bioconda/staramr.svg?style=flat
   :target: https://anaconda.org/bioconda/staramr
   :alt:   (downloads)
.. |docker_staramr| image:: https://quay.io/repository/biocontainers/staramr/status
   :target: https://quay.io/repository/biocontainers/staramr
.. _`staramr/tags`: https://quay.io/repository/biocontainers/staramr?tab=tags


.. raw:: html

    <script>
        var package = "staramr";
        var versions = ["0.10.0","0.9.1","0.9.0","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staramr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staramr/README.html