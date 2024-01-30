:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bolt'
.. highlight: bash

bolt
====

.. conda:recipe:: bolt
   :replaces_section_title:
   :noindex:

   A variant caller for short\-read sequencing data

   :homepage: https://github.com/sakkayaphab/bolt
   :license: MIT / MIT
   :recipe: /`bolt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt/meta.yaml>`_

   


.. conda:package:: bolt

   |downloads_bolt| |docker_bolt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-7</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  <code>0.3.0-4</code>,  <code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.3.0-7``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends tbb: ``>=2021.9.0``
   :depends zlib: 
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

      mamba install bolt

   and update with::

      mamba update bolt

  To create a new environment, run::

      mamba create --name myenvname bolt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bolt:<tag>

   (see `bolt/tags`_ for valid values for ``<tag>``)


.. |downloads_bolt| image:: https://img.shields.io/conda/dn/bioconda/bolt.svg?style=flat
   :target: https://anaconda.org/bioconda/bolt
   :alt:   (downloads)
.. |docker_bolt| image:: https://quay.io/repository/biocontainers/bolt/status
   :target: https://quay.io/repository/biocontainers/bolt
.. _`bolt/tags`: https://quay.io/repository/biocontainers/bolt?tab=tags


.. raw:: html

    <script>
        var package = "bolt";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bolt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bolt/README.html