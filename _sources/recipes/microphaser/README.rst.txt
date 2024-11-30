:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microphaser'
.. highlight: bash

microphaser
===========

.. conda:recipe:: microphaser
   :replaces_section_title:
   :noindex:

   Phasing small tumor DNA sequences for mutated neopeptide generation from NGS data.

   :homepage: https://github.com/koesterlab/microphaser
   :license: MIT / MIT
   :recipe: /`microphaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microphaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microphaser/meta.yaml>`_

   


.. conda:package:: microphaser

   |downloads_microphaser| |docker_microphaser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-2</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blis: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install microphaser

   and update with::

      mamba update microphaser

  To create a new environment, run::

      mamba create --name myenvname microphaser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/microphaser:<tag>

   (see `microphaser/tags`_ for valid values for ``<tag>``)


.. |downloads_microphaser| image:: https://img.shields.io/conda/dn/bioconda/microphaser.svg?style=flat
   :target: https://anaconda.org/bioconda/microphaser
   :alt:   (downloads)
.. |docker_microphaser| image:: https://quay.io/repository/biocontainers/microphaser/status
   :target: https://quay.io/repository/biocontainers/microphaser
.. _`microphaser/tags`: https://quay.io/repository/biocontainers/microphaser?tab=tags


.. raw:: html

    <script>
        var package = "microphaser";
        var versions = ["0.8.0","0.8.0","0.8.0","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microphaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microphaser/README.html