:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmtools'
.. highlight: bash

dmtools
=======

.. conda:recipe:: dmtools
   :replaces_section_title:
   :noindex:

   BS\-seq\, WGBS\, NOMe\-Seq\, RRBS data storage and analysis tool dmtools

   :homepage: https://github.com/ZhouQiangwei/dmtools
   :documentation: https://dmtools-docs.readthedocs.io/en/latest/index.html
   
   :license: MIT
   :recipe: /`dmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmtools/meta.yaml>`_

   


.. conda:package:: dmtools

   |downloads_dmtools| |docker_dmtools|

   :versions:
      
      

      ``0.2.6-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.19.1,<1.20.0a0``
   :depends libcurl: ``>=8.7.1,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
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

      mamba install dmtools

   and update with::

      mamba update dmtools

  To create a new environment, run::

      mamba create --name myenvname dmtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dmtools:<tag>

   (see `dmtools/tags`_ for valid values for ``<tag>``)


.. |downloads_dmtools| image:: https://img.shields.io/conda/dn/bioconda/dmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/dmtools
   :alt:   (downloads)
.. |docker_dmtools| image:: https://quay.io/repository/biocontainers/dmtools/status
   :target: https://quay.io/repository/biocontainers/dmtools
.. _`dmtools/tags`: https://quay.io/repository/biocontainers/dmtools?tab=tags


.. raw:: html

    <script>
        var package = "dmtools";
        var versions = ["0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmtools/README.html