:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqwish'
.. highlight: bash

seqwish
=======

.. conda:recipe:: seqwish
   :replaces_section_title:
   :noindex:

   Alignment to variation graph inducer

   :homepage: https://github.com/ekg/seqwish
   :license: MIT
   :recipe: /`seqwish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwish/meta.yaml>`_

   


.. conda:package:: seqwish

   |downloads_seqwish| |docker_seqwish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.10-0</code>,  <code>0.7.9-2</code>,  <code>0.7.9-1</code>,  <code>0.7.9-0</code>,  <code>0.7.8-0</code>,  <code>0.7.7-1</code>,  <code>0.7.7-0</code>,  <code>0.7.6-1</code>,  <code>0.7.6-0</code>,  </span></summary>
      

      ``0.7.10-0``,  ``0.7.9-2``,  ``0.7.9-1``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.6``
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

      mamba install seqwish

   and update with::

      mamba update seqwish

  To create a new environment, run::

      mamba create --name myenvname seqwish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqwish:<tag>

   (see `seqwish/tags`_ for valid values for ``<tag>``)


.. |downloads_seqwish| image:: https://img.shields.io/conda/dn/bioconda/seqwish.svg?style=flat
   :target: https://anaconda.org/bioconda/seqwish
   :alt:   (downloads)
.. |docker_seqwish| image:: https://quay.io/repository/biocontainers/seqwish/status
   :target: https://quay.io/repository/biocontainers/seqwish
.. _`seqwish/tags`: https://quay.io/repository/biocontainers/seqwish?tab=tags


.. raw:: html

    <script>
        var package = "seqwish";
        var versions = ["0.7.10","0.7.9","0.7.9","0.7.9","0.7.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqwish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqwish/README.html