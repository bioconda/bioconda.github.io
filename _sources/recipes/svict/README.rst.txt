:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svict'
.. highlight: bash

svict
=====

.. conda:recipe:: svict
   :replaces_section_title:
   :noindex:

   SViCT is a computational tool for detecting structural variations from cell free DNA \(cfDNA\) containing low dilutions of circulating tumor DNA \(ctDNA\).

   :homepage: https://github.com/vpc-ccg/svict
   :license: Apache-2.0
   :recipe: /`svict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svict/meta.yaml>`_

   


.. conda:package:: svict

   |downloads_svict| |docker_svict|

   :versions:
      
      

      ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install svict

   and update with::

      mamba update svict

  To create a new environment, run::

      mamba create --name myenvname svict

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svict:<tag>

   (see `svict/tags`_ for valid values for ``<tag>``)


.. |downloads_svict| image:: https://img.shields.io/conda/dn/bioconda/svict.svg?style=flat
   :target: https://anaconda.org/bioconda/svict
   :alt:   (downloads)
.. |docker_svict| image:: https://quay.io/repository/biocontainers/svict/status
   :target: https://quay.io/repository/biocontainers/svict
.. _`svict/tags`: https://quay.io/repository/biocontainers/svict?tab=tags


.. raw:: html

    <script>
        var package = "svict";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svict/README.html