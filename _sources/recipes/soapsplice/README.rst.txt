:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapsplice'
.. highlight: bash

soapsplice
==========

.. conda:recipe:: soapsplice
   :replaces_section_title:
   :noindex:

   We have developed a tool SOAPsplice for genome\-wide ab initio detection of splice junction sites from RNA\-Seq\, a method using new generation sequencing technologies to sequence the messenger RNA.

   :homepage: http://soap.genomics.org.cn/soapsplice.html
   :license: freely available
   :recipe: /`soapsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapsplice/meta.yaml>`_
   :links: biotools: :biotools:`SOAPsplice`, doi: :doi:`10.3389/fgene.2011.00046`

   


.. conda:package:: soapsplice

   |downloads_soapsplice| |docker_soapsplice|

   :versions:
      
      

      ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install soapsplice

   and update with::

      mamba update soapsplice

  To create a new environment, run::

      mamba create --name myenvname soapsplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/soapsplice:<tag>

   (see `soapsplice/tags`_ for valid values for ``<tag>``)


.. |downloads_soapsplice| image:: https://img.shields.io/conda/dn/bioconda/soapsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/soapsplice
   :alt:   (downloads)
.. |docker_soapsplice| image:: https://quay.io/repository/biocontainers/soapsplice/status
   :target: https://quay.io/repository/biocontainers/soapsplice
.. _`soapsplice/tags`: https://quay.io/repository/biocontainers/soapsplice?tab=tags


.. raw:: html

    <script>
        var package = "soapsplice";
        var versions = ["1.10","1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapsplice/README.html