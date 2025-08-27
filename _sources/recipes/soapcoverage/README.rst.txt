:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapcoverage'
.. highlight: bash

soapcoverage
============

.. conda:recipe:: soapcoverage
   :replaces_section_title:
   :noindex:

   SOAPcoverarge can calculate sequencing coverage or physical coverage as well as duplication rate and details of specific block for each segments and whole genome by using SOAP\, BLAT\, BLAST\, BlastZ\, mum\- mer and MAQ aligement results with multi\-thread.

   :homepage: http://soap.genomics.org.cn/soapaligner.html
   :license: GPL
   :recipe: /`soapcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapcoverage/meta.yaml>`_

   


.. conda:package:: soapcoverage

   |downloads_soapcoverage| |docker_soapcoverage|

   :versions:
      
      

      ``2.7.7-0``

      

   
   :depends zlib: ``1.2.11*``
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

      mamba install soapcoverage

   and update with::

      mamba update soapcoverage

  To create a new environment, run::

      mamba create --name myenvname soapcoverage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapcoverage:<tag>

   (see `soapcoverage/tags`_ for valid values for ``<tag>``)


.. |downloads_soapcoverage| image:: https://img.shields.io/conda/dn/bioconda/soapcoverage.svg?style=flat
   :target: https://anaconda.org/bioconda/soapcoverage
   :alt:   (downloads)
.. |docker_soapcoverage| image:: https://quay.io/repository/biocontainers/soapcoverage/status
   :target: https://quay.io/repository/biocontainers/soapcoverage
.. _`soapcoverage/tags`: https://quay.io/repository/biocontainers/soapcoverage?tab=tags


.. raw:: html

    <script>
        var package = "soapcoverage";
        var versions = ["2.7.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapcoverage/README.html