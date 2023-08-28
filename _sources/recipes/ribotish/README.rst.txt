:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotish'
.. highlight: bash

ribotish
========

.. conda:recipe:: ribotish
   :replaces_section_title:
   :noindex:

   Ribo TIS Hunter \(Ribo\-TISH\) identifies translation activities using ribosome profiling data.

   :homepage: https://github.com/zhpn1024/ribotish
   :license: GPL-3
   :recipe: /`ribotish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotish/meta.yaml>`_

   


.. conda:package:: ribotish

   |downloads_ribotish| |docker_ribotish|

   :versions:
      
      

      ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends scipy: 
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

      mamba install ribotish

   and update with::

      mamba update ribotish

  To create a new environment, run::

      mamba create --name myenvname ribotish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribotish:<tag>

   (see `ribotish/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotish| image:: https://img.shields.io/conda/dn/bioconda/ribotish.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotish
   :alt:   (downloads)
.. |docker_ribotish| image:: https://quay.io/repository/biocontainers/ribotish/status
   :target: https://quay.io/repository/biocontainers/ribotish
.. _`ribotish/tags`: https://quay.io/repository/biocontainers/ribotish?tab=tags


.. raw:: html

    <script>
        var package = "ribotish";
        var versions = ["0.2.5","0.2.5","0.2.4","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotish/README.html