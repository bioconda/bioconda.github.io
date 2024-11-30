:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimadap'
.. highlight: bash

trimadap
========

.. conda:recipe:: trimadap
   :replaces_section_title:
   :noindex:

   Fast but inaccurate adapter trimmer for Illumina reads.

   :homepage: https://github.com/lh3/trimadap
   :license: MIT / MIT
   :recipe: /`trimadap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimadap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimadap/meta.yaml>`_

   


.. conda:package:: trimadap

   |downloads_trimadap| |docker_trimadap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r11-5</code>,  <code>r11-4</code>,  <code>r11-3</code>,  <code>r11-2</code>,  <code>r11-1</code>,  <code>r11-0</code>,  <code>r10-2</code>,  <code>r10-1</code>,  <code>r10-0</code>,  </span></summary>
      

      ``r11-5``,  ``r11-4``,  ``r11-3``,  ``r11-2``,  ``r11-1``,  ``r11-0``,  ``r10-2``,  ``r10-1``,  ``r10-0``,  ``r9-0``,  ``r2-4``,  ``r2-3``,  ``r2-2``,  ``r2-1``,  ``r2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install trimadap

   and update with::

      mamba update trimadap

  To create a new environment, run::

      mamba create --name myenvname trimadap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trimadap:<tag>

   (see `trimadap/tags`_ for valid values for ``<tag>``)


.. |downloads_trimadap| image:: https://img.shields.io/conda/dn/bioconda/trimadap.svg?style=flat
   :target: https://anaconda.org/bioconda/trimadap
   :alt:   (downloads)
.. |docker_trimadap| image:: https://quay.io/repository/biocontainers/trimadap/status
   :target: https://quay.io/repository/biocontainers/trimadap
.. _`trimadap/tags`: https://quay.io/repository/biocontainers/trimadap?tab=tags


.. raw:: html

    <script>
        var package = "trimadap";
        var versions = ["r11","r11","r11","r11","r11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimadap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimadap/README.html