:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evofr'
.. highlight: bash

evofr
=====

.. conda:recipe:: evofr
   :replaces_section_title:
   :noindex:

   Tools for evolutionary forecasting

   :homepage: https://github.com/blab/evofr
   :license: AGPL-3.0
   :recipe: /`evofr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evofr/meta.yaml>`_

   


.. conda:package:: evofr

   |downloads_evofr| |docker_evofr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.23-0</code>,  <code>0.1.22-0</code>,  <code>0.1.21-0</code>,  <code>0.1.20-1</code>,  <code>0.1.20-0</code>,  <code>0.1.19-0</code>,  <code>0.1.18-1</code>,  <code>0.1.18-0</code>,  <code>0.1.17-0</code>,  </span></summary>
      

      ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-1``,  ``0.1.20-0``,  ``0.1.19-0``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends blackjax: ``>=0.9.6,<0.10.0``
   :depends jax: ``>=0.4.14,<0.5.0``
   :depends jaxlib: ``>=0.4.1,<0.5.0``
   :depends numpy: ``>=1.22.4``
   :depends numpyro: ``>=0.13.2,<0.14.0``
   :depends pandas: ``>=1.4.2``
   :depends python: ``>=3.9,<4``
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

      mamba install evofr

   and update with::

      mamba update evofr

  To create a new environment, run::

      mamba create --name myenvname evofr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/evofr:<tag>

   (see `evofr/tags`_ for valid values for ``<tag>``)


.. |downloads_evofr| image:: https://img.shields.io/conda/dn/bioconda/evofr.svg?style=flat
   :target: https://anaconda.org/bioconda/evofr
   :alt:   (downloads)
.. |docker_evofr| image:: https://quay.io/repository/biocontainers/evofr/status
   :target: https://quay.io/repository/biocontainers/evofr
.. _`evofr/tags`: https://quay.io/repository/biocontainers/evofr?tab=tags


.. raw:: html

    <script>
        var package = "evofr";
        var versions = ["0.1.23","0.1.22","0.1.21","0.1.20","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evofr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evofr/README.html