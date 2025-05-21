:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sawfish'
.. highlight: bash

sawfish
=======

.. conda:recipe:: sawfish
   :replaces_section_title:
   :noindex:

   Structural variant discovery and genotyping from mapped PacBio HiFi data

   :homepage: https://github.com/PacificBiosciences/sawfish
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`sawfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sawfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sawfish/meta.yaml>`_

   


.. conda:package:: sawfish

   |downloads_sawfish| |docker_sawfish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.12.10-0</code>,  <code>0.12.9-0</code>,  <code>0.12.8-0</code>,  <code>0.12.7-0</code>,  <code>0.12.6-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install sawfish

   and update with::

      mamba update sawfish

  To create a new environment, run::

      mamba create --name myenvname sawfish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sawfish:<tag>

   (see `sawfish/tags`_ for valid values for ``<tag>``)


.. |downloads_sawfish| image:: https://img.shields.io/conda/dn/bioconda/sawfish.svg?style=flat
   :target: https://anaconda.org/bioconda/sawfish
   :alt:   (downloads)
.. |docker_sawfish| image:: https://quay.io/repository/biocontainers/sawfish/status
   :target: https://quay.io/repository/biocontainers/sawfish
.. _`sawfish/tags`: https://quay.io/repository/biocontainers/sawfish?tab=tags


.. raw:: html

    <script>
        var package = "sawfish";
        var versions = ["2.0.0","1.0.2","1.0.1","1.0.0","0.12.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sawfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sawfish/README.html