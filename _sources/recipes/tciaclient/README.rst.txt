:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tciaclient'
.. highlight: bash

tciaclient
==========

.. conda:recipe:: tciaclient
   :replaces_section_title:
   :noindex:

   TCIA \(The Cancer Imaging Archive\) Download Client for Python

   :homepage: https://github.com/moritzschwyzer/tciaclient/tree/master/
   :documentation: https://moritzschwyzer.github.io/tciaclient/
   
   :developer docs: https://github.com/moritzschwyzer/tciaclient
   :license: APACHE / Apache-2.0
   :recipe: /`tciaclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tciaclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tciaclient/meta.yaml>`_

   


.. conda:package:: tciaclient

   |downloads_tciaclient| |docker_tciaclient|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends packaging: 
   :depends pip: 
   :depends python: ``<3.9``
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

      mamba install tciaclient

   and update with::

      mamba update tciaclient

  To create a new environment, run::

      mamba create --name myenvname tciaclient

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tciaclient:<tag>

   (see `tciaclient/tags`_ for valid values for ``<tag>``)


.. |downloads_tciaclient| image:: https://img.shields.io/conda/dn/bioconda/tciaclient.svg?style=flat
   :target: https://anaconda.org/bioconda/tciaclient
   :alt:   (downloads)
.. |docker_tciaclient| image:: https://quay.io/repository/biocontainers/tciaclient/status
   :target: https://quay.io/repository/biocontainers/tciaclient
.. _`tciaclient/tags`: https://quay.io/repository/biocontainers/tciaclient?tab=tags


.. raw:: html

    <script>
        var package = "tciaclient";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tciaclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tciaclient/README.html