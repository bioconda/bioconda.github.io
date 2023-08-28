:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cblaster'
.. highlight: bash

cblaster
========

.. conda:recipe:: cblaster
   :replaces_section_title:
   :noindex:

   Find clustered hits from a BLAST search.

   :homepage: https://github.com/gamcil/cblaster
   :documentation: https://cblaster.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`cblaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cblaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cblaster/meta.yaml>`_

   


.. conda:package:: cblaster

   |downloads_cblaster| |docker_cblaster|

   :versions:
      
      

      ``1.3.18-0``,  ``1.3.17-0``,  ``1.3.16-0``,  ``1.3.15-0``,  ``1.3.12-0``,  ``1.3.11-0``,  ``1.3.9-0``

      

   
   :depends appdirs: 
   :depends biopython: 
   :depends clinker-py: ``>=0.0.15``
   :depends diamond: 
   :depends gffutils: 
   :depends numpy: 
   :depends pysimplegui: 
   :depends python: ``>=3.6``
   :depends requests: 
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

      mamba install cblaster

   and update with::

      mamba update cblaster

  To create a new environment, run::

      mamba create --name myenvname cblaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cblaster:<tag>

   (see `cblaster/tags`_ for valid values for ``<tag>``)


.. |downloads_cblaster| image:: https://img.shields.io/conda/dn/bioconda/cblaster.svg?style=flat
   :target: https://anaconda.org/bioconda/cblaster
   :alt:   (downloads)
.. |docker_cblaster| image:: https://quay.io/repository/biocontainers/cblaster/status
   :target: https://quay.io/repository/biocontainers/cblaster
.. _`cblaster/tags`: https://quay.io/repository/biocontainers/cblaster?tab=tags


.. raw:: html

    <script>
        var package = "cblaster";
        var versions = ["1.3.18","1.3.17","1.3.16","1.3.15","1.3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cblaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cblaster/README.html