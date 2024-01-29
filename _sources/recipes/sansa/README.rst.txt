:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sansa'
.. highlight: bash

sansa
=====

.. conda:recipe:: sansa
   :replaces_section_title:
   :noindex:

   Structural variant annotation

   :homepage: https://github.com/dellytools/sansa
   :license: BSD / BSD License
   :recipe: /`sansa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sansa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sansa/meta.yaml>`_

   


.. conda:package:: sansa

   |downloads_sansa| |docker_sansa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.8-6</code>,  <code>0.0.8-5</code>,  <code>0.0.8-4</code>,  <code>0.0.8-3</code>,  <code>0.0.8-2</code>,  <code>0.0.8-1</code>,  <code>0.0.8-0</code>,  <code>0.0.7-1</code>,  <code>0.0.7-0</code>,  </span></summary>
      

      ``0.0.8-6``,  ``0.0.8-5``,  ``0.0.8-4``,  ``0.0.8-3``,  ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install sansa

   and update with::

      mamba update sansa

  To create a new environment, run::

      mamba create --name myenvname sansa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sansa:<tag>

   (see `sansa/tags`_ for valid values for ``<tag>``)


.. |downloads_sansa| image:: https://img.shields.io/conda/dn/bioconda/sansa.svg?style=flat
   :target: https://anaconda.org/bioconda/sansa
   :alt:   (downloads)
.. |docker_sansa| image:: https://quay.io/repository/biocontainers/sansa/status
   :target: https://quay.io/repository/biocontainers/sansa
.. _`sansa/tags`: https://quay.io/repository/biocontainers/sansa?tab=tags


.. raw:: html

    <script>
        var package = "sansa";
        var versions = ["0.0.8","0.0.8","0.0.8","0.0.8","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sansa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sansa/README.html