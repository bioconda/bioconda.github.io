:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vireosnp'
.. highlight: bash

vireosnp
========

.. conda:recipe:: vireosnp
   :replaces_section_title:
   :noindex:

   vireoSNP \- donor deconvolution for multiplexed scRNA\-seq data.

   :homepage: https://github.com/huangyh09/vireoSNP
   :documentation: https://vireosnp.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`vireosnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vireosnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vireosnp/meta.yaml>`_

   


.. conda:package:: vireosnp

   |downloads_vireosnp| |docker_vireosnp|

   :versions:
      
      

      ``0.5.9-0``,  ``0.5.8-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.9.0``
   :depends python: 
   :depends scipy: ``>=1.4.0``
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

      mamba install vireosnp

   and update with::

      mamba update vireosnp

  To create a new environment, run::

      mamba create --name myenvname vireosnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vireosnp:<tag>

   (see `vireosnp/tags`_ for valid values for ``<tag>``)


.. |downloads_vireosnp| image:: https://img.shields.io/conda/dn/bioconda/vireosnp.svg?style=flat
   :target: https://anaconda.org/bioconda/vireosnp
   :alt:   (downloads)
.. |docker_vireosnp| image:: https://quay.io/repository/biocontainers/vireosnp/status
   :target: https://quay.io/repository/biocontainers/vireosnp
.. _`vireosnp/tags`: https://quay.io/repository/biocontainers/vireosnp?tab=tags


.. raw:: html

    <script>
        var package = "vireosnp";
        var versions = ["0.5.9","0.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vireosnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vireosnp/README.html