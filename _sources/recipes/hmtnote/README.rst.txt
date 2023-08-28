:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmtnote'
.. highlight: bash

hmtnote
=======

.. conda:recipe:: hmtnote
   :replaces_section_title:
   :noindex:

   Human mitochondrial variants annotation using HmtVar.

   :homepage: https://github.com/robertopreste/hmtnote
   :license: MIT / MIT
   :recipe: /`hmtnote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmtnote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmtnote/meta.yaml>`_

   


.. conda:package:: hmtnote

   |downloads_hmtnote| |docker_hmtnote|

   :versions:
      
      

      ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends aiofiles: ``>=0.4.0``
   :depends aiohttp: ``>=3.5.4``
   :depends click: ``>=7.0``
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.24.2``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.22.0``
   :depends scikit-allel: ``>=1.2.1``
   :depends vcfpy2: ``>=0.1.2``
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

      mamba install hmtnote

   and update with::

      mamba update hmtnote

  To create a new environment, run::

      mamba create --name myenvname hmtnote

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmtnote:<tag>

   (see `hmtnote/tags`_ for valid values for ``<tag>``)


.. |downloads_hmtnote| image:: https://img.shields.io/conda/dn/bioconda/hmtnote.svg?style=flat
   :target: https://anaconda.org/bioconda/hmtnote
   :alt:   (downloads)
.. |docker_hmtnote| image:: https://quay.io/repository/biocontainers/hmtnote/status
   :target: https://quay.io/repository/biocontainers/hmtnote
.. _`hmtnote/tags`: https://quay.io/repository/biocontainers/hmtnote?tab=tags


.. raw:: html

    <script>
        var package = "hmtnote";
        var versions = ["0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmtnote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmtnote/README.html