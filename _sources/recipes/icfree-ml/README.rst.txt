:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icfree-ml'
.. highlight: bash

icfree-ml
=========

.. conda:recipe:: icfree-ml
   :replaces_section_title:
   :noindex:

   Design of experiments \(DoE\) and machine learning packages for the iCFree project

   :homepage: https://github.com/brsynth/icfree-ml
   :license: MIT / MIT
   :recipe: /`icfree-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icfree-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icfree-ml/meta.yaml>`_

   


.. conda:package:: icfree-ml

   |downloads_icfree-ml| |docker_icfree-ml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.0-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.3-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.3-0``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends blast: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pydoe2: 
   :depends pysbol2: 
   :depends python: ``>3.8,<3.12``
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

      mamba install icfree-ml

   and update with::

      mamba update icfree-ml

  To create a new environment, run::

      mamba create --name myenvname icfree-ml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/icfree-ml:<tag>

   (see `icfree-ml/tags`_ for valid values for ``<tag>``)


.. |downloads_icfree-ml| image:: https://img.shields.io/conda/dn/bioconda/icfree-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/icfree-ml
   :alt:   (downloads)
.. |docker_icfree-ml| image:: https://quay.io/repository/biocontainers/icfree-ml/status
   :target: https://quay.io/repository/biocontainers/icfree-ml
.. _`icfree-ml/tags`: https://quay.io/repository/biocontainers/icfree-ml?tab=tags


.. raw:: html

    <script>
        var package = "icfree-ml";
        var versions = ["2.8.0","2.7.1","2.7.0","2.6.0","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icfree-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icfree-ml/README.html