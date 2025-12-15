:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virusrecom'
.. highlight: bash

virusrecom
==========

.. conda:recipe:: virusrecom
   :replaces_section_title:
   :noindex:

   An information\-theory\-based method for recombination detection of viral lineages.

   :homepage: https://github.com/ZhijianZhou01/virusrecom
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`virusrecom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virusrecom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virusrecom/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbac513`

   


.. conda:package:: virusrecom

   |downloads_virusrecom| |docker_virusrecom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.7-0</code>,  </span></summary>
      

      ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3.1-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.19.3``
   :depends openpyxl: ``>=3.0.5``
   :depends pandas: ``>=1.1.5``
   :depends psutil: ``>=5.9.1``
   :depends python: ``>=3.5,!=3.8``
   :depends scipy: ``>=1.5.4``
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

      mamba install virusrecom

   and update with::

      mamba update virusrecom

  To create a new environment, run::

      mamba create --name myenvname virusrecom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virusrecom:<tag>

   (see `virusrecom/tags`_ for valid values for ``<tag>``)


.. |downloads_virusrecom| image:: https://img.shields.io/conda/dn/bioconda/virusrecom.svg?style=flat
   :target: https://anaconda.org/bioconda/virusrecom
   :alt:   (downloads)
.. |docker_virusrecom| image:: https://quay.io/repository/biocontainers/virusrecom/status
   :target: https://quay.io/repository/biocontainers/virusrecom
.. _`virusrecom/tags`: https://quay.io/repository/biocontainers/virusrecom?tab=tags


.. raw:: html

    <script>
        var package = "virusrecom";
        var versions = ["1.3.7","1.3.7","1.3.6","1.3.5","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virusrecom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virusrecom/README.html