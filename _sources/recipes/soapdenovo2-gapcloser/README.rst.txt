:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapdenovo2-gapcloser'
.. highlight: bash

soapdenovo2-gapcloser
=====================

.. conda:recipe:: soapdenovo2-gapcloser
   :replaces_section_title:
   :noindex:

   a tool named GapCloser for SOAPdenovo.

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GNU
   :recipe: /`soapdenovo2-gapcloser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-gapcloser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2-gapcloser/meta.yaml>`_

   


.. conda:package:: soapdenovo2-gapcloser

   |downloads_soapdenovo2-gapcloser| |docker_soapdenovo2-gapcloser|

   :versions:
      
      

      ``1.12-2``,  ``1.12-1``,  ``1.12-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install soapdenovo2-gapcloser

   and update with::

      mamba update soapdenovo2-gapcloser

  To create a new environment, run::

      mamba create --name myenvname soapdenovo2-gapcloser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapdenovo2-gapcloser:<tag>

   (see `soapdenovo2-gapcloser/tags`_ for valid values for ``<tag>``)


.. |downloads_soapdenovo2-gapcloser| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2-gapcloser.svg?style=flat
   :target: https://anaconda.org/bioconda/soapdenovo2-gapcloser
   :alt:   (downloads)
.. |docker_soapdenovo2-gapcloser| image:: https://quay.io/repository/biocontainers/soapdenovo2-gapcloser/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2-gapcloser
.. _`soapdenovo2-gapcloser/tags`: https://quay.io/repository/biocontainers/soapdenovo2-gapcloser?tab=tags


.. raw:: html

    <script>
        var package = "soapdenovo2-gapcloser";
        var versions = ["1.12","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2-gapcloser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2-gapcloser/README.html