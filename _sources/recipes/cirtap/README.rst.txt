:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cirtap'
.. highlight: bash

cirtap
======

.. conda:recipe:: cirtap
   :replaces_section_title:
   :noindex:

   A CLI to handle PATRIC data from the FTP

   :homepage: https://github.com/MGXlab/cirtap/
   :developer docs: https://github.com/MGXlab/cirtap
   :license: MIT
   :recipe: /`cirtap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cirtap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cirtap/meta.yaml>`_

   


.. conda:package:: cirtap

   |downloads_cirtap| |docker_cirtap|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends biopython: 
   :depends click: ``>=8.0``
   :depends ete3: 
   :depends pandas: ``>=1.1.4``
   :depends python: 
   :depends tqdm: 
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

      mamba install cirtap

   and update with::

      mamba update cirtap

  To create a new environment, run::

      mamba create --name myenvname cirtap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cirtap:<tag>

   (see `cirtap/tags`_ for valid values for ``<tag>``)


.. |downloads_cirtap| image:: https://img.shields.io/conda/dn/bioconda/cirtap.svg?style=flat
   :target: https://anaconda.org/bioconda/cirtap
   :alt:   (downloads)
.. |docker_cirtap| image:: https://quay.io/repository/biocontainers/cirtap/status
   :target: https://quay.io/repository/biocontainers/cirtap
.. _`cirtap/tags`: https://quay.io/repository/biocontainers/cirtap?tab=tags


.. raw:: html

    <script>
        var package = "cirtap";
        var versions = ["0.3.1","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cirtap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cirtap/README.html