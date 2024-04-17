:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppx'
.. highlight: bash

ppx
===

.. conda:recipe:: ppx
   :replaces_section_title:
   :noindex:

   A Python interface to proteomics data repositories

   :homepage: https://github.com/wfondrie/ppx
   :documentation: https://ppx.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`ppx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppx/meta.yaml>`_

   


.. conda:package:: ppx

   |downloads_ppx| |docker_ppx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.4.2-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends cloudpathlib: ``>=0.7.1``
   :depends python: ``>=3.10``
   :depends requests: ``>=2.23.0``
   :depends tqdm: ``>=4.60.0``
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

      mamba install ppx

   and update with::

      mamba update ppx

  To create a new environment, run::

      mamba create --name myenvname ppx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ppx:<tag>

   (see `ppx/tags`_ for valid values for ``<tag>``)


.. |downloads_ppx| image:: https://img.shields.io/conda/dn/bioconda/ppx.svg?style=flat
   :target: https://anaconda.org/bioconda/ppx
   :alt:   (downloads)
.. |docker_ppx| image:: https://quay.io/repository/biocontainers/ppx/status
   :target: https://quay.io/repository/biocontainers/ppx
.. _`ppx/tags`: https://quay.io/repository/biocontainers/ppx?tab=tags


.. raw:: html

    <script>
        var package = "ppx";
        var versions = ["1.4.2","1.3.0","1.2.6","1.2.5","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppx/README.html