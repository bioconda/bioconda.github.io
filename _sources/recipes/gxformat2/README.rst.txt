:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gxformat2'
.. highlight: bash

gxformat2
=========

.. conda:recipe:: gxformat2
   :replaces_section_title:
   :noindex:

   Galaxy Workflow Format 2 Descriptions

   :homepage: https://github.com/jmchilton/gxformat2
   :license: MIT / MIT
   :recipe: /`gxformat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gxformat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gxformat2/meta.yaml>`_

   


.. conda:package:: gxformat2

   |downloads_gxformat2| |docker_gxformat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.19.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  </span></summary>
      

      ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.2.0-2``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioblend: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends schema-salad: ``>=8.2``
   :depends six: ``>=1.9.0``
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

      mamba install gxformat2

   and update with::

      mamba update gxformat2

  To create a new environment, run::

      mamba create --name myenvname gxformat2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gxformat2:<tag>

   (see `gxformat2/tags`_ for valid values for ``<tag>``)


.. |downloads_gxformat2| image:: https://img.shields.io/conda/dn/bioconda/gxformat2.svg?style=flat
   :target: https://anaconda.org/bioconda/gxformat2
   :alt:   (downloads)
.. |docker_gxformat2| image:: https://quay.io/repository/biocontainers/gxformat2/status
   :target: https://quay.io/repository/biocontainers/gxformat2
.. _`gxformat2/tags`: https://quay.io/repository/biocontainers/gxformat2?tab=tags


.. raw:: html

    <script>
        var package = "gxformat2";
        var versions = ["0.19.0","0.18.0","0.17.0","0.16.0","0.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gxformat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gxformat2/README.html