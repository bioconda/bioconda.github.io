:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromap'
.. highlight: bash

chromap
=======

.. conda:recipe:: chromap
   :replaces_section_title:
   :noindex:

   Fast alignment and preprocessing of chromatin profiles

   :homepage: https://github.com/haowenz/chromap
   :documentation: https://zhanghaowen.com/chromap/
   
   :license: MIT / MIT
   :recipe: /`chromap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromap/meta.yaml>`_

   


.. conda:package:: chromap

   |downloads_chromap| |docker_chromap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.7-0</code>,  <code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.5-2</code>,  <code>0.2.5-0</code>,  <code>0.2.4-2</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  </span></summary>
      

      ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install chromap

   and update with::

      mamba update chromap

  To create a new environment, run::

      mamba create --name myenvname chromap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromap:<tag>

   (see `chromap/tags`_ for valid values for ``<tag>``)


.. |downloads_chromap| image:: https://img.shields.io/conda/dn/bioconda/chromap.svg?style=flat
   :target: https://anaconda.org/bioconda/chromap
   :alt:   (downloads)
.. |docker_chromap| image:: https://quay.io/repository/biocontainers/chromap/status
   :target: https://quay.io/repository/biocontainers/chromap
.. _`chromap/tags`: https://quay.io/repository/biocontainers/chromap?tab=tags


.. raw:: html

    <script>
        var package = "chromap";
        var versions = ["0.2.7","0.2.6","0.2.6","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromap/README.html