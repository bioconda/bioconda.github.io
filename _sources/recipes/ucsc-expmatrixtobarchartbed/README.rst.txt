:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-expmatrixtobarchartbed'
.. highlight: bash

ucsc-expmatrixtobarchartbed
===========================

.. conda:recipe:: ucsc-expmatrixtobarchartbed
   :replaces_section_title:
   :noindex:

    Generate a barChart bed6\+5 file from a matrix\, meta data\, and coordinates. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-expmatrixtobarchartbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-expmatrixtobarchartbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-expmatrixtobarchartbed/meta.yaml>`_

   


.. conda:package:: ucsc-expmatrixtobarchartbed

   |downloads_ucsc-expmatrixtobarchartbed| |docker_ucsc-expmatrixtobarchartbed|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libpng: 
   :depends libuuid: 
   :depends mysql-connector-c: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends python: 
   :depends zlib: 
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

      mamba install ucsc-expmatrixtobarchartbed

   and update with::

      mamba update ucsc-expmatrixtobarchartbed

  To create a new environment, run::

      mamba create --name myenvname ucsc-expmatrixtobarchartbed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-expmatrixtobarchartbed:<tag>

   (see `ucsc-expmatrixtobarchartbed/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-expmatrixtobarchartbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-expmatrixtobarchartbed.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-expmatrixtobarchartbed
   :alt:   (downloads)
.. |docker_ucsc-expmatrixtobarchartbed| image:: https://quay.io/repository/biocontainers/ucsc-expmatrixtobarchartbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-expmatrixtobarchartbed
.. _`ucsc-expmatrixtobarchartbed/tags`: https://quay.io/repository/biocontainers/ucsc-expmatrixtobarchartbed?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-expmatrixtobarchartbed";
        var versions = ["377","377","377","366","357"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-expmatrixtobarchartbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-expmatrixtobarchartbed/README.html