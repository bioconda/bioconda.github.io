:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idemux'
.. highlight: bash

idemux
======

.. conda:recipe:: idemux
   :replaces_section_title:
   :noindex:

   A Lexogen tool for demultiplexing and index error correcting fastq files. Works with Lexogen i7\, i5 and i1 barcodes.

   :homepage: https://github.com/lexogen-tools/idemux
   :license: OTHER / custom
   :recipe: /`idemux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemux/meta.yaml>`_

   


.. conda:package:: idemux

   |downloads_idemux| |docker_idemux|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.2-0``

      

   
   :depends dataclasses: 
   :depends importlib_resources: 
   :depends python: ``>=3.6``
   :depends tqdm: 
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

      mamba install idemux

   and update with::

      mamba update idemux

  To create a new environment, run::

      mamba create --name myenvname idemux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/idemux:<tag>

   (see `idemux/tags`_ for valid values for ``<tag>``)


.. |downloads_idemux| image:: https://img.shields.io/conda/dn/bioconda/idemux.svg?style=flat
   :target: https://anaconda.org/bioconda/idemux
   :alt:   (downloads)
.. |docker_idemux| image:: https://quay.io/repository/biocontainers/idemux/status
   :target: https://quay.io/repository/biocontainers/idemux
.. _`idemux/tags`: https://quay.io/repository/biocontainers/idemux?tab=tags


.. raw:: html

    <script>
        var package = "idemux";
        var versions = ["0.1.6","0.1.5","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idemux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idemux/README.html