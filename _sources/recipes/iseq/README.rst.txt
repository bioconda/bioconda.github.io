:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iseq'
.. highlight: bash

iseq
====

.. conda:recipe:: iseq
   :replaces_section_title:
   :noindex:

   iSeq is a Bash script that allows you to download sequencing data and metadata from GSA\, SRA\, ENA\, and DDBJ databases.

   :homepage: https://github.com/BioOmics/iSeq
   :license: MIT / MIT
   :recipe: /`iseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iseq/meta.yaml>`_

   


.. conda:package:: iseq

   |downloads_iseq| |docker_iseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends aspera-cli: ``4.14.0.*``
   :depends axel: 
   :depends pigz: 
   :depends sra-tools: ``>=2.11.0``
   :depends wget: 
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

      mamba install iseq

   and update with::

      mamba update iseq

  To create a new environment, run::

      mamba create --name myenvname iseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/iseq:<tag>

   (see `iseq/tags`_ for valid values for ``<tag>``)


.. |downloads_iseq| image:: https://img.shields.io/conda/dn/bioconda/iseq.svg?style=flat
   :target: https://anaconda.org/bioconda/iseq
   :alt:   (downloads)
.. |docker_iseq| image:: https://quay.io/repository/biocontainers/iseq/status
   :target: https://quay.io/repository/biocontainers/iseq
.. _`iseq/tags`: https://quay.io/repository/biocontainers/iseq?tab=tags


.. raw:: html

    <script>
        var package = "iseq";
        var versions = ["1.9.0","1.8.0","1.7.0","1.6.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iseq/README.html