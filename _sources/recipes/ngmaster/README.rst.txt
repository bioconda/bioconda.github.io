:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmaster'
.. highlight: bash

ngmaster
========

.. conda:recipe:: ngmaster
   :replaces_section_title:
   :noindex:

   In silico multi\-antigen sequence typing for Neisseria gonorrhoeae \(NG\-MAST\) and Neisseria gonorrhoeae sequence typing for antimicrobial resistance \(NG\-STAR\).

   :homepage: https://github.com/MDU-PHL/ngmaster
   :documentation: https://github.com/MDU-PHL/ngmaster/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`ngmaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmaster/meta.yaml>`_

   


.. conda:package:: ngmaster

   |downloads_ngmaster| |docker_ngmaster|

   :versions:
      
      

      ``1.1.1-0``,  ``1.0.0-0``,  ``0.5.8-1``,  ``0.5.8-0``

      

   
   :depends biopython: 
   :depends bs4: 
   :depends mlst: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends setuptools: 
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

      mamba install ngmaster

   and update with::

      mamba update ngmaster

  To create a new environment, run::

      mamba create --name myenvname ngmaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngmaster:<tag>

   (see `ngmaster/tags`_ for valid values for ``<tag>``)


.. |downloads_ngmaster| image:: https://img.shields.io/conda/dn/bioconda/ngmaster.svg?style=flat
   :target: https://anaconda.org/bioconda/ngmaster
   :alt:   (downloads)
.. |docker_ngmaster| image:: https://quay.io/repository/biocontainers/ngmaster/status
   :target: https://quay.io/repository/biocontainers/ngmaster
.. _`ngmaster/tags`: https://quay.io/repository/biocontainers/ngmaster?tab=tags


.. raw:: html

    <script>
        var package = "ngmaster";
        var versions = ["1.1.1","1.0.0","0.5.8","0.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmaster/README.html