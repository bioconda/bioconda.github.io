:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cthreepo'
.. highlight: bash

cthreepo
========

.. conda:recipe:: cthreepo
   :replaces_section_title:
   :noindex:

   A python script to interconvert seq\-ids in gff3\, gtf\, bed and other files.

   :homepage: https://github.com/vkkodali/cthreepo
   :license: MIT / MIT
   :recipe: /`cthreepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cthreepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cthreepo/meta.yaml>`_

   


.. conda:package:: cthreepo

   |downloads_cthreepo| |docker_cthreepo|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends python: 
   :depends requests: 
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

      mamba install cthreepo

   and update with::

      mamba update cthreepo

  To create a new environment, run::

      mamba create --name myenvname cthreepo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cthreepo:<tag>

   (see `cthreepo/tags`_ for valid values for ``<tag>``)


.. |downloads_cthreepo| image:: https://img.shields.io/conda/dn/bioconda/cthreepo.svg?style=flat
   :target: https://anaconda.org/bioconda/cthreepo
   :alt:   (downloads)
.. |docker_cthreepo| image:: https://quay.io/repository/biocontainers/cthreepo/status
   :target: https://quay.io/repository/biocontainers/cthreepo
.. _`cthreepo/tags`: https://quay.io/repository/biocontainers/cthreepo?tab=tags


.. raw:: html

    <script>
        var package = "cthreepo";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cthreepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cthreepo/README.html