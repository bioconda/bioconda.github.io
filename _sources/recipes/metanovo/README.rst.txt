:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metanovo'
.. highlight: bash

metanovo
========

.. conda:recipe:: metanovo
   :replaces_section_title:
   :noindex:

   Produce targeted databases for mass spectrometry analysis.

   :homepage: https://github.com/uct-cbio/proteomics-pipelines
   :license: MIT
   :recipe: /`metanovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metanovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metanovo/meta.yaml>`_

   


.. conda:package:: metanovo

   |downloads_metanovo| |docker_metanovo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.4-9</code>,  <code>1.9.4-8</code>,  <code>1.9.4-7</code>,  <code>1.9.4-6</code>,  <code>1.9.4-5</code>,  <code>1.9.4-4</code>,  <code>1.9.4-3</code>,  <code>1.9.4-2</code>,  <code>1.9.4-1</code>,  </span></summary>
      

      ``1.9.4-9``,  ``1.9.4-8``,  ``1.9.4-7``,  ``1.9.4-6``,  ``1.9.4-5``,  ``1.9.4-4``,  ``1.9.4-3``,  ``1.9.4-2``,  ``1.9.4-1``,  ``1.9.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: ``1.06.*``
   :depends biopython: ``1.79``
   :depends numpy: ``1.22.1``
   :depends openjdk: ``8.0.312.*``
   :depends pandas: ``1.3.5``
   :depends parallel: ``20220222.*``
   :depends python: ``3.9.9.*``
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

      mamba install metanovo

   and update with::

      mamba update metanovo

  To create a new environment, run::

      mamba create --name myenvname metanovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metanovo:<tag>

   (see `metanovo/tags`_ for valid values for ``<tag>``)


.. |downloads_metanovo| image:: https://img.shields.io/conda/dn/bioconda/metanovo.svg?style=flat
   :target: https://anaconda.org/bioconda/metanovo
   :alt:   (downloads)
.. |docker_metanovo| image:: https://quay.io/repository/biocontainers/metanovo/status
   :target: https://quay.io/repository/biocontainers/metanovo
.. _`metanovo/tags`: https://quay.io/repository/biocontainers/metanovo?tab=tags


.. raw:: html

    <script>
        var package = "metanovo";
        var versions = ["1.9.4","1.9.4","1.9.4","1.9.4","1.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metanovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metanovo/README.html