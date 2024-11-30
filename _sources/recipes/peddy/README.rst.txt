:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peddy'
.. highlight: bash

peddy
=====

.. conda:recipe:: peddy
   :replaces_section_title:
   :noindex:

   genotype \:\: ped correspondence check\, ancestry check\, sex check. directly\, quickly on VCF

   :homepage: https://github.com/brentp/peddy
   :license: MIT / MIT
   :recipe: /`peddy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peddy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peddy/meta.yaml>`_

   


.. conda:package:: peddy

   |downloads_peddy| |docker_peddy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.8-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.6a-0``,  ``0.3.1-0``,  ``0.2.9-0``,  ``0.2.5-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends coloredlogs: 
   :depends cyvcf2: ``>=0.5.3``
   :depends matplotlib-base: ``>=1.5.0``
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends toolshed: 
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

      mamba install peddy

   and update with::

      mamba update peddy

  To create a new environment, run::

      mamba create --name myenvname peddy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peddy:<tag>

   (see `peddy/tags`_ for valid values for ``<tag>``)


.. |downloads_peddy| image:: https://img.shields.io/conda/dn/bioconda/peddy.svg?style=flat
   :target: https://anaconda.org/bioconda/peddy
   :alt:   (downloads)
.. |docker_peddy| image:: https://quay.io/repository/biocontainers/peddy/status
   :target: https://quay.io/repository/biocontainers/peddy
.. _`peddy/tags`: https://quay.io/repository/biocontainers/peddy?tab=tags


.. raw:: html

    <script>
        var package = "peddy";
        var versions = ["0.4.8","0.4.7","0.4.6","0.4.5","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peddy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peddy/README.html