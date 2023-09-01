:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mokapot'
.. highlight: bash

mokapot
=======

.. conda:recipe:: mokapot
   :replaces_section_title:
   :noindex:

   Fast and flexible semi\-supervised learning for peptide detection

   :homepage: https://github.com/wfondrie/mokapot
   :documentation: https://mokapot.readthedocs.io
   
   :license: APACHE / Apache-2.0
   :recipe: /`mokapot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mokapot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mokapot/meta.yaml>`_

   


.. conda:package:: mokapot

   |downloads_mokapot| |docker_mokapot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-2</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  </span></summary>
      

      ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends importlib-metadata: ``>=5.1.0``
   :depends joblib: ``>=1.1.0``
   :depends lxml: ``>=4.6.2``
   :depends matplotlib-base: ``>=3.1.3``
   :depends numba: ``>=0.48.0``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.3``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.22.1``
   :depends triqler: ``>=0.6.2``
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

      mamba install mokapot

   and update with::

      mamba update mokapot

  To create a new environment, run::

      mamba create --name myenvname mokapot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mokapot:<tag>

   (see `mokapot/tags`_ for valid values for ``<tag>``)


.. |downloads_mokapot| image:: https://img.shields.io/conda/dn/bioconda/mokapot.svg?style=flat
   :target: https://anaconda.org/bioconda/mokapot
   :alt:   (downloads)
.. |docker_mokapot| image:: https://quay.io/repository/biocontainers/mokapot/status
   :target: https://quay.io/repository/biocontainers/mokapot
.. _`mokapot/tags`: https://quay.io/repository/biocontainers/mokapot?tab=tags


.. raw:: html

    <script>
        var package = "mokapot";
        var versions = ["0.9.1","0.9.0","0.8.3","0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mokapot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mokapot/README.html