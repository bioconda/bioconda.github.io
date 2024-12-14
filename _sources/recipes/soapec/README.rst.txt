:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapec'
.. highlight: bash

soapec
======

.. conda:recipe:: soapec
   :replaces_section_title:
   :noindex:

   a correction tool for SOAPdenovo

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GNU
   :recipe: /`soapec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapec/meta.yaml>`_

   


.. conda:package:: soapec

   |downloads_soapec| |docker_soapec|

   :versions:
      
      

      ``2.03-9``,  ``2.03-8``,  ``2.03-7``,  ``2.03-6``,  ``2.03-5``,  ``2.03-4``,  ``2.03-3``,  ``2.03-1``,  ``2.03-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install soapec

   and update with::

      mamba update soapec

  To create a new environment, run::

      mamba create --name myenvname soapec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapec:<tag>

   (see `soapec/tags`_ for valid values for ``<tag>``)


.. |downloads_soapec| image:: https://img.shields.io/conda/dn/bioconda/soapec.svg?style=flat
   :target: https://anaconda.org/bioconda/soapec
   :alt:   (downloads)
.. |docker_soapec| image:: https://quay.io/repository/biocontainers/soapec/status
   :target: https://quay.io/repository/biocontainers/soapec
.. _`soapec/tags`: https://quay.io/repository/biocontainers/soapec?tab=tags


.. raw:: html

    <script>
        var package = "soapec";
        var versions = ["2.03","2.03","2.03","2.03","2.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapec/README.html