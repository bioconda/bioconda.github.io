:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomad'
.. highlight: bash

genomad
=======

.. conda:recipe:: genomad
   :replaces_section_title:
   :noindex:

   Identification of mobile genetic elements

   :homepage: https://portal.nersc.gov/genomad/
   :developer docs: https://github.com/apcamargo/genomad/
   :license: BSD / Lawrence Berkeley National Labs BSD variant license
   :recipe: /`genomad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad/meta.yaml>`_

   


.. conda:package:: genomad

   |downloads_genomad| |docker_genomad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.3-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends aragorn: 
   :depends keras: ``>=2.7``
   :depends mmseqs2: ``14.7e284.*``
   :depends numba: ``>=0.57``
   :depends numpy: ``>=1.21``
   :depends pyrodigal-gv: ``>=0.3.1``
   :depends python: ``>=3.8``
   :depends python-crfsuite: 
   :depends rich-click: ``>=1.4``
   :depends taxopy: ``>=0.4.0``
   :depends tensorflow: ``>=2.7``
   :depends xgboost: ``>=1.6``
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

      mamba install genomad

   and update with::

      mamba update genomad

  To create a new environment, run::

      mamba create --name myenvname genomad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomad:<tag>

   (see `genomad/tags`_ for valid values for ``<tag>``)


.. |downloads_genomad| image:: https://img.shields.io/conda/dn/bioconda/genomad.svg?style=flat
   :target: https://anaconda.org/bioconda/genomad
   :alt:   (downloads)
.. |docker_genomad| image:: https://quay.io/repository/biocontainers/genomad/status
   :target: https://quay.io/repository/biocontainers/genomad
.. _`genomad/tags`: https://quay.io/repository/biocontainers/genomad?tab=tags


.. raw:: html

    <script>
        var package = "genomad";
        var versions = ["1.7.3","1.7.2","1.7.1","1.7.0","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomad/README.html