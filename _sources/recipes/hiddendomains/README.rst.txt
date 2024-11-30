:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiddendomains'
.. highlight: bash

hiddendomains
=============

.. conda:recipe:: hiddendomains
   :replaces_section_title:
   :noindex:

   hiddenDomains is a suite of programs used to identify significant enrichment of ChIP\-seq reads that span large domains.

   :homepage: http://hiddendomains.sourceforge.net/
   :license: GPL / GNU GPL
   :recipe: /`hiddendomains <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiddendomains>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiddendomains/meta.yaml>`_

   


.. conda:package:: hiddendomains

   |downloads_hiddendomains| |docker_hiddendomains|

   :versions:
      
      

      ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-0``

      

   
   :depends bedtools: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-depmixs4: 
   :depends r-hiddenmarkov: 
   :depends samtools: 
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

      mamba install hiddendomains

   and update with::

      mamba update hiddendomains

  To create a new environment, run::

      mamba create --name myenvname hiddendomains

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hiddendomains:<tag>

   (see `hiddendomains/tags`_ for valid values for ``<tag>``)


.. |downloads_hiddendomains| image:: https://img.shields.io/conda/dn/bioconda/hiddendomains.svg?style=flat
   :target: https://anaconda.org/bioconda/hiddendomains
   :alt:   (downloads)
.. |docker_hiddendomains| image:: https://quay.io/repository/biocontainers/hiddendomains/status
   :target: https://quay.io/repository/biocontainers/hiddendomains
.. _`hiddendomains/tags`: https://quay.io/repository/biocontainers/hiddendomains?tab=tags


.. raw:: html

    <script>
        var package = "hiddendomains";
        var versions = ["3.1","3.1","3.1","3.1","3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiddendomains/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiddendomains/README.html