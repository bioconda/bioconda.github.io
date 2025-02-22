:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink'
.. highlight: bash

plink
=====

.. conda:recipe:: plink
   :replaces_section_title:
   :noindex:

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.

   :homepage: https://www.cog-genomics.org/plink2
   :license: GPL
   :recipe: /`plink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink/meta.yaml>`_

   


.. conda:package:: plink

   |downloads_plink| |docker_plink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.90b6.21-7</code>,  <code>1.90b6.21-6</code>,  <code>1.90b6.21-5</code>,  <code>1.90b6.21-4</code>,  <code>1.90b6.21-3</code>,  <code>1.90b6.21-2</code>,  <code>1.90b6.21-1</code>,  <code>1.90b6.21-0</code>,  <code>1.90b6.18-1</code>,  </span></summary>
      

      ``1.90b6.21-7``,  ``1.90b6.21-6``,  ``1.90b6.21-5``,  ``1.90b6.21-4``,  ``1.90b6.21-3``,  ``1.90b6.21-2``,  ``1.90b6.21-1``,  ``1.90b6.21-0``,  ``1.90b6.18-1``,  ``1.90b6.18-0``,  ``1.90b6.12-2``,  ``1.90b6.12-1``,  ``1.90b6.12-0``,  ``1.90b5-1``,  ``1.90b5-0``,  ``1.90b4-3``,  ``1.90b4-2``,  ``1.90b4-1``,  ``1.90b4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install plink

   and update with::

      mamba update plink

  To create a new environment, run::

      mamba create --name myenvname plink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plink:<tag>

   (see `plink/tags`_ for valid values for ``<tag>``)


.. |downloads_plink| image:: https://img.shields.io/conda/dn/bioconda/plink.svg?style=flat
   :target: https://anaconda.org/bioconda/plink
   :alt:   (downloads)
.. |docker_plink| image:: https://quay.io/repository/biocontainers/plink/status
   :target: https://quay.io/repository/biocontainers/plink
.. _`plink/tags`: https://quay.io/repository/biocontainers/plink?tab=tags


.. raw:: html

    <script>
        var package = "plink";
        var versions = ["1.90b6.21","1.90b6.21","1.90b6.21","1.90b6.21","1.90b6.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink/README.html