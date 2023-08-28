:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'table2asn'
.. highlight: bash

table2asn
=========

.. conda:recipe:: table2asn
   :replaces_section_title:
   :noindex:

   table2asn is a command\-line program that creates sequence records for submission to GenBank \- replaces tbl2asn.

   :homepage: https://www.ncbi.nlm.nih.gov/genbank/table2asn/
   :documentation: https://ftp.ncbi.nlm.nih.gov/asn1-converters/by_program/table2asn/DOCUMENTATION/table2asn_readme.txt
   
   :license: Public Domain
   :recipe: /`table2asn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/table2asn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/table2asn/meta.yaml>`_

   


.. conda:package:: table2asn

   |downloads_table2asn| |docker_table2asn|

   :versions:
      
      

      ``1.27.792-0``,  ``1.0.883-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install table2asn

   and update with::

      mamba update table2asn

  To create a new environment, run::

      mamba create --name myenvname table2asn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/table2asn:<tag>

   (see `table2asn/tags`_ for valid values for ``<tag>``)


.. |downloads_table2asn| image:: https://img.shields.io/conda/dn/bioconda/table2asn.svg?style=flat
   :target: https://anaconda.org/bioconda/table2asn
   :alt:   (downloads)
.. |docker_table2asn| image:: https://quay.io/repository/biocontainers/table2asn/status
   :target: https://quay.io/repository/biocontainers/table2asn
.. _`table2asn/tags`: https://quay.io/repository/biocontainers/table2asn?tab=tags


.. raw:: html

    <script>
        var package = "table2asn";
        var versions = ["1.27.792","1.0.883"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/table2asn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/table2asn/README.html