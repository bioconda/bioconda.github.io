:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbl2asn-forever'
.. highlight: bash

tbl2asn-forever
===============

.. conda:recipe:: tbl2asn-forever
   :replaces_section_title:
   :noindex:

   tbl2asn is a program that automates the creation of sequence records for submission to GenBank

   :homepage: https://www.ncbi.nlm.nih.gov/genbank/tbl2asn2
   :license: Public Domain
   :recipe: /`tbl2asn-forever <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn-forever>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbl2asn-forever/meta.yaml>`_

   


.. conda:package:: tbl2asn-forever

   |downloads_tbl2asn-forever| |docker_tbl2asn-forever|

   :versions:
      
      

      ``25.7.2f-5``,  ``25.7.2f-4``,  ``25.7.2f-3``,  ``25.7.2f-2``,  ``25.7.2f-1``,  ``25.7.2f-0``,  ``25.7.1f-0``,  ``25.7f-0``

      

   
   :depends libgcc: ``>=13``
   :depends libidn11: 
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tbl2asn-forever

   and update with::

      mamba update tbl2asn-forever

  To create a new environment, run::

      mamba create --name myenvname tbl2asn-forever

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tbl2asn-forever:<tag>

   (see `tbl2asn-forever/tags`_ for valid values for ``<tag>``)


.. |downloads_tbl2asn-forever| image:: https://img.shields.io/conda/dn/bioconda/tbl2asn-forever.svg?style=flat
   :target: https://anaconda.org/bioconda/tbl2asn-forever
   :alt:   (downloads)
.. |docker_tbl2asn-forever| image:: https://quay.io/repository/biocontainers/tbl2asn-forever/status
   :target: https://quay.io/repository/biocontainers/tbl2asn-forever
.. _`tbl2asn-forever/tags`: https://quay.io/repository/biocontainers/tbl2asn-forever?tab=tags


.. raw:: html

    <script>
        var package = "tbl2asn-forever";
        var versions = ["25.7.2f","25.7.2f","25.7.2f","25.7.2f","25.7.2f"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbl2asn-forever/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbl2asn-forever/README.html