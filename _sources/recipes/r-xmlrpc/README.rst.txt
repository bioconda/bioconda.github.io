:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xmlrpc'
.. highlight: bash

r-xmlrpc
========

.. conda:recipe:: r-xmlrpc
   :replaces_section_title:
   :noindex:

   A simple implementation of XML\-RPC for R.

   :homepage: https://r-forge.r-project.org
   :license: BSD
   :recipe: /`r-xmlrpc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xmlrpc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xmlrpc/meta.yaml>`_

   


.. conda:package:: r-xmlrpc

   |downloads_r-xmlrpc| |docker_r-xmlrpc|

   :versions:
      
      

      ``0.2_4-7``,  ``0.2_4-6``,  ``0.2_4-5``,  ``0.2_4-4``,  ``0.2_4-3``,  ``0.2_4-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
   :depends r-xml: 
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

      mamba install r-xmlrpc

   and update with::

      mamba update r-xmlrpc

  To create a new environment, run::

      mamba create --name myenvname r-xmlrpc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-xmlrpc:<tag>

   (see `r-xmlrpc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-xmlrpc| image:: https://img.shields.io/conda/dn/bioconda/r-xmlrpc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xmlrpc
   :alt:   (downloads)
.. |docker_r-xmlrpc| image:: https://quay.io/repository/biocontainers/r-xmlrpc/status
   :target: https://quay.io/repository/biocontainers/r-xmlrpc
.. _`r-xmlrpc/tags`: https://quay.io/repository/biocontainers/r-xmlrpc?tab=tags


.. raw:: html

    <script>
        var package = "r-xmlrpc";
        var versions = ["0.2_4","0.2_4","0.2_4","0.2_4","0.2_4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xmlrpc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xmlrpc/README.html