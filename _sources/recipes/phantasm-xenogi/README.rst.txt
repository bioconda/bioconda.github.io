:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phantasm-xenogi'
.. highlight: bash

phantasm-xenogi
===============

.. conda:recipe:: phantasm-xenogi
   :replaces_section_title:
   :noindex:

   xenoGI for PHANTASM

   :homepage: https://github.com/dr-joe-wirth/xenoGI
   :license: GPL3 / GPL-3.0
   :recipe: /`phantasm-xenogi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantasm-xenogi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantasm-xenogi/meta.yaml>`_

   


.. conda:package:: phantasm-xenogi

   |downloads_phantasm-xenogi| |docker_phantasm-xenogi|

   :versions:
      
      

      ``3.1.2-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends fasttree: 
   :depends generax: 
   :depends muscle: ``>=5``
   :depends numpy: 
   :depends parasail-python: 
   :depends python: ``>=3.9``
   :depends scipy: 
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

      mamba install phantasm-xenogi

   and update with::

      mamba update phantasm-xenogi

  To create a new environment, run::

      mamba create --name myenvname phantasm-xenogi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phantasm-xenogi:<tag>

   (see `phantasm-xenogi/tags`_ for valid values for ``<tag>``)


.. |downloads_phantasm-xenogi| image:: https://img.shields.io/conda/dn/bioconda/phantasm-xenogi.svg?style=flat
   :target: https://anaconda.org/bioconda/phantasm-xenogi
   :alt:   (downloads)
.. |docker_phantasm-xenogi| image:: https://quay.io/repository/biocontainers/phantasm-xenogi/status
   :target: https://quay.io/repository/biocontainers/phantasm-xenogi
.. _`phantasm-xenogi/tags`: https://quay.io/repository/biocontainers/phantasm-xenogi?tab=tags


.. raw:: html

    <script>
        var package = "phantasm-xenogi";
        var versions = ["3.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phantasm-xenogi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phantasm-xenogi/README.html