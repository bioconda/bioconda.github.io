:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bedtoolsr'
.. highlight: bash

r-bedtoolsr
===========

.. conda:recipe:: r-bedtoolsr
   :replaces_section_title:
   :noindex:

   R package wrapping bedtools

   :homepage: https://github.com/PhanstielLab/bedtoolsr
   :license: MIT / MIT
   :recipe: /`r-bedtoolsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedtoolsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bedtoolsr/meta.yaml>`_

   


.. conda:package:: r-bedtoolsr

   |downloads_r-bedtoolsr| |docker_r-bedtoolsr|

   :versions:
      
      

      ``2.30.0.2-2``,  ``2.30.0.2-1``,  ``2.30.0.2-0``

      

   
   :depends bedtools: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-bedtoolsr

   and update with::

      mamba update r-bedtoolsr

  To create a new environment, run::

      mamba create --name myenvname r-bedtoolsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bedtoolsr:<tag>

   (see `r-bedtoolsr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bedtoolsr| image:: https://img.shields.io/conda/dn/bioconda/r-bedtoolsr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bedtoolsr
   :alt:   (downloads)
.. |docker_r-bedtoolsr| image:: https://quay.io/repository/biocontainers/r-bedtoolsr/status
   :target: https://quay.io/repository/biocontainers/r-bedtoolsr
.. _`r-bedtoolsr/tags`: https://quay.io/repository/biocontainers/r-bedtoolsr?tab=tags


.. raw:: html

    <script>
        var package = "r-bedtoolsr";
        var versions = ["2.30.0.2","2.30.0.2","2.30.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bedtoolsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bedtoolsr/README.html