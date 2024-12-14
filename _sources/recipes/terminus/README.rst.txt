:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'terminus'
.. highlight: bash

terminus
========

.. conda:recipe:: terminus
   :replaces_section_title:
   :noindex:

   Terminus enables the discovery of data\-driven\, robust transcript groups from RNA\-seq data

   :homepage: https://github.com/COMBINE-lab/terminus
   :license: BSD 3-Clause
   :recipe: /`terminus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terminus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/terminus/meta.yaml>`_

   


.. conda:package:: terminus

   |downloads_terminus| |docker_terminus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0-8</code>,  <code>0.1.0-7</code>,  <code>0.1.0-6</code>,  <code>0.1.0-5</code>,  <code>0.1.0-4</code>,  <code>0.1.0-3</code>,  <code>0.1.0-2</code>,  <code>0.1.0-1</code>,  <code>0.1.0-0</code>,  </span></summary>
      

      ``0.1.0-8``,  ``0.1.0-7``,  ``0.1.0-6``,  ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``v0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install terminus

   and update with::

      mamba update terminus

  To create a new environment, run::

      mamba create --name myenvname terminus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/terminus:<tag>

   (see `terminus/tags`_ for valid values for ``<tag>``)


.. |downloads_terminus| image:: https://img.shields.io/conda/dn/bioconda/terminus.svg?style=flat
   :target: https://anaconda.org/bioconda/terminus
   :alt:   (downloads)
.. |docker_terminus| image:: https://quay.io/repository/biocontainers/terminus/status
   :target: https://quay.io/repository/biocontainers/terminus
.. _`terminus/tags`: https://quay.io/repository/biocontainers/terminus?tab=tags


.. raw:: html

    <script>
        var package = "terminus";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/terminus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/terminus/README.html