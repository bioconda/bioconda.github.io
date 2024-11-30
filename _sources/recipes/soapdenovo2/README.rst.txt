:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo2'
.. highlight: bash

soapdenovo2
===========

.. conda:recipe:: soapdenovo2
   :replaces_section_title:
   :noindex:

   SOAPdenovo is a novel short\-read assembly method that can build a de novo draft assembly for the human\-sized genomes.

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GPL
   :recipe: /`soapdenovo2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2/meta.yaml>`_

   


.. conda:package:: soapdenovo2

   |downloads_soapdenovo2| |docker_soapdenovo2|

   :versions:
      
      

      ``2.40-2``,  ``2.40-1``,  ``2.40-0``

      

   
   :depends samtools: ``0.1.19.*``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install soapdenovo2

   and update with::

      mamba update soapdenovo2

  To create a new environment, run::

      mamba create --name myenvname soapdenovo2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapdenovo2:<tag>

   (see `soapdenovo2/tags`_ for valid values for ``<tag>``)


.. |downloads_soapdenovo2| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo2
   :alt:   (downloads)
.. |docker_soapdenovo2| image:: https://quay.io/repository/biocontainers/soapdenovo2/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2
.. _`soapdenovo2/tags`: https://quay.io/repository/biocontainers/soapdenovo2?tab=tags


.. raw:: html

    <script>
        var package = "soapdenovo2";
        var versions = ["2.40","2.40","2.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2/README.html