:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pilon'
.. highlight: bash

pilon
=====

.. conda:recipe:: pilon
   :replaces_section_title:
   :noindex:

   Pilon is an automated genome assembly improvement and variant detection tool.

   :homepage: https://github.com/broadinstitute/pilon/
   :license: GPLv2
   :recipe: /`pilon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilon/meta.yaml>`_

   


.. conda:package:: pilon

   |downloads_pilon| |docker_pilon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24-0</code>,  <code>1.23-3</code>,  <code>1.23-2</code>,  <code>1.23-1</code>,  <code>1.23-0</code>,  <code>1.22-1</code>,  <code>1.22-0</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  </span></summary>
      

      ``1.24-0``,  ``1.23-3``,  ``1.23-2``,  ``1.23-1``,  ``1.23-0``,  ``1.22-1``,  ``1.22-0``,  ``1.20-1``,  ``1.20-0``,  ``1.19-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pilon

   and update with::

      mamba update pilon

  To create a new environment, run::

      mamba create --name myenvname pilon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pilon:<tag>

   (see `pilon/tags`_ for valid values for ``<tag>``)


.. |downloads_pilon| image:: https://img.shields.io/conda/dn/bioconda/pilon.svg?style=flat
   :target: https://anaconda.org/bioconda/pilon
   :alt:   (downloads)
.. |docker_pilon| image:: https://quay.io/repository/biocontainers/pilon/status
   :target: https://quay.io/repository/biocontainers/pilon
.. _`pilon/tags`: https://quay.io/repository/biocontainers/pilon?tab=tags


.. raw:: html

    <script>
        var package = "pilon";
        var versions = ["1.24","1.23","1.23","1.23","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pilon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pilon/README.html