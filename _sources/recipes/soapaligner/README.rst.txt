:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapaligner'
.. highlight: bash

soapaligner
===========

.. conda:recipe:: soapaligner
   :replaces_section_title:
   :noindex:

   SOAPaligner\/soap2 is an updated version of SOAP software for short oligonucleotide alignment.

   :homepage: http://soap.genomics.org.cn/soapaligner.html
   :license: GPL
   :recipe: /`soapaligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapaligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapaligner/meta.yaml>`_

   


.. conda:package:: soapaligner

   |downloads_soapaligner| |docker_soapaligner|

   :versions:
      
      

      ``2.21-0``

      

   
   :depends libgcc: 
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

      mamba install soapaligner

   and update with::

      mamba update soapaligner

  To create a new environment, run::

      mamba create --name myenvname soapaligner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapaligner:<tag>

   (see `soapaligner/tags`_ for valid values for ``<tag>``)


.. |downloads_soapaligner| image:: https://img.shields.io/conda/dn/bioconda/soapaligner.svg?style=flat
   :target: https://anaconda.org/bioconda/soapaligner
   :alt:   (downloads)
.. |docker_soapaligner| image:: https://quay.io/repository/biocontainers/soapaligner/status
   :target: https://quay.io/repository/biocontainers/soapaligner
.. _`soapaligner/tags`: https://quay.io/repository/biocontainers/soapaligner?tab=tags


.. raw:: html

    <script>
        var package = "soapaligner";
        var versions = ["2.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapaligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapaligner/README.html